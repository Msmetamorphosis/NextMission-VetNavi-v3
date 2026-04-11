import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import ContactBody from '@/components/ContactBody';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ContactBody />
      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}
