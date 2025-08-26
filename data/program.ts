
import { BookOpen, Users, Heart, Film } from 'lucide-react';
import { Program } from '../types/index.ts';

export const programData: Program[] = [
  {
    id: 1,
    title: 'Mentoring Islam Intensif',
    description:
      'Program pembinaan rutin mingguan dalam kelompok kecil untuk memperdalam pemahaman Islam dan membentuk karakter Islami yang kokoh.',
    icon: Users,
  },
  {
    id: 2,
    title: 'Kajian Tematik Bulanan',
    description:
      'Menghadirkan ustadz-ustadz kompeten untuk membahas isu-isu aktual dari sudut pandang Islam, terbuka untuk umum.',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Rohis Peduli',
    description:
      'Program sosial yang berfokus pada penggalangan dana, bakti sosial, dan bantuan kemanusiaan untuk masyarakat yang membutuhkan.',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Dakwah Kreatif',
    description:
      'Mengembangkan konten-konten dakwah yang menarik dan mudah diterima oleh generasi muda melalui media digital seperti poster, video pendek, dan podcast.',
    icon: Film,
  },
];