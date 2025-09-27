import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/restaurant-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant restaurant dining experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8">
            <Star className="h-4 w-4 text-golden fill-current" />
            <span className="text-white text-sm font-medium">Award-winning cuisine since 2015</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Experience
            <span className="bg-gradient-to-r from-golden to-cream bg-clip-text text-transparent block">
              Culinary Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Indulge in our carefully crafted dishes made with the finest ingredients, 
            served in an atmosphere of warmth and elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/menu">
              <Button variant="hero" size="lg" className="group">
                Order Online
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/reservations">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-warm-brown backdrop-blur-md">
                Reserve a Table
              </Button>
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <Clock className="h-8 w-8 text-golden mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Open Daily</h3>
              <p className="text-white/80 text-sm">11:00 AM - 11:00 PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-bounce-in" style={{animationDelay: '0.4s'}}>
              <MapPin className="h-8 w-8 text-golden mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Prime Location</h3>
              <p className="text-white/80 text-sm">Downtown District</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center animate-bounce-in" style={{animationDelay: '0.6s'}}>
              <Star className="h-8 w-8 text-golden mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">5-Star Rated</h3>
              <p className="text-white/80 text-sm">200+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-float hidden lg:block">
        <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full"></div>
      </div>
      <div className="absolute top-1/4 right-10 animate-float hidden lg:block" style={{animationDelay: '1s'}}>
        <div className="w-12 h-12 bg-golden/20 backdrop-blur-md rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;