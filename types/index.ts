
import React from 'react';

export interface Kegiatan {
  id: number;
  title: string;
  date: string;
  category: 'Kajian' | 'Sosial' | 'Olahraga' | 'Lomba';
  description: string;
  details: string;
  bannerImage: string;
  gallery: string[];
  location: string;
}

export interface Berita {
  id: number;
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  excerpt: string;
  featuredImage: string;
  relatedNewsIds: number[];
}

export interface Program {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string;
  department: 'Dakwah' | 'BRT' | 'Humas' | 'Ekonomi' | 'TI';
}

export interface Jadwal {
  day: string;
  time: string;
  topic: string;
  speaker: string;
  location: string;
}

export interface Organisasi {
  history: string;
  vision: string;
  mission: string[];
  structure: {
    name: string;
    position: string;
    image: string;
  }[];
}

export interface Dakwah {
  id: number;
  title: string;
  author?: string;
  image: string;
  slug: string;
  content: string[];
}

export interface Departemen {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  description: string;
  pengertian: string;
  fungsi: string[];
  programKerja: string[];
}

export interface Ekskul {
  id: number;
  slug: string;
  title: string;
  image: string;
  icon: React.ElementType;
  shortDescription: string;
  details: {
    ekskul: string;
    ketua: string;
    waktu: string;
    penanggungJawab: string;
  };
  description: string[];
}
