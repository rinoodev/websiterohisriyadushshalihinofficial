
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
