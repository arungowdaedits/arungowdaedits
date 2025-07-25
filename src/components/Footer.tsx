import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gradient mb-2">
              Arun Gowda
            </h3>
            <p className="text-muted-foreground">
              Cinematic Video Editor
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              "Every Cut Tells a Story"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="btn-outline-glow mb-4"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
            <p className="text-sm text-muted-foreground">
              Based in Mysore, Karnataka
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © {currentYear} Arun Gowda. Made with 
            <Heart className="mx-2 h-4 w-4 text-red-500 fill-current" />
            for storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;