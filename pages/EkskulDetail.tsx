
import React from 'react';
import { useParams } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { ekskulData } from '../data/ekskul.ts';
import NotFound from './NotFound.tsx';

const EkskulDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ekskul = ekskulData.find((e) => e.slug === slug);

  useDocumentTitle(ekskul ? `${ekskul.title} - Rohis Riyadushshalihin` : 'Kegiatan Tidak Ditemukan');

  if (!ekskul) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/home' },
    { label: `${ekskul.title} - Rohis Riyadushshalihin` },
  ];

  return (
    <Container className="py-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200">
          {ekskul.title} - Rohis Riyadushshalihin
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Image */}
        <div className="lg:col-span-2">
          <img
            src={ekskul.image}
            alt={`Kegiatan ${ekskul.title}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-primary-200 dark:border-primary-700/50">
            <h2 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300 border-b pb-2">
              Kegiatan Eskul {ekskul.title}
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Ekskul:</span>
                <span className="text-gray-600 dark:text-gray-400">{ekskul.details.ekskul}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Ketua Umum Ekskul:</span>
                <span className="text-gray-600 dark:text-gray-400">{ekskul.details.ketua}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Waktu Ekskul:</span>
                <span className="text-gray-600 dark:text-gray-400">{ekskul.details.waktu}</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Penanggung Jawab:</span>
                <span className="text-gray-600 dark:text-gray-400">{ekskul.details.penanggungJawab}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300 mb-4">
              Penjelasan terkait kegiatan ekskul {ekskul.title.toLowerCase()} di Rohis Riyadushshalihin
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
              {ekskul.description.map((p, index) => <p key={index}>{p}</p>)}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EkskulDetail;
