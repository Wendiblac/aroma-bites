import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-warm py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Bistro
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our story of culinary passion and excellence
          </p>
        </div>
      </section>

      {/* Content - Placeholder for future development */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Learn more about our restaurant's story, our chef, and our commitment to exceptional dining experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;