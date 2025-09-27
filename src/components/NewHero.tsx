import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-earnings.jpg";

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Daily
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse-glow"> Earn</span>
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
              Turn your daily activities into <span className="text-pink-300 font-semibold">real earnings</span>. 
              Complete tasks, join lucky draws, and earn through referrals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Earning Today
              </Button>
              <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">10K+</div>
                <div className="text-purple-200">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">$50K+</div>
                <div className="text-purple-200">Paid Out</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">100+</div>
                <div className="text-purple-200">Daily Tasks</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Daily earning opportunities with coins, rewards, and digital elements"
                className="w-full h-auto rounded-2xl shadow-glow animate-float"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
