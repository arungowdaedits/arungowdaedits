import { useEffect, useState } from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arunProfile from '@/assets/arun-profile.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className={`fade-in ${isVisible ? 'fade-in-view' : ''}`}>
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={arunProfile}
                alt="Arun Gowda - Video Editor"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary hero-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20"></div>
            </div>
          </div>

          {/* Title and Tagline */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-foreground">Arun</span>
            <span className="text-gradient"> Gowda</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-montserrat font-medium text-muted-foreground mb-4">
            Cinematic Video Editor
          </h2>

          <p className="text-xl md:text-2xl font-lora italic text-gold-gradient mb-12 max-w-2xl mx-auto">
            "Every Cut Tells a Story"
          </p>

          {/* Bio Preview */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate freelance video editor from Mysore with 4+ years of experience in crafting 
            compelling visual narratives. Specializing in YouTube content, cinematic videos, 
            reels, and branded storytelling that moves audiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToPortfolio}
              className="btn-cinematic group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="btn-outline-glow"
            >
              Let's Create Together
            </Button>
          </div>

          {/* Status Badge */}
          <div className="mt-12 inline-flex items-center px-4 py-2 rounded-full glass-effect">
            <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;