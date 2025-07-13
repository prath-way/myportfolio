import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

interface VantaConfig {
  el: string | HTMLElement;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
}

interface UseVantaAnimationOptions {
  lightMode?: Partial<VantaConfig>;
  darkMode?: Partial<VantaConfig>;
}

export const useVantaAnimation = (options: UseVantaAnimationOptions = {}) => {
  const vantaRef = useRef<any>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check current theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!vantaRef.current && elementRef.current) {
      const config = isDarkMode ? options.darkMode : options.lightMode;
      vantaRef.current = NET({
        el: elementRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 15.00,
        maxDistance: 25.00,
        spacing: 20.00,
        ...config // config will override defaults, including color/backgroundColor
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [isDarkMode, options]);

  return elementRef;
}; 