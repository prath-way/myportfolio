import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useVantaAnimation } from "@/hooks/useVantaAnimation";

const Skills = () => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: gridRef, isVisible: isGridVisible } = useScrollAnimation<HTMLDivElement>();

  // Vanta.js NET animation with dark mode support
  const vantaRef = useVantaAnimation({
    lightMode: {
      color: 0x94a3b8, // Slate-400
      backgroundColor: 0xf8fafc, // Slate-50
      points: 10.00,
      maxDistance: 18.00,
      spacing: 25.00,
    },
    darkMode: {
      color: 0xdedadb, // Light pink
      backgroundColor: 0x020617, // Dark background
      points: 12.00,
      maxDistance: 20.00,
      spacing: 22.00,
    },
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "C", "MATLAB", "R"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML5", "CSS3", "TypeScript", "Express.js", "MongoDB"],
    },
    {
      title: "Electronics & Embedded",
      skills: ["Arduino", "Raspberry Pi", "PCB Design", "Microcontrollers", "FPGA", "Verilog"],
    },
    {
      title: "Signal Processing",
      skills: ["DSP", "Image Processing", "Filter Design", "FFT", "Machine Learning", "TensorFlow"],
    },
    {
      title: "Telecommunications",
      skills: ["RF Design", "Antenna Theory", "Wireless Networks", "5G", "IoT", "Network Protocols"],
    },
    {
      title: "Tools & Software",
      skills: ["Git", "Docker", "Linux", "Altium Designer", "ANSYS", "LabVIEW", "AutoCAD"],
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl animate-float" style={{ zIndex: 2 }}></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-green-400/5 to-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', zIndex: 2 }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isTitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mx-auto mb-4 transform transition-all duration-1000 ease-out delay-300"
               style={{ 
                 width: isTitleVisible ? '5rem' : '0',
                 opacity: isTitleVisible ? 1 : 0 
               }}
          ></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-500"
               style={{ 
                 opacity: isTitleVisible ? 1 : 0,
                 transform: isTitleVisible ? 'translateY(0)' : 'translateY(10px)'
               }}
          >
            Comprehensive technical expertise spanning electronics, software development, and emerging technologies
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-out ${
            isGridVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transform transition-all duration-700 ease-out ${
                isGridVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="w-full h-1 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 rounded-full mb-3 transform transition-all duration-500 hover:scale-x-110"></div>
                <CardTitle className="text-lg text-center font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs skill-hover bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 hover:from-slate-600 hover:to-slate-800 dark:hover:from-slate-400 dark:hover:to-slate-200 hover:text-white dark:hover:text-slate-900 hover:shadow-lg border border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-300 font-medium transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1"
                      style={{ 
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
