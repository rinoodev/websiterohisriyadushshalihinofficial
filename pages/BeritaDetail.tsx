
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { beritaData } from '../data/berita.ts';
import NotFound from './NotFound.tsx';
import { Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card.tsx';

const BeritaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const berita = beritaData.find((b) => b.id === Number(id));

  useDocumentTitle(berita ? berita.title : 'Berita Tidak Ditemukan');

  if (!berita) {
    return <NotFound />;
  }

  const relatedBerita = beritaData.filter(b => berita.relatedNewsIds.includes(b.id));

  const breadcrumbItems = [
    { label: 'Home', href: '/home' },
    { label: 'Berita', href: '/berita' },
    { label: berita.title },
  ];

  return (
    <div>
      <img
        src={berita.featuredImage}
        alt={berita.title}
        className="w-full h-64 md:h-96 object-cover"
      />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{berita.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {berita.date}</span>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {berita.author}</span>
            </div>
            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                 dangerouslySetInnerHTML={{ __html: berita.content }}>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-gray-500" />
                {berita.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
          </article>
          <aside>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-4">Berita Terkait</h3>
                <div className="space-y-4">
                  {relatedBerita.map(related => (
                    <Link key={related.id} to={`/berita/${related.id}`} className="flex items-center gap-3 group">
                      <img src={related.featuredImage} alt={related.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 line-clamp-2">{related.title}</p>
                        <p className="text-xs text-gray-500">{related.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default BeritaDetail;