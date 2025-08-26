
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/Button.tsx';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <Button onClick={scrollToTop} size="icon" className="rounded-full shadow-lg">
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;