'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import {
  resourceCategories,
  type CategoryKey,
} from '@/data/resources/catalog';
import {
  GraduationCap,
  Briefcase,
  Home,
  Heart,
  DollarSign,
  Users,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Phone,
  AlertTriangle,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<CategoryKey, LucideIcon> = {
  career: Briefcase,
  education: GraduationCap,
  housing: Home,
  healthcare: Heart,
  finance: DollarSign,
  community: Users,
};

const initial: Record<CategoryKey, boolean> = {
  career: false,
  education: false,
  housing: false,
  healthcare: false,
  finance: false,
  community: false,
};

export default function ResourcesPage() {
  const [open, setOpen] = useState(initial);

  const toggle = (k: CategoryKey) =>
    setOpen((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="min-h-screen bg-[var(--sandstone-beige)]">
      <Navigation />

      <section className="py-20 bg-[var(--sandstone-beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--dark-brown)' }}>
            Veteran resources directory
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
            National programs plus a few state and regional entries (Texas, Florida, Tampa) you can extend in{' '}
            <code className="text-sm bg-white/60 px-1 rounded">src/data/resources/catalog.ts</code>.
          </p>
        </div>
      </section>

      <section className="bg-red-600 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 mr-4 shrink-0" />
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Crisis support (24/7)</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 text-base">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>
                    <strong>Veterans Crisis Line:</strong> 988, press 1 · was 1-800-273-8255
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {(Object.keys(resourceCategories) as CategoryKey[]).map((key) => {
            const cat = resourceCategories[key];
            const Icon = ICONS[key];
            return (
              <div
                key={key}
                className="border-2 border-[var(--desert-khaki)] rounded-xl overflow-hidden shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  className={`w-full p-6 ${cat.bgColor} hover:opacity-90 transition-all flex items-center justify-between`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className={`text-2xl font-bold ${cat.textColor}`}>{cat.title}</h3>
                      <p className="text-white/90 text-lg">{cat.description}</p>
                    </div>
                  </div>
                  {open[key] ? (
                    <ChevronDown className={`h-6 w-6 ${cat.textColor}`} />
                  ) : (
                    <ChevronRight className={`h-6 w-6 ${cat.textColor}`} />
                  )}
                </button>

                {open[key] && (
                  <div className="p-6 bg-white border-t-2 border-[var(--desert-khaki)]">
                    <div className="grid md:grid-cols-2 gap-6">
                      {cat.resources.map((resource, index) => (
                        <div
                          key={resource.url + index}
                          className="border-2 border-[var(--pale-olive)] rounded-lg p-5 hover:shadow-md hover:border-[var(--coyote-tan)] transition-all bg-[var(--pale-olive)]"
                        >
                          <div className="flex items-start justify-between mb-3 gap-2">
                            <h4 className="font-bold text-lg" style={{ color: 'var(--dark-brown)' }}>
                              {resource.name}
                            </h4>
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-semibold shrink-0 ${
                                resource.type === 'Government'
                                  ? 'bg-[var(--military-green)] text-white'
                                  : resource.type === 'Organization'
                                    ? 'bg-[var(--dark-brown)] text-white'
                                    : 'bg-[var(--coyote-tan)] text-white'
                              }`}
                            >
                              {resource.type}
                            </span>
                          </div>
                          <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
                            {resource.description}
                          </p>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold hover:underline"
                            style={{ color: 'var(--military-green)' }}
                          >
                            Visit resource
                            <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}
