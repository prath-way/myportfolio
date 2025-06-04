import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive technical expertise spanning electronics, software development, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617]">
              <CardHeader className="pb-4">
                <div className="w-full h-1 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 rounded-full mb-3"></div>
                <CardTitle className="text-lg text-center font-semibold text-slate-800 dark:text-slate-200">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs skill-hover bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 hover:from-slate-600 hover:to-slate-800 dark:hover:from-slate-400 dark:hover:to-slate-200 hover:text-white dark:hover:text-slate-900 hover:shadow-lg border border-slate-300 dark:border-slate-600 hover:border-slate-600 dark:hover:border-slate-300 font-medium transition-all duration-300 cursor-pointer"
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
