
import React, { HTMLAttributes } from 'react';

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={`rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm transition-shadow hover:shadow-md ${className || ''}`}
    {...props}
  />
);

const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props} />
);

const CardTitle: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className || ''}`} {...props} />
);

const CardDescription: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ className, ...props }) => (
  <p className={`text-sm text-gray-500 dark:text-gray-400 ${className || ''}`} {...props} />
);

const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className || ''}`} {...props} />
);

const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className || ''}`} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
