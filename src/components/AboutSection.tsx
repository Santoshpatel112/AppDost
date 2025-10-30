import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Clock, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lightbulb,
      title: "User-Centric Design",
      description: "Intuitive UI/UX that guarantees user satisfaction and engagement",
    },
    {
      icon: Award,
      title: "Cutting-Edge Technology",
      description: "Latest frameworks and tools for scalable, robust solutions",
    },
    {
      icon: Clock,
      title: "24/7 Support Available",
      description: "Round-the-clock support to ensure your success",
    },
    {
      icon: Users,
      title: "Client-Focused Approach",
      description: "Your success is our priority, every step of the way",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            About AppDost
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Your Trusted Partner for Complete{" "}
            <span className="gradient-text">Digital Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AppDost is your partner for complete digital transformation. Founded in 2025, we are a full-service IT solutions provider specializing in turning innovative ideas into powerful, market-ready products. Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust software development.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
        >
          <div className="bg-card border rounded-2xl p-8 text-center">
            <div className="gradient-text text-5xl font-bold mb-2">100%</div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-card border rounded-2xl p-8 text-center">
            <div className="gradient-text text-5xl font-bold mb-2">15+</div>
            <div className="text-muted-foreground font-medium">Projects Delivered</div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="gradient-primary rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="gradient-primary">
            Discover Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
