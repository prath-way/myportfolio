import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useVantaAnimation } from "@/hooks/useVantaAnimation";

const About = () => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: imageRef, isVisible: isImageVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: isContentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: statsRef, isVisible: isStatsVisible } = useScrollAnimation<HTMLDivElement>();

  // Vanta.js NET animation with dark mode support
  const vantaRef = useVantaAnimation({
    lightMode: {
      color: 0x64748b, // Slate
      backgroundColor: 0xffffff, // White
      points: 8.00,
      maxDistance: 20.00,
      spacing: 30.00,
    },
    darkMode: {
      color: 0xdedadb, // Light pink
      backgroundColor: 0x020617, // Dark background
      points: 10.00,
      maxDistance: 18.00,
      spacing: 25.00,
    },
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-2xl animate-pulse-slow" style={{ zIndex: 2 }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-blue-600/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s', zIndex: 2 }}></div>

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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mx-auto transform transition-all duration-1000 ease-out delay-300"
               style={{ 
                 width: isTitleVisible ? '5rem' : '0',
                 opacity: isTitleVisible ? 1 : 0 
               }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 ease-out delay-200 ${
              isImageVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-8 scale-95'
            }`}
          >
            <img
              src="https://ik.imagekit.io/chiragferwani/prath.jpeg"
              alt="Prathamesh Waydande"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            />
          </div>
          
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 ease-out delay-400 ${
              isContentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am an Electronics & Telecommunications Engineering graduate with a deep passion 
              for technology and innovation. My journey spans across hardware design, signal 
              processing, and software development, allowing me to create comprehensive solutions 
              that bridge the physical and digital worlds.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With expertise in multiple programming languages including Python, Java, C++, and 
              JavaScript, I enjoy tackling complex problems and building scalable applications. 
              My background in telecommunications gives me a unique perspective on system 
              architecture and optimization.
            </p>

            <div 
              ref={statsRef}
              className={`grid grid-cols-2 gap-6 mt-8 transition-all duration-1000 ease-out delay-600 ${
                isStatsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2 transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400">15+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2 transition-all duration-500 hover:text-green-600 dark:hover:text-green-400">5+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Programming Languages</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
