import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { brandsSimple } from '../data/brandsSimple';
import BrandLogo from '../components/BrandLogo';
import ReactMarkdown from 'react-markdown';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [content, setContent] = useState('');
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Scroll to top on mount and load content
  useEffect(() => {
    window.scrollTo(0, 0);
    const loadData = async () => {
      try {
        // Load article metadata
        const dataResponse = await fetch('/blogData.json');
        const data = await dataResponse.json();
        setAllArticles(data.articles || []);
        const foundArticle = data.articles.find(a => a.slug === slug);
        setArticle(foundArticle);

        // Load content
        const contentResponse = await fetch('/blogContent.json');
        const contentData = await contentResponse.json();
        if (slug && contentData[slug]) {
          setContent(contentData[slug].content);
        }
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ef6110]"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
        <p className="text-gray-600 mb-6">L'article que vous recherchez n'existe pas.</p>
        <Link to="/blog" className="text-[#ef6110] hover:underline">
          Retour au blog
        </Link>
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  let relatedArticles = allArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // If not enough related in same category, add others
  if (relatedArticles.length < 3) {
    const otherArticles = allArticles
      .filter(a => a.id !== article.id && !relatedArticles.find(r => r.id === a.id))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles = [...relatedArticles, ...otherArticles];
  }

  // Get brand info for mentioned brands
  const mentionedBrands = (article.brandsMentioned || [])
    .map(brandName => brandsSimple.find(b => b.nom.toUpperCase() === brandName.toUpperCase()))
    .filter(Boolean);

  // Format date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Share article
  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(' + article.heroImage + ')' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">{article.category}</span>
            </nav>
          </div>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-12">
            <span className="inline-block px-4 py-1.5 bg-[#ef6110] text-white rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readingTime} min de lecture</span>
              </div>
              <button 
                onClick={shareArticle}
                className="flex items-center gap-2 hover:text-[#ef6110] transition-colors ml-auto"
              >
                <Share2 size={18} />
                <span>Partager</span>
              </button>
            </div>

            {/* Excerpt / Lead paragraph */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 font-serif italic">
              {article.excerpt}
            </p>

            {/* Main content - Journalistic style */}
            <div className="prose prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-[#ef6110] prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:my-8
              prose-a:text-[#ef6110] prose-a:no-underline hover:prose-a:underline
            ">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-3">
                <Tag size={18} className="text-gray-400" />
                {(article.tags || []).map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#ef6110] hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Mentioned Brands Section */}
      {mentionedBrands.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Marques mentionnées dans cet article
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mentionedBrands.map((brand) => (
                  <Link key={brand.slug} to={'/marque/' + brand.slug}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#ef6110]">
                      <CardContent className="p-6 text-center">
                        <BrandLogo brandSlug={brand.slug} size="lg" className="mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 group-hover:text-[#ef6110] transition-colors">
                          {brand.nom}
                        </h3>
                        <p className="text-sm text-[#ef6110] mt-1">
                          Voir les machines →
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Box */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Vous avez un projet d'équipement ?
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Notre équipe d'experts ALMA est à votre disposition pour vous conseiller 
                  et vous accompagner dans votre projet d'acquisition de machines-outils.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold">
                      Contactez-nous
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                  <Link to="/partenaires">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      Voir nos machines
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedArticles.map((relArticle) => (
              <Link key={relArticle.id} to={'/blog/' + relArticle.slug}>
                <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: 'url(' + relArticle.heroImage + ')' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-[#ef6110] text-white rounded-full text-xs font-semibold">
                      {relArticle.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#ef6110] transition-colors">
                      {relArticle.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock size={14} />
                      <span>{relArticle.readingTime} min</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="border-[#ef6110] text-[#ef6110] hover:bg-[#ef6110] hover:text-white">
                <ArrowLeft className="mr-2" size={18} />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticlePage;
