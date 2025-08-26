
import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { galeriData } from '../data/galeri.ts';
import type { GalleryImage } from '../types/index.ts';
import { X } from 'lucide-react';

const Galeri: React.FC = () => {
  useDocumentTitle('Galeri');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Galeri' }];

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Galeri Kegiatan"
        subtitle="Momen-momen berharga yang terekam dalam berbagai kegiatan kami."
      />
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {galeriData.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid cursor-pointer" onClick={() => openModal(image)}>
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="w-full rounded-lg shadow-md hover:opacity-80 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white dark:bg-gray-800 p-4 rounded-lg max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full p-1 z-10" aria-label="Close image view">
                <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-center mt-2 text-gray-800 dark:text-gray-200">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Galeri;