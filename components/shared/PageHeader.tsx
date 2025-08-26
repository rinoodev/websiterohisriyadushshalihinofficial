
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
