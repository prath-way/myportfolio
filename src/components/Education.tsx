import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Electronics & Telecommunications",
      institution: "Pimpri Chinchwad College of Engineering (PCCOE)",
      year: "2024 - 2028",
      grade: "CGPA: 7.0/10",
      description: "Specialized in signal processing, communication systems, and embedded electronics. Completed major projects in RF design and wireless communication.",
    },
    {
      degree: "Diploma of Education in Information Technology",
      institution: "Maharashtra State Board",
      year: "2021 - 2024",
      grade: "8.9/10",
      description: "Comprehensive foundation in IT concepts, programming fundamentals, and digital systems. Strong emphasis on practical applications and project-based learning.",
    }
  ];

  const certifications = [
    {
      name: "Python for Data Science - Coursera",
      url: "https://coursera.org/certificate/your-certificate-id"
    },
    {
      name: "Python Hacking (Create Backdoor) - Udemy",
      url: "https://www.udemy.com/certificate/UC-da8fb5b1-9eef-45bb-9194-7a6c4eef71d7/"
    },
    {
      name: "Embedded Systems Design - IEEE",
      url: "https://ieee.org/certificate/your-certificate-id"
    },
    {
      name: "Machine Learning with TensorFlow - Google",
      url: "https://google.com/certificate/your-certificate-id"
    },
    {
      name: "Full Stack Web Development - FreeCodeCamp",
      url: "https://freecodecamp.org/certification/your-certificate-id"
    }
  ];
  
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in technology and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-slate-800 dark:text-slate-200">
              <GraduationCap className="mr-3 h-7 w-7 text-slate-600 dark:text-slate-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617]">
                  <CardHeader className="pb-4">
                    <div className="w-full h-1 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 rounded-full mb-3"></div>
                    <CardTitle className="text-xl font-bold leading-tight text-slate-800 dark:text-slate-200">{edu.degree}</CardTitle>
                    <div className="flex items-center text-slate-500 dark:text-slate-400">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-lg">{edu.institution}</p>
                    <p className="font-bold text-slate-600 dark:text-slate-400 mb-3">{edu.grade}</p>
                    <p className="text-slate-500 dark:text-slate-500 leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-slate-800 dark:text-slate-200">
              <Award className="mr-3 h-7 w-7 text-slate-600 dark:text-slate-400" />
              Certifications
            </h3>
            <Card className="hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#020617]">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start justify-between group hover:bg-slate-50 dark:hover:bg-slate-700 p-3 rounded-lg transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-300 rounded-full mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 font-medium transition-colors duration-300">{cert.name}</span>
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 hover:scale-105 transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
