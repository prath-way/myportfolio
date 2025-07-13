import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check if dark mode preference exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to light mode unless explicitly set to dark
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeClick = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Prathamesh_Waydande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
            Prathamesh Waydande
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-900 dark:from-slate-300 dark:to-slate-100 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              size="sm" 
              onClick={handleResumeClick}
              className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 dark:from-slate-600 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-slate-300 dark:border-slate-600 transition-all duration-300 transform hover:scale-110"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 text-left font-medium w-full text-left py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 dark:from-slate-600 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
              onClick={handleResumeClick}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
