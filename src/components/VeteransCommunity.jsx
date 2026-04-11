'use client';

import { useState } from 'react';
import { Users, Calendar, Award, MessageCircle, ArrowRight } from 'lucide-react';

export default function VeteransCommunity() {
  const [showJoin, setShowJoin] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Peer mentorship',
      description: 'Match with veterans further along a similar path.',
    },
    {
      icon: Calendar,
      title: 'Virtual Events',
      description: 'Monthly workshops, career fairs, and networking sessions exclusively for veterans.',
    },
    {
      icon: MessageCircle,
      title: 'Industry Groups',
      description: 'Connect with veterans in your target field through specialized discussion groups.',
    },
    {
      icon: Award,
      title: 'Milestones',
      description: 'Celebrate milestones and inspire others with your transition success stories.',
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#E4E3D7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
            Veterans community
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--deep-army-green)' }}>
          Connect with fellow veterans, share experiences, and support each other&apos;s success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {features.map((f) => {
            const FeatureIcon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-[var(--muted-gold)] hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                    <FeatureIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: 'var(--dark-brown)' }}>
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowJoin(true)}
            className="inline-flex items-center text-base font-semibold px-8 py-3 rounded-lg text-white shadow-sm hover:shadow-md"
            style={{ backgroundColor: 'var(--olive-green)' }}
          >
            Join Our Community
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <p className="mt-3 text-sm" style={{ color: 'var(--deep-army-green)' }}>
          Free to join • Premium features available with subscription
          </p>
        </div>

        {showJoin && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full border-2 border-[var(--desert-khaki)]">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
                Stay in the loop
              </h3>
              <p className="mb-4 text-sm" style={{ color: 'var(--deep-army-green)' }}>
                Wire this button to your email provider (Mailchimp, Buttondown, etc.) when ready.
              </p>
              <button type="button" className="w-full btn-primary mb-3">
                Notify me
              </button>
              <button
                type="button"
                onClick={() => setShowJoin(false)}
                className="w-full text-gray-500 hover:text-gray-800 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
