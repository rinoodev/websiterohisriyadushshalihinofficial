
import React, { FormEvent } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { Card, CardContent } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import { Label } from '../components/ui/Label.tsx';
import { Instagram, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

const Kontak: React.FC = () => {
  useDocumentTitle('Kontak');
  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Kontak' }];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda (simulasi) telah terkirim.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami senang mendengar dari Anda. Silakan gunakan form di bawah ini atau hubungi kami melalui media sosial."
      />
      <div className="grid md:grid-cols-2 gap-12">
        <Card>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Nama</Label>
                        <Input id="name" type="text" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                    </div>
                    <div>
                        <Label htmlFor="message">Pesan</Label>
                        <textarea id="message" rows={5} className="w-full mt-1 flex rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" required></textarea>
                    </div>
                    <Button type="submit" className="w-full">Kirim Pesan</Button>
                </form>
            </CardContent>
        </Card>
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Informasi Kontak</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-primary-500"/>
                    <span>Jl. Pendidikan No. 123, Kota Pelajar, Indonesia</span>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-primary-500"/>
                    <span>info.rohis@riyadushshalihin.sch.id</span>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-8">Media Sosial</h3>
             <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500"><Instagram size={28}/></a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500"><Facebook size={28}/></a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500"><Youtube size={28}/></a>
             </div>
        </div>
      </div>
    </Container>
  );
};

export default Kontak;