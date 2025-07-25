import { useEffect, useRef, useState } from 'react';
import { Film, Palette, Sparkles, Zap, BookOpen } from 'lucide-react';

const Skills = () => {
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

  const skills = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Advanced video editing with precision timing, seamless transitions, and narrative flow",
      tools: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"]
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and grading to enhance mood and visual appeal",
      tools: ["DaVinci Resolve", "Adobe Lumetri", "Color Wheels"]
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description: "Eye-catching animations, lower thirds, and dynamic visual elements",
      tools: ["After Effects", "Motion", "Blender"]
    },
    {
      icon: Zap,
      title: "VFX",
      description: "Visual effects, compositing, and post-production enhancement",
      tools: ["After Effects", "Nuke", "Fusion"]
    },
    {
      icon: BookOpen,
      title: "Storytelling",
      description: "Crafting compelling narratives through strategic editing and pacing",
      tools: ["Story Structure", "Pacing", "Emotional Arc"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/5" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'fade-in-view' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="text-gradient">Skills</span> & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for bringing your vision to life through 
              professional video editing and post-production services.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group glass-effect p-8 rounded-2xl hover:shadow-soft transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Tools */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-primary">Tools & Software:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Software Proficiency */}
          <div className="mt-16 glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
              Software Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Adobe Premiere Pro", level: 95 },
                { name: "DaVinci Resolve", level: 90 },
                { name: "After Effects", level: 85 },
                { name: "Final Cut Pro", level: 80 }
              ].map((software, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-medium text-foreground mb-2">
                    {software.name}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${software.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {software.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;