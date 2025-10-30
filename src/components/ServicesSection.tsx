import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive and scalable web applications tailored to your business needs.",
      features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Custom Android applications built with the latest technologies to bring your ideas to life.",
      features: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI/UX Development",
      description: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Brand Identity"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "CRM Software",
      description: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
      features: ["Custom Development", "Integration Services", "Training & Support"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS, Azure, GCP", "Migration Services", "Cloud Optimization"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and best practices.",
      features: ["Security Audits", "Threat Detection", "Compliance Management"],
      gradient: "from-red-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end services to transform your digital vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="gradient-primary rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
