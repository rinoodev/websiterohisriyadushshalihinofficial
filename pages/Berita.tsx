
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { Card, CardContent } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import { Calendar, User, Tag } from 'lucide-react';
import { beritaData } from '../data/berita.ts';

const ITEMS_PER_PAGE = 6;

const Berita: React.FC = () => {
  useDocumentTitle('Berita');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    beritaData.forEach(berita => berita.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredBerita = useMemo(() => {
    return beritaData
      .filter(berita => 
        berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        berita.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(berita => 
        selectedTag ? berita.tags.includes(selectedTag) : true
      );
  }, [searchTerm, selectedTag]);

  const totalPages = Math.ceil(filteredBerita.length / ITEMS_PER_PAGE);
  const paginatedBerita = filteredBerita.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Berita' }];

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Berita & Informasi"
        subtitle="Ikuti perkembangan terbaru dari semua kegiatan dan prestasi Rohis Riyadushshalihin."
      />

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-8">
            {paginatedBerita.map((berita) => (
              <Card key={berita.id} className="flex flex-col">
                <Link to={`/berita/${berita.id}`}>
                  <img
                    src={berita.featuredImage}
                    alt={berita.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </Link>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {berita.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {berita.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex-grow">
                    <Link to={`/berita/${berita.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                      {berita.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {berita.excerpt}
                  </p>
                  <Button asChild variant="link" className="p-0 self-start">
                    <Link to={`/berita/${berita.id}`}>
                      Baca Selengkapnya
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                size="icon"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>

        </div>

        <aside className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Cari Berita</h3>
              <Input
                type="text"
                placeholder="Ketik untuk mencari..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2"><Tag className="w-4 h-4" /> Filter by Tag</h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant={selectedTag === null ? 'default' : 'outline'} onClick={() => setSelectedTag(null)}>Semua</Button>
                {allTags.map(tag => (
                  <Button size="sm" key={tag} variant={selectedTag === tag ? 'default' : 'outline'} onClick={() => setSelectedTag(tag)}>{tag}</Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </Container>
  );
};

export default Berita;