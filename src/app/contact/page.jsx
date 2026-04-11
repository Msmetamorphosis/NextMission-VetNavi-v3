import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import { Mail, MessageCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email from our veteran support team',
      contact: 'support@nextmission.com',
      availability: 'Response within 24 hours',
      bgColor: 'bg-[var(--dark-brown)]'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our AI assistant or connect with live agents',
      contact: 'Available on this page',
      availability: '24/7 AI, Live agents 8AM-8PM EST',
      bgColor: 'bg-[var(--military-green)]'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-[var(--sandstone-beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--dark-brown)' }}>
            We're Here to Help
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
            Our veteran support team is ready to assist you with any questions about your transition, 
            our platform, or connecting you with the right resources.
          </p>
        </div>
      </section>

      {/* Crisis Support Alert */}
      <section className="py-6 bg-red-600 border-l-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-6 w-6 text-white mr-3" />
              <h3 className="font-semibold text-white">Crisis Support Available 24/7</h3>
            </div>
            <p className="text-white">
              If you're experiencing a mental health crisis, call the Veterans Crisis Line: 
              <strong className="ml-2">1-800-273-8255</strong> or text <strong>838255</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
              Contact Options
            </h2>
            <p className="text-xl" style={{ color: 'var(--deep-army-green)' }}>
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className={`${method.bgColor} rounded-xl p-8 text-center card-hover`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-white/20">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {method.title}
                </h3>
                <p className="text-white/90 mb-4">{method.description}</p>
                <p className="font-semibold mb-2 text-white">
                  {method.contact}
                </p>
                <p className="text-sm text-white/80">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[var(--pale-olive)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
              Send Us a Message
            </h2>
            <p className="text-xl" style={{ color: 'var(--deep-army-green)' }}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[var(--desert-khaki)]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--dark-brown)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border-2 border-[var(--desert-khaki)] rounded-lg focus:ring-2 focus:ring-[var(--military-green)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--dark-brown)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border-2 border-[var(--desert-khaki)] rounded-lg focus:ring-2 focus:ring-[var(--military-green)] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="branch" className="block text-sm font-semibold mb-2" style={{ color: 'var(--dark-brown)' }}>
                  Military Branch
                </label>
                <select
                  id="branch"
                  name="branch"
                  className="w-full p-3 border-2 border-[var(--desert-khaki)] rounded-lg focus:ring-2 focus:ring-[var(--military-green)] focus:border-transparent"
                >
                  <option value="">Select your branch (optional)</option>
                  <option value="army">Army</option>
                  <option value="navy">Navy</option>
                  <option value="air-force">Air Force</option>
                  <option value="marines">Marines</option>
                  <option value="coast-guard">Coast Guard</option>
                  <option value="space-force">Space Force</option>
                  <option value="national-guard">National Guard</option>
                  <option value="reserves">Reserves</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: 'var(--dark-brown)' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full p-3 border-2 border-[var(--desert-khaki)] rounded-lg focus:ring-2 focus:ring-[var(--military-green)] focus:border-transparent"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--dark-brown)' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full p-3 border-2 border-[var(--desert-khaki)] rounded-lg focus:ring-2 focus:ring-[var(--military-green)] focus:border-transparent resize-none"
                  placeholder="Please provide details about how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="voice-support"
                  name="voice-support"
                  className="w-4 h-4 text-[var(--military-green)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--military-green)] focus:ring-2"
                />
                <label htmlFor="voice-support" className="ml-2 text-sm" style={{ color: 'var(--deep-army-green)' }}>
                  I'd prefer to describe my needs using voice assistance
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary text-lg px-8 py-4">
                  Send Message
                </button>
                <p className="text-sm mt-3" style={{ color: 'var(--deep-army-green)' }}>
                  We'll respond within 24 hours during business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}