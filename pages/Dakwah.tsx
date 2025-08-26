
import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { dakwahData } from '../data/dakwah.ts';

const Dakwah: React.FC = () => {
  useDocumentTitle('Kumpulan Dakwah');
  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Kumpulan Dakwah' }];

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Kumpulan Dakwah"
        subtitle="Karangan dakwah dari anak-anak Rohis Riyadushshalihin."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dakwahData.map((dakwah) => (
          <div key={dakwah.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:-translate-y-2">
            <img src={dakwah.image} alt={dakwah.title} className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-primary-100 dark:border-primary-900" />
            <div className="flex-grow">
              <h3 className="font-bold text-lg text-primary-800 dark:text-primary-200 leading-tight">{dakwah.title}</h3>
              {dakwah.author && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Penulis: {dakwah.author}</p>}
              <Link to={`/dakwah/${dakwah.slug}`} className="text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2 inline-block">
                Baca Selengkapnya disini
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Dakwah;