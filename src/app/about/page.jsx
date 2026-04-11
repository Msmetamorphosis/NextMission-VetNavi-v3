import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import { Shield, Target, Users, Heart, Anchor, Plane, Star, User } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Honor',
      description: 'We honor the service and sacrifice of every veteran, ensuring our platform reflects the respect they deserve.',
      bgColor: 'bg-[var(--military-green)]',
      textColor: 'text-white',
      iconBg: 'bg-white/20'
    },
    {
      icon: Target,
      title: 'Mission-Focused',
      description: 'Every feature is designed with clear purpose: helping veterans achieve successful civilian transitions.',
      bgColor: 'bg-[var(--dark-brown)]',
      textColor: 'text-white',
      iconBg: 'bg-white/20'
    },
    {
      icon: Users,
      title: 'Veteran-First',
      description: 'Built by veterans, for veterans. We understand the unique challenges because we\'ve lived them.',
      bgColor: 'bg-[var(--coyote-tan)]',
      textColor: 'text-white',
      iconBg: 'bg-white/20'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Fostering connections and mutual support among veterans navigating similar life transitions.',
      bgColor: 'bg-[var(--sage-green)]',
      textColor: 'text-white',
      iconBg: 'bg-white/20'
    }
  ];

  const militaryBranches = [
    {
      icon: Shield,
      name: 'Army',
      color: 'bg-[var(--olive-drab)]',
      description: 'This We\'ll Defend'
    },
    {
      icon: Anchor,
      name: 'Navy',
      color: 'bg-[var(--navy)]',
      description: 'Honor, Courage, Commitment'
    },
    {
      icon: Plane,
      name: 'Air Force',
      color: 'bg-[var(--medium-brown)]',
      description: 'Aim High, Fly-Fight-Win'
    },
    {
      icon: Star,
      name: 'Marines',
      color: 'bg-[var(--warm-brown)]',
      description: 'Semper Fidelis'
    },
    {
      icon: Shield,
      name: 'Coast Guard',
      color: 'bg-[var(--sage-green)]',
      description: 'Semper Paratus'
    },
    {
      icon: Star,
      name: 'Space Force',
      color: 'bg-[var(--charcoal)]',
      description: 'Semper Supra'
    }
  ];

  const leadership = [
    {
      name: 'Crystal Tubbs',
      role: 'Founder & CTO',
      branch: 'Army Veteran',
      bio: 'Crystal knows firsthand how overwhelming military transition can be. At just 19, she faced a medical discharge after only nine months of service, unprepared and with little direction or support. Seventeen years later, watching her husband navigate his own transition after 24 years of service, she saw the same gaps existed even for seasoned veterans. Determined to change that, Crystal created NextMission to provide AI-powered, personalized support for every stage of the transition journey.',
      image: '/IMG_6216.jpg'
    },
    {
      name: 'Cleveland Tubbs',
      role: 'Veteran Services Advisor | Retired U.S. Army Senior NCO',
      branch: '',
      bio: 'After 24 years of military service, multiple deployments, and assignments around the world, Cleveland believed he was prepared for civilian life. His transition, however, revealed how difficult navigating that change can be. Drawing on decades of experience mentoring and supporting soldiers through life challenges, Cleveland now helps guide the development of resources that empower veterans to successfully navigate their transition to civilian careers and communities.',
      image: '/file_00000000ac6471fdbe4431c46e068293_(1).png'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-[var(--sandstone-beige)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--dark-brown)' }}>
            Empowering Veteran Success
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--deep-army-green)' }}>
            NextMission Navigator was founded by veterans who understand that the transition from military 
            to civilian life requires more than just job placement—it demands comprehensive support, 
            personalized guidance, and a community that truly understands the journey.
          </p>
        </div>
      </section>

      {/* White space */}
      <div className="py-6 bg-white"></div>

      {/* Military Branches Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
              Serving All Who Served
            </h2>
            <p className="text-xl" style={{ color: 'var(--deep-army-green)' }}>
              We proudly support veterans from every branch of the U.S. Armed Forces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {militaryBranches.map((branch, index) => (
              <div key={index} className={`${branch.color} rounded-xl p-4 text-center card-hover`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 bg-white/20">
                  <branch.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {branch.name}
                </h3>
                <p className="text-xs text-white/80">
                  {branch.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White space */}
      <div className="py-6 bg-white"></div>

      {/* Mission Statement - Changed to olive green background */}
      <section className="pt-15 pb-4 bg-[var(--olive-drab)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why We Exist
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20">
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Every year, over 200,000 service members transition out of the military and into civilian life. 
                While they bring incredible skills, leadership experience, and dedication, they often face unique 
                challenges that traditional career services don't fully address.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                We created NextMission Navigator to bridge that gap with AI-powered personalized guidance, 
                curated resources from trusted sources, and a supportive community of veterans who've 
                successfully navigated their own transitions.
              </p>
              <p className="text-lg font-semibold text-white">
                Your service didn't end when you left the military—it evolved. We're here to help you 
                navigate that evolution with confidence and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White space */}
      <div className="py-6 bg-white"></div>

      {/* Values */}
      <section className="py-20 bg-[var(--sandstone-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
              Our Core Values
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--deep-army-green)' }}>
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${value.bgColor} rounded-xl p-6 text-center`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 ${value.iconBg} rounded-full mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${value.textColor} mb-4`}>{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White space */}
      <div className="py-6 bg-white"></div>

      {/* Leadership */}
      <section className="py-20 gradient-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Leadership Team
            </h2>
            <p className="text-xl text-white/90">
              Founded and led by veterans who understand your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex flex-col items-center text-center">
                  {leader.image === 'placeholder' ? (
                    <div className="w-32 h-32 rounded-full bg-gray-400 flex items-center justify-center mb-6">
                      <User className="w-16 h-16 text-gray-600" />
                    </div>
                  ) : (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full object-cover mb-6"
                    />
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {leader.name}
                  </h3>
                  <p className="font-semibold mb-1 text-white">
                    {leader.role}
                  </p>
                  <p className="text-white/90 mb-4">{leader.branch}</p>
                  <p className="text-white/90 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White space */}
      <div className="py-6 bg-white"></div>

      {/* Call to Action - Updated with muted gold background and reduced spacing */}
      <section className="py-16 text-white" style={{ backgroundColor: '#B8A572' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Navigate Your Next Mission?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of veterans who are successfully transitioning with our AI-powered platform.
          </p>
          <div className="flex justify-center">
            <Link href="/#action-plan-section" className="bg-[var(--military-green)] hover:bg-[var(--olive-drab)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}