import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';

const Tentang: React.FC = () => {
  useDocumentTitle('Struktur Organisasi');

  const orgChartImageUrl = "https://i.ibb.co/zV77s2A/struktur-organisasi-rohis.png";

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <header className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <img src="img/ROHIS.png" alt="Logo Rohis" className="h-16" />
          <div>
            <p className="font-semibold text-primary-800 dark:text-primary-200">Rohis Riyadushshalihin</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">SMKN 1 GUNUNGPUTRI</p>
          </div>
        </header>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-900 dark:text-white uppercase tracking-wider">
          Struktur Organisasi Rohis
        </h1>
        <p className="text-xl font-semibold text-primary-700 dark:text-primary-300 mt-1">
          Periode 1446 - 1447 H
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl">
          <img 
            src="img/struktur.jpeg" 
            alt="Bagan Struktur Organisasi Rohis Riyadushshalihin Periode 1446 - 1447 H" 
            className="w-full h-auto rounded-md"
          />

          {/* Bagian 5 cards tambahan */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
              <img 
                src="img/1 (1).jpeg" // Ganti dengan path gambar Anda
                alt="Card 1" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
              <img 
                src="img/1 (2).jpeg" // Ganti dengan path gambar Anda
                alt="Card 2" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
              <img 
                src="img/1 (3).jpeg" // Ganti dengan path gambar Anda
                alt="Card 3" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
              <img 
                src="img/1 (4).jpeg" // Ganti dengan path gambar Anda
                alt="Card 4" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full pb-[100%] rounded-lg overflow-hidden shadow-md">
              <img 
                src="img/1 (5).jpeg" // Ganti dengan path gambar Anda
                alt="Card 5" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;