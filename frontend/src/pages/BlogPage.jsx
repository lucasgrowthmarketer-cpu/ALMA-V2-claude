import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import SEO from '../components/SEO';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        const response = await fetch('/blogData.json');
        const data = await response.json();
        setArticles(data.articles || []);
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogData();
  }, []);

  // Définir les tailles pour le layout bento - adjusted for mobile
  const getBentoSize = (index) => {
    const pattern = ['large', 'medium', 'medium', 'small', 'small', 'large', 'medium', 'medium', 'small'];
    return pattern[index % pattern.length];
  };

  if (loading) {
    return (
            <>

            <SEO 
        title="Blog - Actualités machines-outils" 
        description="Articles et guides sur les machines-outils industrielles. Conseils d'achat, tendances du marché, innovations techniques."
        path="/blog"
      />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ef6110]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Blog <span className="text-[#ef6110]">ALMA</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Actualités, conseils d'experts et guides pratiques pour l'industrie de la machine-outil.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.slice(0, 5).map((category) => (
              <span 
                key={category}
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium hover:bg-[#ef6110] transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
            {categories.length > 5 && (
              <span className="text-xs sm:text-sm text-gray-400">+{categories.length - 5}</span>
            )}
          </div>
        </div>
      </section>

      {/* Bento Grid - Responsive */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px] lg:auto-rows-[280px]">
            {articles.map((article, index) => {
              const size = getBentoSize(index);
              const isLarge = size === 'large';
              const isMedium = size === 'medium';
              
              return (
                <Link 
                  key={article.id}
                  to={'/blog/' + article.slug}
                  className={
                    (isLarge ? 'sm:col-span-2 sm:row-span-2 ' : '') +
                    (isMedium ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2 ' : '') +
                    'group'
                  }
                >
                  <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: 'url(' + article.heroImage + ')' }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />
                    
                    {/* Orange accent on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[#ef6110] transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-end text-white">
                      {/* Category Badge */}
                      <div className="mb-auto">
                        <span className="inline-block px-3 py-1 bg-[#ef6110] rounded-full text-xs font-semibold uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className={'font-bold mb-2 sm:mb-3 leading-tight group-hover:text-[#ef6110] transition-colors ' + (isLarge ? 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl' : isMedium ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg lg:text-xl')}>
                        {article.title}
                      </h2>
                      
                      {/* Excerpt - only on large cards on larger screens */}
                      {isLarge && (
                        <p className="hidden sm:block text-gray-300 mb-4 line-clamp-2 text-sm lg:text-base xl:text-lg">
                          {article.excerpt}
                        </p>
                      )}
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Clock size={14} />
                          <span>{article.readingTime} min de lecture</span>
                        </div>
                        <div className="flex items-center text-[#ef6110] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Lire</span>
                          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Restez informé des dernières actualités
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Recevez nos articles et guides d'experts directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ef6110] focus:border-transparent"
              />
              <button className="px-6 sm:px-8 py-3 bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Une question sur nos machines ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous conseiller.
          </p>
          <Link to="/contact">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#ef6110] hover:bg-gray-100 font-semibold rounded-full transition-colors shadow-lg">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </div>
  </>
  );
};

export default BlogPage;
