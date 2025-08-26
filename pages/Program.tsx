
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import Container from '../components/shared/Container.tsx';
import PageHeader from '../components/shared/PageHeader.tsx';
import Breadcrumb from '../components/shared/Breadcrumb.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card.tsx';
import { programData } from '../data/program.ts';

const Program: React.FC = () => {
  useDocumentTitle('Program Unggulan');
  const breadcrumbItems = [{ label: 'Home', href: '/home' }, { label: 'Program Unggulan' }];

  return (
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Program Unggulan Kami"
        subtitle="Inilah pilar-pilar utama kegiatan kami dalam membina dan mengembangkan potensi anggota."
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {programData.map((program) => (
          <Card key={program.id}>
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-lg">
                <program.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <CardTitle>{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                {program.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Program;