import { GraduationCap, Briefcase, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedResources() {
  const resources = [
    {
      icon: GraduationCap,
      title: 'Education benefits',
      description: 'GI Bill, school comparison, certifications.',
      link: '/resources',
      bgColor: 'bg-[var(--sage-green)]',
    },
    {
      icon: Briefcase,
      title: 'Career transition',
      description: 'Skills translation, job search, training programs.',
      link: '/resources',
      bgColor: 'bg-[var(--olive-drab)]',
    },
    {
      icon: Home,
      title: 'Housing assistance',
      description: 'VA loans, rental help, state-level programs.',
      link: '/resources',
      bgColor: 'bg-[var(--coyote-tan)]',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--dark-brown)' }}
          >
            Essential resources
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--deep-army-green)' }}>
            Jump to the categories you need most.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((r) => (
            <div
              key={r.title}
              className="bg-white border-2 border-[var(--desert-khaki)] rounded-xl p-8 card-hover"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${r.bgColor}`}
              >
                <r.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
                {r.title}
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
                {r.description}
              </p>
              <Link
                href={r.link}
                className="inline-flex items-center font-semibold hover:underline"
                style={{ color: 'var(--military-green)' }}
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/resources" className="btn-secondary">
            View all resources
          </Link>
        </div>
      </div>
    </section>
  );
}
