export const dynamic = "force-dynamic";
import MentionsLegalesClient from '@/components/pages/MentionsLegalesClient';
export const metadata = { title: 'Mentions légales', robots: { index: false }, alternates: { canonical: '/mentions-legales' } };
export default function MentionsLegalesPage() { return <MentionsLegalesClient />; }
