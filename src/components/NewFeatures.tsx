import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import taskIcon from "@/assets/task-icon.jpg";
import lotteryIcon from "@/assets/lottery-icon.jpg";
import referralIcon from "@/assets/referral-icon.jpg";

const NewFeatures = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: taskIcon,
      title: "Task-Based Earning",
      description: "Complete simple daily tasks and earn real money. From surveys to app testing, every action counts towards your earnings.",
      earnings: "Up to $50/day",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      redirectPath: "/tasks"
    },
    {
      icon: lotteryIcon,
      title: "Monthly Lucky Draw",
      description: "Participate in our monthly lucky draw for a chance to win big prizes. The more active you are, the more chances you get!",
      earnings: "Win up to $1000",
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
      redirectPath: "/homepage"
    },
    {
      icon: referralIcon,
      title: "Referral Rewards",
      description: "Invite friends and earn a percentage of their earnings. Build your network and create a passive income stream.",
      earnings: "20% commission",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      redirectPath: "/refer"
    }
  ];

  const handleGetStarted = (redirectPath: string) => {
    if (user) {
      navigate(redirectPath);
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Three Ways to <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Earn Money</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred earning method or combine all three to maximize your income potential
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-gray-200 shadow-md bg-white" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-6">
                  <div className={`absolute inset-0 ${feature.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="relative w-20 h-20 rounded-2xl mx-auto object-cover shadow-md"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-lg">{feature.earnings}</span>
                </div>
                <Button 
                  onClick={() => handleGetStarted(feature.redirectPath)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Plus Many More Features Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              We're constantly working on new ways to help you earn more. Stay tuned for exciting updates!
            </p>
            <Button 
              onClick={() => handleGetStarted("/signup")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Beta Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
