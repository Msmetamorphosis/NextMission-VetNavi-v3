'use client';

import { useState } from 'react';
import { Users, Calendar, Award, MessageCircle, ArrowRight, Star } from 'lucide-react';

export default function VeteransCommunity() {
  const [showJoin, setShowJoin] = useState(false);
  const [story, setStory] = useState(0);

  const stories = [
    {
      name: 'Staff Sergeant Maria Rodriguez',
      branch: 'Army',
      achievement: 'Cybersecurity consulting practice',
      quote:
        'Structured planning helped me map clearance-friendly roles and talk about MOS work in civilian terms.',
      rating: 5,
    },
    {
      name: 'Petty Officer James Chen',
      branch: 'Navy',
      achievement: 'Engineering role in aerospace',
      quote:
        'Having a checklist for benefits and school made the overlap between service and school manageable.',
      rating: 5,
    },
    {
      name: 'Captain Sarah Williams',
      branch: 'Air Force',
      achievement: 'Nurse practitioner pathway',
      quote:
        'The resource links saved time—less guessing which site was current.',
      rating: 5,
    },
    {
      name: 'Sergeant Michael Torres',
      branch: 'Marines',
      achievement: 'Nonprofit focused on veteran housing',
      quote:
        'Peer stories reminded me the transition is a process, not a single decision.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Peer mentorship',
      description: 'Match with veterans further along a similar path.',
    },
    {
      icon: Calendar,
      title: 'Workshops',
      description: 'Career, benefits, and wellness sessions (pilot markets).',
    },
    {
      icon: MessageCircle,
      title: 'Industry circles',
      description: 'Small groups by field—IT, healthcare, trades, and more.',
    },
    {
      icon: Award,
      title: 'Milestones',
      description: 'Track wins and share what worked for you.',
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
            Stories and programs we highlight while the network grows.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-center mb-6" style={{ color: 'var(--military-green)' }}>
            Stories
          </h3>
          <div className="relative bg-white rounded-xl p-6 max-w-4xl mx-auto shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                {Array.from({ length: stories[story].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-4" style={{ color: 'var(--deep-army-green)' }}>
                &ldquo;{stories[story].quote}&rdquo;
              </blockquote>
              <h4 className="font-bold" style={{ color: 'var(--dark-brown)' }}>
                {stories[story].name}
              </h4>
              <p className="text-sm" style={{ color: 'var(--deep-army-green)' }}>
                {stories[story].branch}
              </p>
              <p className="font-semibold text-sm mt-1" style={{ color: 'var(--military-green)' }}>
                {stories[story].achievement}
              </p>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Story ${i + 1}`}
                  onClick={() => setStory(i)}
                  className={`w-2 h-2 rounded-full ${i === story ? 'bg-[var(--military-green)]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:border-[var(--muted-gold)] hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <f.icon className="h-6 w-6" />
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
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowJoin(true)}
            className="inline-flex items-center text-base font-semibold px-8 py-3 rounded-lg text-white shadow-sm hover:shadow-md"
            style={{ backgroundColor: 'var(--olive-green)' }}
          >
            Join mailing list
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <p className="mt-3 text-sm" style={{ color: 'var(--deep-army-green)' }}>
            No spam—launch updates and event invites only.
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
