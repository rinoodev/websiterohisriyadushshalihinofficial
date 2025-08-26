
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500 mx-2" />
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
