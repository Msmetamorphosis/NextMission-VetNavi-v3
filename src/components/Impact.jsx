import { Target, BookOpen, Users } from 'lucide-react';

export default function Impact() {
  const features = [
    {
      icon: Target,
      title: 'Personalized action plans',
      description:
        'Structured steps tuned to your goal—housing, career, school, VA benefits, and more.',
      bgColor: 'bg-[var(--military-green)]',
    },
    {
      icon: BookOpen,
      title: 'Curated resources',
      description:
        'Government and nonprofit links we can inject into plans and the resource directory.',
      bgColor: 'bg-[var(--dark-brown)]',
    },
    {
      icon: Users,
      title: 'Chat + voice',
      description:
        'Text chat through the site widget and optional ElevenLabs voice for quick questions.',
      bgColor: 'bg-[var(--coyote-tan)]',
    },
  ];

  return (
    <section className="py-20 gradient-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mission-ready support
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From benefits paperwork to job search—practical tools in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bgColor} rounded-xl p-8 text-center card-hover military-texture`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <f.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-white/90 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
