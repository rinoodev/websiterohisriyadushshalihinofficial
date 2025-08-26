
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { Card, CardContent } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Calendar, Tag } from 'lucide-react';
import { kegiatanData } from '../data/kegiatan.ts';
import type { Kegiatan as KegiatanType } from '../types/index.ts';

const categories: KegiatanType['category'][] = ['Kajian', 'Sosial', 'Olahraga', 'Lomba'];

const Kegiatan: React.FC = () => {
  useDocumentTitle('Kegiatan');
  const [filter, setFilter] = useState<KegiatanType['category'] | 'Semua'>('Semua');

  const filteredKegiatan =
    filter === 'Semua'
      ? kegiatanData
      : kegiatanData.filter((k) => k.category === filter);

  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Kegiatan' }];

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Kegiatan Rohis"
        subtitle="Jelajahi berbagai kegiatan yang kami adakan untuk meningkatkan keimanan, ilmu, dan ukhuwah."
      />

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        <Button
          variant={filter === 'Semua' ? 'default' : 'outline'}
          onClick={() => setFilter('Semua')}
        >
          Semua
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredKegiatan.map((kegiatan) => (
          <Card key={kegiatan.id} className="flex flex-col">
            <Link to={`/kegiatan/${kegiatan.id}`}>
              <img
                src={`${kegiatan.bannerImage.replace('/1200/400', '/800/400')}`}
                alt={kegiatan.title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
            </Link>
            <CardContent className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="flex items-center gap-1.5 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs font-medium">
                  <Tag className="w-3 h-3" />
                  {kegiatan.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {kegiatan.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 flex-grow">
                <Link to={`/kegiatan/${kegiatan.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                  {kegiatan.title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {kegiatan.description}
              </p>
              <Button asChild variant="link" className="p-0 self-start">
                <Link to={`/kegiatan/${kegiatan.id}`}>
                  Lihat Detail
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Kegiatan;