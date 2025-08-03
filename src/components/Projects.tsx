
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: gridRef, isVisible: isGridVisible } = useScrollAnimation<HTMLDivElement>();

  const projects = [
    {
      title: "Smart IoT Weather Monitoring System",
      description: "Developed a comprehensive weather monitoring system using ESP32 microcontroller with multiple sensors. Features real-time data visualization, mobile app integration, and cloud storage.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["C++", "Arduino", "IoT", "React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Student Performance Predictor",
      description: "A full-stack machine learning web application that predicts whether a student will Pass or Fail based on academic inputs. This project integrates a React + TypeScript frontend with a Node.js (Express) backend, powered by a Python-trained ML model.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Python", "Machine Learning"],
      github: "https://github.com/prath-way/study-success-scope",
      demo: "#"
    },
    {
      title: "Machine Learning Stock Predictor",
      description: "Developed a Python-based machine learning model to predict stock prices using LSTM networks. Includes data preprocessing, feature engineering, and web interface.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Webpage App",
      description: "Developed a dynamic fitness web application featuring an interactive user interface for workout planning, progress tracking, and personalized fitness recommendations. Integrated real-time data visualization for activity monitoring and provided tools for users to set and achieve their fitness goals.",
      image: "https://th.bing.com/th/id/OIP.hoDkGR1RznxTttwUuksGqgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Fitness API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cybersecurity Job Simulation - Mastercard",
      description: "Completed a virtual job simulation focused on cybersecurity, including designing phishing email simulations and interpreting phishing simulation results. Issued by Mastercard and Forage.",
      image: "https://raw.githubusercontent.com/prath-way/certificates/main/mastercard_cybersecurity_certificate.png", // Replace with actual certificate image URL if available
      technologies: ["Cybersecurity", "Phishing Simulation", "Forage"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Built a full-stack real-time chat application with user authentication, file sharing, and group chat functionality using modern web technologies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      github: "#",
      demo: "#"
    },
    {
      title: "FitCoach_AI",
      description: "A smart AI-powered fitness and nutrition assistant that provides personalized workout plans and diet suggestions. Features food image recognition using Roboflow for real-time nutrition insights and tailored recommendations.",
      image: "https://raw.githubusercontent.com/prath-way/fitAi/main/screenshots/fitai_dashboard.png", // Replace with actual screenshot URL if available
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Roboflow API"],
      github: "https://github.com/prath-way/fitAi",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl animate-float" style={{ zIndex: 2 }}></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-tl from-green-400/5 to-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s', zIndex: 2 }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isTitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto transform transition-all duration-1000 ease-out delay-300"
               style={{ 
                 width: isTitleVisible ? '5rem' : '0',
                 opacity: isTitleVisible ? 1 : 0 
               }}
          ></div>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isGridVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm ${
                isGridVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-600"
                      style={{ 
                        animationDelay: `${(index * 100) + (techIndex * 50)}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="flex-1 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    <a href={project.title === 'Machine Learning Stock Predictor' ? 'https://github.com/prath-way/Stoxight' : project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
