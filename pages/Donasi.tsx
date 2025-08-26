
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Copy } from 'lucide-react';

const Donasi: React.FC = () => {
  useDocumentTitle('Donasi');
  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Donasi' }];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nomor rekening berhasil disalin!');
  };

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Dukung Dakwah Kami"
        subtitle="Donasi Anda sangat berarti untuk keberlangsungan program dan kegiatan dakwah Rohis Riyadushshalihin."
      />
      <div className="max-w-3xl mx-auto">
        <Card className="text-center">
            <CardHeader>
                <CardTitle className="text-2xl">Salurkan Infaq Terbaik Anda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                    Setiap donasi yang Anda berikan akan kami salurkan untuk mendukung berbagai program kami, mulai dari kajian rutin, kegiatan sosial, hingga pengembangan media dakwah. Semoga menjadi amal jariyah yang pahalanya terus mengalir.
                </p>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                    <p className="text-sm font-semibold text-primary-800 dark:text-primary-200">Bank Syariah Indonesia (BSI)</p>
                    <p className="text-3xl font-bold my-2 text-gray-800 dark:text-gray-100">7123456789</p>
                    <p className="text-lg text-gray-700 dark:text-gray-200">a.n. Rohis Riyadushshalihin</p>
                    <Button 
                        variant="ghost" 
                        className="mt-4" 
                        onClick={() => copyToClipboard('7123456789')}
                    >
                        <Copy className="mr-2 h-4 w-4" /> Salin Nomor Rekening
                    </Button>
                </div>
                <div className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Konfirmasi Donasi</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Untuk pencatatan, mohon konfirmasi setelah melakukan transfer dengan mengirimkan bukti ke nomor WhatsApp: 
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold"> 0812-3456-7890</a> (Bendahara Rohis).
                    </p>
                </div>
                 <p className="text-sm text-gray-500 italic mt-4">
                    Jazakumullah Khairan Katsiran atas dukungan Anda.
                </p>
            </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Donasi;