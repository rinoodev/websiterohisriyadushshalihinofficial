
import React from 'react';
import { useParams } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { dakwahData } from '../data/dakwah.ts';
import NotFound from './NotFound.tsx';

const DakwahDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dakwah = dakwahData.find((d) => d.slug === slug);

  useDocumentTitle(dakwah ? dakwah.title : 'Dakwah Tidak Ditemukan');

  if (!dakwah) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/home' },
    { label: 'Kumpulan Dakwah', href: '/dakwah' },
    { label: dakwah.title },
  ];

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 text-center">
            {dakwah.title}
          </h1>
        </header>
        
        <div className="flex justify-center mb-8">
          <img 
            src={dakwah.image} 
            alt={dakwah.title}
            className="rounded-lg shadow-lg object-cover w-full md:w-2/3 lg:w-1/2"
          />
        </div>

        <article className="prose dark:prose-invert max-w-none mx-auto text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          {dakwah.content.map((paragraph, index) => {
            if (paragraph.startsWith('QUOTE:')) {
              const quote = paragraph.substring(6);
              return (
                <blockquote key={index} className="border-l-4 border-amber-400 pl-4 italic text-gray-600 dark:text-gray-400">
                  {quote}
                </blockquote>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </article>
      </div>
    </Container>
  );
};

export default DakwahDetail;