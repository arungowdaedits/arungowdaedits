import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Instagram, ExternalLink, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { emailjs, EMAILJS_CONFIG } from '@/lib/emailjs';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Arun Gowda'
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );
      
      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7353572704",
      action: "tel:+917353572704"
    },
    {
      icon: Mail,
      label: "Email",
      value: "arungowda2926@gmail.com",
      action: "mailto:arungowda2926@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mysore, Karnataka",
      action: null
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/aru_gowda_edits/",
      color: "text-pink-500"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://behance.net/arungowda",
      color: "text-blue-500"
    },
    {
      name: "YouTube",
      icon: ExternalLink,
      url: "https://youtube.com/@arungowda",
      color: "text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'fade-in-view' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create 
              something amazing together. Every great story starts with a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gradient mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border/20">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Follow My Work
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(social.url, '_blank')}
                        className="hover:scale-105 transition-transform"
                      >
                        <social.icon className={`h-4 w-4 mr-2 ${social.color}`} />
                        {social.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="glass-effect p-8 rounded-2xl text-center">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Let's collaborate on your next story."
                </blockquote>
                <cite className="text-primary font-medium">— Arun Gowda</cite>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gradient mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-cinematic group"
                >
                  <Send className={`mr-2 h-4 w-4 transition-transform ${isLoading ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary">
                  <strong>Quick Response:</strong> I typically respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;