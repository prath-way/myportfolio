import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useVantaAnimation } from "@/hooks/useVantaAnimation";

const Hero = () => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: subtitleRef, isVisible: isSubtitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: descriptionRef, isVisible: isDescriptionVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: buttonsRef, isVisible: isButtonsVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: socialRef, isVisible: isSocialVisible } = useScrollAnimation<HTMLDivElement>();

  // Vanta.js NET animation with dark mode support
  const vantaRef = useVantaAnimation({
    lightMode: {
      color: 0xf27dab, // Pink
      backgroundColor: 0xddcde8, // Light lavender
      points: 12.00,
      maxDistance: 30.00,
      spacing: 25.00,
    },
    darkMode: {
      color: 0xdedadb, // Light pink
      backgroundColor: 0x0, // Black
      points: 15.00,
      maxDistance: 25.00,
      spacing: 20.00,
    },
  });

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
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Fixed Background Animation */}
      <div 
        ref={vantaRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      ></div>

      {/* Fixed Animated background elements */}
      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-tl from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          ref={titleRef}
          className={`transition-all duration-1000 ease-out ${
            isTitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-slate-900 dark:from-slate-300 dark:via-blue-400 dark:to-slate-100 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">Prathamesh Waydande</span>
          </h1>
        </div>

        <div 
          ref={subtitleRef}
          className={`transition-all duration-1000 ease-out delay-200 ${
            isSubtitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-cyan-300 mb-8">
            Electronics & Telecommunications Engineer
          </h2>
        </div>

        <div 
          ref={descriptionRef}
          className={`transition-all duration-1000 ease-out delay-400 ${
            isDescriptionVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Passionate about bridging hardware and software through innovative solutions. <span className="text-indigo-600 dark:text-indigo-300 font-medium">Specializing in embedded systems, signal processing, and full-stack development</span> with expertise in <span className="text-blue-600 dark:text-blue-400">Python, Java, C++, and JavaScript</span>.
          </p>
        </div>
          
        <div 
          ref={buttonsRef}
          className={`transition-all duration-1000 ease-out delay-600 ${
            isButtonsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="px-8 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 dark:from-slate-600 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={handleResumeClick}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div 
          ref={socialRef}
          className={`transition-all duration-1000 ease-out delay-800 ${
            isSocialVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prathamesh-waydande-636217244" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:waydandeprathamesh2@gmail.com" 
              className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 10 }}>
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-slate-200/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <ArrowDown className="h-6 w-6 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
