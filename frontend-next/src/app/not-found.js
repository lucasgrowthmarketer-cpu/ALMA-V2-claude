import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#ef6110] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
      <Link href="/" className="bg-[#ef6110] text-white px-6 py-3 rounded-lg hover:bg-[#d4550e] transition-colors">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
