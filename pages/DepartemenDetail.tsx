
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { departemenData } from '../data/departemen.ts';
import NotFound from './NotFound.tsx';
import { CheckCircle } from 'lucide-react';

const DepartemenDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const departemen = departemenData.find((d) => d.slug === slug);

  useDocumentTitle(departemen ? `Departemen ${departemen.name}` : 'Departemen Tidak Ditemukan');

  if (!departemen) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/home' },
    { label: departemen.fullName },
  ];

  const linkClasses = "block w-full text-left p-3 rounded-md transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/50";
  const activeLinkClasses = "bg-primary-100 dark:bg-primary-900 border-l-4 border-primary-500 font-semibold text-primary-700 dark:text-primary-300";

  return (
    <Container className="py-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200">
          Program kerja {departemen.name}
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm sticky top-24">
            <nav className="space-y-1">
              {departemenData.map((d) => (
                <NavLink
                  key={d.id}
                  to={`/departemen/${d.slug}`}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {d.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-8">
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300">PENGERTIAN</h2>
            <p>{departemen.pengertian}</p>

            <h2 className="mt-8 text-2xl font-semibold text-primary-700 dark:text-primary-300">FUNGSI</h2>
            <ul className="space-y-2 list-none p-0">
              {departemen.fungsi.map((f, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-2xl font-semibold text-primary-700 dark:text-primary-300">PROGRAM KERJA</h2>
            <ol className="list-decimal pl-5 space-y-1">
              {departemen.programKerja.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ol>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default DepartemenDetail;
