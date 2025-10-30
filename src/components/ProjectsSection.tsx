import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "BEU Mate",
      category: "Web Platform",
      description: "Comprehensive educational platform for university students with course materials and collaboration tools.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    },
    {
      title: "Devskillquest",
      category: "Learning Platform",
      description: "Interactive coding challenges and skill development platform for aspiring developers.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    },
    {
      title: "The Weddings Chapter",
      category: "E-commerce",
      description: "Premium wedding planning and vendor management platform with booking system.",
      tech: ["React", "Redux", "Node.js", "Stripe"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    },
    {
      title: "DeepFake Detection",
      category: "AI/ML Project",
      description: "Advanced machine learning system for detecting manipulated media and deepfake content.",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
    {
      title: "NooBot",
      category: "Chatbot",
      description: "Intelligent conversational AI assistant with natural language processing capabilities.",
      tech: ["Python", "NLP", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border-2">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
