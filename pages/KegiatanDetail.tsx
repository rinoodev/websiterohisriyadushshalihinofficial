
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { kegiatanData } from '../data/kegiatan.ts';
import NotFound from './NotFound.tsx';
import { Calendar, Tag, MapPin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card.tsx';

const KegiatanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const kegiatan = kegiatanData.find((k) => k.id === Number(id));

  useDocumentTitle(kegiatan ? kegiatan.title : 'Kegiatan Tidak Ditemukan');

  if (!kegiatan) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/home' },
    { label: 'Kegiatan', href: '/kegiatan' },
    { label: kegiatan.title },
  ];

  return (
    <div>
      <div className="w-full h-64 md:h-96 overflow-hidden relative">
        <img
          src={kegiatan.bannerImage}
          alt={kegiatan.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center p-4">{kegiatan.title}</h1>
        </div>
      </div>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Deskripsi Kegiatan</h2>
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>{kegiatan.details}</p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Galeri</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {kegiatan.gallery.map((image, index) => (
                        <img 
                            key={index}
                            src={image}
                            alt={`Galeri ${kegiatan.title} ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
            <div>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Detail Informasi</h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-primary-500" />
                                <span>{kegiatan.date}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Tag className="w-5 h-5 text-primary-500" />
                                <span>Kategori: {kegiatan.category}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary-500" />
                                <span>Lokasi: {kegiatan.location}</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default KegiatanDetail;