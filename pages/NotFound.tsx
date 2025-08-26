
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button.tsx';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';

const NotFound: React.FC = () => {
  useDocumentTitle('404 Not Found');

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-9xl font-bold text-primary-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Button asChild className="mt-8">
        <Link to="/home">Kembali ke Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;