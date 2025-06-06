import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://private-user-images.githubusercontent.com/113030779/452406458-6f19b15b-d21a-46ea-97cc-40029b1d0c24.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkyMzE2ODksIm5iZiI6MTc0OTIzMTM4OSwicGF0aCI6Ii8xMTMwMzA3NzkvNDUyNDA2NDU4LTZmMTliMTViLWQyMWEtNDZlYS05N2NjLTQwMDI5YjFkMGMyNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYwNlQxNzM2MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02M2VkOTYyOGFiM2U2MzI2NDcyNDc0YTVlZTNiNjI3ZGYzOWEwZDYzYTdjMmZlZGFiZDBiZjYwYmRjZjVkMGVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1-cDgmhsnhnFXr0mC8HvLbcmAh8E2Z-NYUiMRgEvfyI"
              alt="Prathamesh Waydande"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl border border-slate-200 dark:border-slate-700"
            />
          </div>
          
          <div className="space-y-6">
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

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">15+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">5+</div>
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
