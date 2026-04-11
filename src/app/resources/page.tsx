import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import { Phone, AlertTriangle, MessageSquare } from 'lucide-react';
import ResourcesAccordions from './ResourcesAccordions';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[var(--sandstone-beige)]">
      <Navigation />

      <section className="py-20 bg-[var(--sandstone-beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--dark-brown)' }}>
            Veteran Resources Directory
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
            Comprehensive collection of trusted resources from government agencies, veteran organizations,
            and military partners to support your transition and ongoing success.
          </p>
        </div>
      </section>

      <section className="bg-red-600 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 mr-4 shrink-0" />
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Emergency &amp; crisis resources (24/7)</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 text-base">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>
                    <strong>Veterans Crisis Line:</strong> 988, press 1 · 1-800-273-8255
                  </span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  <span>
                    <strong>Text:</strong> 838255
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResourcesAccordions />

      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}
