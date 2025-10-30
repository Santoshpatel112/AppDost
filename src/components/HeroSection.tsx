import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react";
import StatsCards from "@/components/StatsCards";

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    { icon: Clock, text: "Fast Delivery" },
    { icon: Shield, text: "100% Secure" },
    { icon: Sparkles, text: "24/7 Support" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background -z-10" />
      
      {/* Animated circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" {...fadeIn}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Complete IT Solution Provider Since 2025</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your{" "}
              <span className="gradient-text">Digital Ideas</span>{" "}
              Into Reality
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Our Services
              </Button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.4 }}
                  className="flex items-center space-x-2 bg-card border rounded-full px-4 py-2"
                >
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Animated Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <StatsCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
