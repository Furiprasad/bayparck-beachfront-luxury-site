
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCta?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
}

const Hero = ({ 
  title, 
  subtitle,
  showCta = true,
  backgroundImage = "/lovable-uploads/f28e4b0b-d6aa-426f-beda-8859140dc824.png",
  overlay = true
}: HeroProps) => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading-xl mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8">{subtitle}</p>
          )}
          {showCta && (
            <Link 
              to="/contact" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Book Your Plot Today
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
