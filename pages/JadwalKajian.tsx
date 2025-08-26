
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card.tsx';
import { jadwalData } from '../data/jadwal.ts';

const JadwalKajian: React.FC = () => {
  useDocumentTitle('Jadwal Kajian');
  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Jadwal Kajian' }];

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Jadwal Kajian Rutin"
        subtitle="Ikuti kajian-kajian rutin kami untuk menambah wawasan keislaman dan mempererat ukhuwah."
      />
      <Card>
        <CardHeader>
            <CardTitle>Jadwal Pekanan</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">Hari</th>
                            <th scope="col" className="px-6 py-3">Waktu</th>
                            <th scope="col" className="px-6 py-3">Materi</th>
                            <th scope="col" className="px-6 py-3">Pemateri</th>
                            <th scope="col" className="px-6 py-3">Lokasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jadwalData.map((jadwal, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {jadwal.day}
                                </th>
                                <td className="px-6 py-4">{jadwal.time}</td>
                                <td className="px-6 py-4">{jadwal.topic}</td>
                                <td className="px-6 py-4">{jadwal.speaker}</td>
                                <td className="px-6 py-4">{jadwal.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default JadwalKajian;