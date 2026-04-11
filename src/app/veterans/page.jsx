import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import VeteransCommunity from '@/components/VeteransCommunity';
import { Users, Calendar, Award, MessageCircle, Star, Trophy, Heart, Shield, Anchor, Plane, Target, BookOpen, Clock, User, Briefcase, AlertTriangle, Phone } from 'lucide-react';

export default function Veterans() {
  const supportFeatures = [
    {
      icon: Target,
      title: 'Personalized Action Plans',
      description: 'AI-driven, tailored guidance for veterans',
      bgColor: 'bg-[var(--military-green)]'
    },
    {
      icon: BookOpen,
      title: 'Resource Hub',
      description: 'Curated support for your success',
      bgColor: 'bg-[var(--dark-brown)]'
    },
    {
      icon: Users,
      title: '24/7 Access',
      description: 'Navigate your goals anytime, anywhere',
      bgColor: 'bg-[var(--coyote-tan)]'
    },
    {
      icon: MessageCircle,
      title: 'NextMission Community',
      description: 'Empowering your next chapter',
      bgColor: 'bg-[var(--sage-green)]'
    }
  ];

  const mentorshipPrograms = [
    {
      title: 'Career Transition',
      description: 'One-on-one guidance from veterans who successfully transitioned to your target industry.',
      duration: '6 months',
      commitment: '2 hrs/week',
      icon: Briefcase
    },
    {
      title: 'Entrepreneurship Support',
      description: 'Connect with veteran business owners who can guide you through starting your own company.',
      duration: '12 months',
      commitment: '3 hrs/week',
      icon: Target
    },
    {
      title: 'Education & Certification',
      description: 'Get matched with veterans who navigated similar educational paths and certification programs.',
      duration: '3 months',
      commitment: '1 hr/week',
      icon: BookOpen
    },
    {
      title: 'Leadership Development',
      description: 'Develop civilian leadership skills with guidance from experienced veteran executives.',
      duration: '9 months',
      commitment: '2 hrs/week',
      icon: Award
    }
  ];

  const branchSupport = [
    {
      icon: Shield,
      name: 'Army',
      color: 'bg-[var(--olive-drab)]'
    },
    {
      icon: Anchor,
      name: 'Navy',
      color: 'bg-[var(--navy)]'
    },
    {
      icon: Plane,
      name: 'Air Force',
      color: 'bg-[var(--medium-brown)]'
    },
    {
      icon: Star,
      name: 'Marines',
      color: 'bg-[var(--warm-brown)]'
    },
    {
      icon: Shield,
      name: 'Coast Guard',
      color: 'bg-[var(--sage-green)]'
    },
    {
      icon: Star,
      name: 'Space Force',
      color: 'bg-[var(--charcoal)]'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image - Reduced height */}
      <section 
        className="relative py-12 bg-cover bg-center bg-no-repeat min-h-[300px] flex items-center"
        style={{
          backgroundImage: 'url(/veterans-support.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Veterans Supporting Veterans
          </h1>
          <p className="text-lg leading-relaxed text-white/95 drop-shadow-md">
            Join a thriving community of military veterans who understand your journey and are committed 
            to helping each other succeed in civilian life.
          </p>
        </div>
      </section>

      {/* Crisis Support Alert */}
      <section className="bg-red-600 text-white py-1 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 mr-4 flex-shrink-0" />
            <div className="text-center">
              <h3 className="font-bold text-xl mb-3">Emergency & Crisis Resources Available 24/7</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 text-base">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span><strong>Veterans Crisis Line:</strong> 1-800-273-8255</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span><strong>Text:</strong> 838255</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span><strong>Suicide Prevention:</strong> 988</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Representation - Reduced size while keeping same style */}
      <section className="py-8 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              All Branches, One Community
            </h2>
            <p className="text-lg text-white/90">
              Veterans from every branch of service supporting each other's success.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {branchSupport.map((branch, index) => (
              <div key={index} className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 hover:bg-white/20 transition-all duration-200 card-hover">
                <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full mr-2 ${branch.color}`}>
                  <branch.icon className="h-3 w-3 text-white" />
                </div>
                <span className="text-white font-semibold text-sm">
                  {branch.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White space section below */}
      <section className="py-12 bg-white"></section>

      {/* How We Support Your Next Mission */}
      <section className="py-20 bg-[var(--pale-olive)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--dark-brown)' }}>
              How We Support Your Next Mission
            </h2>
            <p className="text-xl" style={{ color: 'var(--deep-army-green)' }}>
              Practical tools designed to guide every step of your transition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className={`text-center p-6 ${feature.bgColor} rounded-xl card-hover`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-white/20">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs - Redesigned */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-3" style={{ color: 'var(--dark-brown)' }}>
              Mentorship Programs
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--deep-army-green)' }}>
              Get paired with experienced veterans who've successfully navigated the path you're on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorshipPrograms.map((program, index) => (
              <div key={index} className="group border-2 border-gray-200 rounded-lg p-5 hover:border-[var(--olive-green)] hover:shadow-md transition-all duration-200 bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[var(--olive-green)] group-hover:text-white flex items-center justify-center mr-3 transition-colors duration-200">
                    <program.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--dark-brown)' }}>
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-xs leading-relaxed mb-4 text-gray-600">
                  {program.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs">
                    <Clock className="h-3 w-3 mr-2 text-gray-400" />
                    <span className="font-medium text-gray-700">Duration:</span>
                    <span className="ml-1 text-gray-600">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <User className="h-3 w-3 mr-2 text-gray-400" />
                    <span className="font-medium text-gray-700">Time:</span>
                    <span className="ml-1 text-gray-600">{program.commitment}</span>
                  </div>
                </div>
                
                <button className="w-full text-xs font-semibold py-2 px-3 rounded border-2 border-[var(--olive-green)] text-[var(--olive-green)] hover:bg-[var(--olive-green)] hover:text-white transition-colors duration-200">
                  Apply for Mentorship
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans Community Component */}
      <VeteransCommunity />

      {/* Call to Action - Changed background to gold */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted-gold)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" style={{ color: 'var(--navy)' }} />
              <Heart className="h-8 w-8" style={{ color: 'var(--navy)' }} />
              <Users className="h-8 w-8" style={{ color: 'var(--navy)' }} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
            Your Service Continues Here
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--deep-army-green)' }}>
            Join a community that understands your journey and is committed to your success. 
            Together, we're stronger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--military-green)] hover:bg-[var(--olive-drab)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Join Our Community
            </button>
            <button className="bg-[var(--navy)] hover:bg-[var(--charcoal)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}