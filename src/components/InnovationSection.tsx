import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Bot, Brain, GraduationCap, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const InnovationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "DeepFake Detection",
      subtitle: "AI/ML Summer Internship Project",
      description: "Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer internship research project.",
      icon: Brain,
      tech: ["AI/ML", "Jupyter"],
      gradient: "from-[#7C3AED] to-[#6366F1]",
      buttonColor: "bg-[#7C3AED] hover:bg-[#6D28D9]",
    },
    {
      title: "NooBot",
      subtitle: "Intelligent Python Automation Bot",
      description: "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.",
      icon: Bot,
      tech: ["Python", "Automation"],
      gradient: "from-[#14B8A6] to-[#06B6D4]",
      buttonColor: "bg-[#14B8A6] hover:bg-[#0F766E]",
    },
    {
      title: "EduTools",
      subtitle: "Educational Web Platform",
      description: "Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.",
      icon: GraduationCap,
      tech: ["HTML/CSS", "Education"],
      gradient: "from-[#EC4899] to-[#F472B6]",
      buttonColor: "bg-[#EC4899] hover:bg-[#DB2777]",
    },
    {
      title: "DialogFlow Chatbot",
      subtitle: "Conversational AI Assistant",
      description: "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support.",
      icon: MessageSquare,
      tech: ["DialogFlow", "NLP"],
      gradient: "from-[#A855F7] via-[#6366F1] to-[#06B6D4]",
      buttonColor: "bg-gradient-to-r from-[#A855F7] to-[#06B6D4]",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Open Source & Innovation</span> Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
                  {/* Animated background circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-center text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* GitHub Button */}
                  <Button
                    className={`w-full ${project.buttonColor} text-white group-hover:shadow-lg transition-all duration-300`}
                  >
                    View on GitHub
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
