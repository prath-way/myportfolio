import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'D:\prathamesh-portfolio\prathamesh_Resume.pdf';
    link.download = 'D:\prathamesh-portfolio\prathamesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#020617] dark:via-[#020617] dark:to-[#020617] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-slate-600 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">Prathamesh Waydande</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Electronics & Telecommunications Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging hardware and software through innovative solutions. 
            Specializing in embedded systems, signal processing, and full-stack development 
            with expertise in Python, Java, C++, and JavaScript.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="px-8 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 dark:from-slate-600 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium shadow-sm hover:shadow-md transition-all duration-300"
              onClick={handleResumeClick}
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:prathamesh.waydande@email.com" className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')}>
            <ArrowDown className="h-6 w-6 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
