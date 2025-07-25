import { useEffect, useRef, useState } from 'react';
import { Play, Users, Smartphone, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Play,
      title: "YouTube Content Editing",
      description: "Engaging YouTube videos with dynamic pacing, eye-catching thumbnails, and optimized content flow for maximum viewer retention.",
      features: [
        "Dynamic pacing and transitions",
        "Engaging intro/outro sequences",
        "Thumbnail design optimization",
        "Audio enhancement and sync",
        "SEO-optimized video structure"
      ],
      price: "Starting from ₹2,500"
    },
    {
      icon: Smartphone,
      title: "Reels & Short-Form Content",
      description: "High-impact reels and short videos designed for social media platforms with trending formats and viral potential.",
      features: [
        "Instagram/YouTube Shorts optimization",
        "Trending format adaptation",
        "Quick turnaround time",
        "Platform-specific aspect ratios",
        "Engaging visual effects"
      ],
      price: "Starting from ₹1,500"
    },
    {
      icon: Building,
      title: "Cinematic Brand Videos",
      description: "Professional cinematic videos for brands, businesses, and individuals with high production value and storytelling focus.",
      features: [
        "Cinematic color grading",
        "Professional motion graphics",
        "Brand identity integration",
        "Multiple format delivery",
        "Revision rounds included"
      ],
      price: "Starting from ₹5,000"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-hero" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'fade-in-view' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="text-gradient">Services</span> Offered
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional video editing services tailored to your specific needs, 
              from YouTube content to cinematic brand videos.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group glass-effect p-8 rounded-2xl hover:shadow-dramatic transition-all duration-500 hover:scale-105 border border-border/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-border/20 pt-6">
                  <div className="text-lg font-semibold text-gradient mb-4">
                    {service.price}
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full btn-outline-glow group-hover:btn-cinematic transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
              My Creative Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
                { step: "02", title: "Planning", desc: "Creating a detailed editing strategy" },
                { step: "03", title: "Editing", desc: "Crafting your story with precision" },
                { step: "04", title: "Delivery", desc: "Final review and project delivery" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;