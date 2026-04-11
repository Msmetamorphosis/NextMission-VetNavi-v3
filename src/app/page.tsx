import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import FeaturedResources from "@/components/FeaturedResources";
import ActionPlanGenerator from "@/components/ActionPlanGenerator";
import VeteransCommunity from "@/components/VeteransCommunity";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Impact />
      <FeaturedResources />
      <ActionPlanGenerator />
      <VeteransCommunity />
      <Footer />
      <Chatbot />
      <ElevenLabsWidget />
    </div>
  );
}
