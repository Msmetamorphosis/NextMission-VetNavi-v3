import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3EB] to-[#E8E4D6]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span style={{ color: '#2E3A59' }}>Navigate Your</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--navy)] via-[var(--olive-green)] to-[var(--muted-gold)] bg-clip-text text-transparent">
              Next Mission
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#5A5A5A' }}
          >
            Your personalized AI assistant designed specifically for veterans transitioning to civilian life. Access tailored resources, support, and guidance at every step of your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/#action-plan-section"
              className="inline-flex items-center text-lg px-8 py-4 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: 'var(--olive-green)' }}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center text-lg px-8 py-4 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
