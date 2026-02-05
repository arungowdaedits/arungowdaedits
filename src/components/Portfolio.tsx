import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Play, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import moviePromotionThumb from '@/assets/movie-promotion-thumb.png';
import aiReelsThumb from '@/assets/ai-reels-thumb.jpg';

const Portfolio = () => {
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

  const portfolioLinks = [
    {
      name: "Behance Portfolio",
      description: "Complete portfolio showcasing diverse video editing projects",
      url: "https://behance.net/arungowda",
      icon: ExternalLink,
      type: "portfolio"
    },
    {
      name: "Ask Mysuru YouTube",
      description: "Educational content and local stories from Mysore",
      url: "https://youtube.com/@askmysuru",
      icon: Youtube,
      type: "youtube"
    },
    {
      name: "360 Mysore Properties",
      description: "Real estate promotional videos and property showcases",
      url: "https://youtube.com/@360mysoreproperties",
      icon: Youtube,
      type: "youtube"
    },
    {
      name: "One Man Talks - Instagram",
      description: "Engaging reels and short-form content creation",
      url: "https://instagram.com/onemantalks",
      icon: Instagram,
      type: "instagram"
    },
    {
      name: "Tranquil Saloon",
      description: "Promotional and branding videos for beauty services",
      url: "#",
      icon: ExternalLink,
      type: "brand"
    },
    {
      name: "Cut N Smile",
      description: "Creative video content for lifestyle brand",
      url: "#",
      icon: ExternalLink,
      type: "brand"
    },
    {
      name: "Jhankar Music",
      description: "Music video editing and promotional content",
      url: "#",
      icon: ExternalLink,
      type: "music"
    }
  ];

  const featuredVideos = [
    {
      title: "Cinematic Lyrical Video",
      url: "https://youtu.be/7EhJKxVQanc",
      thumbnail: "https://img.youtube.com/vi/7EhJKxVQanc/maxresdefault.jpg",
      description: "A cinematic piece showcasing storytelling through visual editing"
    },
    {
      title: "ADS",
      url: "https://youtu.be/ktSwXqnq0Vg",
      thumbnail: "https://img.youtube.com/vi/ktSwXqnq0Vg/maxresdefault.jpg",
      description: "Dynamic editing with advanced transitions and effects"
    },
    {
      title: "Short Films",
      url: "https://youtu.be/84CH9SNzhdQ",
      thumbnail: "https://img.youtube.com/vi/84CH9SNzhdQ/maxresdefault.jpg",
      description: "Professional brand video with compelling narrative"
    },
    {
      title: "Comedy Youtube Videos",
      url: "https://youtu.be/bOORt6-9XRo",
      thumbnail: "https://img.youtube.com/vi/bOORt6-9XRo/maxresdefault.jpg",
      description: "Rhythmic editing synchronized with musical beats"
    },
    {
      title: "Movie Promotion",
      url: "https://www.instagram.com/p/DTw1IZIk7Og/",
      thumbnail: moviePromotionThumb,
      description: "Bridging the gap between a great script and a global audience"
    },
    {
      title: "AI Reels",
      url: "https://www.instagram.com/reel/DTg4ArPEga8/",
      thumbnail: aiReelsThumb,
      description: "Merging human vision with artificial intelligence to craft hyper-realistic, high-fidelity cinematic motion"
    },
    {
      title: "Dynamic Short-Form Content",
      url: "https://www.instagram.com/reel/DOkkuXUj1uQ/",
      thumbnail: "https://img.youtube.com/vi/84CH9SNzhdQ/maxresdefault.jpg",
      description: "Specializing in high-retention short-form edits designed to drive organic reach and engagement"
    },
    {
      title: "Podcast",
      url: "https://youtu.be/kYIRCvaiTRg",
      thumbnail: "https://img.youtube.com/vi/kYIRCvaiTRg/maxresdefault.jpg",
      description: "Unlocking industry secrets through deep-dive conversations with the world's leading voices"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'youtube': return 'text-red-500';
      case 'instagram': return 'text-pink-500';
      case 'portfolio': return 'text-blue-500';
      case 'brand': return 'text-purple-500';
      case 'music': return 'text-green-500';
      default: return 'text-primary';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-card/5" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'fade-in-view' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="text-gradient">Portfolio</span> & Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my diverse range of video editing projects, from YouTube content 
              to cinematic brand videos and everything in between.
            </p>
          </div>

          {/* Featured Videos */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
              Featured Work
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredVideos.map((video, index) => (
                <div 
                  key={index}
                  className="group glass-effect rounded-xl overflow-hidden hover:shadow-soft transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => window.open(video.url, '_blank')}
                        className="btn-cinematic"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Watch
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Links */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
              Platforms & Collaborations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioLinks.map((link, index) => (
                <div 
                  key={index}
                  className="group glass-effect p-6 rounded-xl hover:shadow-soft transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => window.open(link.url, '_blank')}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <link.icon className={`h-6 w-6 ${getTypeColor(link.type)}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {link.description}
                      </p>
                      <div className="flex items-center text-primary text-sm">
                        <span>View Project</span>
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Every story deserves to be told beautifully.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cinematic"
            >
              Let's Create Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;