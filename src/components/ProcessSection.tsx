import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Code, Rocket } from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, research your market, and create a strategic roadmap.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Design & Prototype",
      description: "Our designers craft intuitive interfaces and create interactive prototypes for validation.",
    },
    {
      icon: Code,
      number: "03",
      title: "Development & Testing",
      description: "Expert developers build your solution with rigorous testing at every stage.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deployment & Support",
      description: "We launch your product and provide ongoing maintenance and support.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative"
            >
              <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="gradient-primary rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <div className="gradient-text text-5xl font-bold mb-4 opacity-20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
