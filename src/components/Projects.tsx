
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
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
      title: "5G Signal Analysis Tool",
      description: "Built a MATLAB-based tool for analyzing 5G signal characteristics including beamforming patterns, channel estimation, and interference analysis. Used in academic research.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["MATLAB", "Signal Processing", "5G", "RF Design"],
      github: "#",
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
      title: "Digital Filter Design Suite",
      description: "Created a comprehensive digital filter design application with GUI for FIR and IIR filter design, frequency response analysis, and real-time signal filtering.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Java", "Swing", "DSP", "Signal Processing"],
      github: "#",
      demo: "#"
    },
    {
      title: "PCB Design Automation Tool",
      description: "Developed a Python script for automating PCB layout optimization using genetic algorithms. Reduces design time by 40% while improving signal integrity.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Python", "PCB Design", "Algorithms", "Optimization"],
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
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
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
