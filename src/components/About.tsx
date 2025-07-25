import { useEffect, useRef, useState } from 'react';
import { Quote, Award, Heart, Zap } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Award,
      title: "4+ Years Experience",
      description: "Crafting visual stories that resonate with audiences"
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project is approached with dedication and creativity"
    },
    {
      icon: Zap,
      title: "Precision Editing",
      description: "Meticulous attention to detail in every cut and transition"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'fade-in-view' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              About <span className="text-gradient">Arun</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A storyteller at heart, transforming raw footage into compelling narratives 
              that captivate and inspire audiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio Content */}
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <Quote className="text-primary h-8 w-8 mb-4" />
                <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
                  "I believe every cut matters — editing isn't just a skill, it's storytelling in motion."
                </blockquote>
                <cite className="text-primary font-medium">— Arun Gowda</cite>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Based in the cultural city of Mysore, I'm a passionate freelance video editor 
                  with over 4-5 years of experience transforming raw footage into compelling 
                  visual narratives. My journey began with a simple fascination for how stories 
                  could be told through the art of editing.
                </p>
                <p>
                  What drives me is the belief that every frame matters, every cut has purpose, 
                  and every transition should serve the story. Whether it's a YouTube video 
                  that needs to engage viewers from the first second, a brand film that needs 
                  to convey emotion, or a reel that tells a complete story in mere seconds, 
                  I approach each project with the same level of dedication and creative vision.
                </p>
                <p>
                  My editing style focuses on emotional storytelling, precision timing, and 
                  cinematic techniques that elevate content beyond the ordinary. I don't just 
                  edit videos; I craft experiences that resonate with audiences and leave 
                  lasting impressions.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center glass-effect p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center glass-effect p-6 rounded-xl">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;