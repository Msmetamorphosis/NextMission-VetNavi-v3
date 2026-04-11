import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import AboutBody from '@/components/AboutBody';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutBody />
      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}
