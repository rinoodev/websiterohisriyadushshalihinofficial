
import { Ekskul } from '../types/index.ts';
import { BookOpen, Megaphone, Music } from 'lucide-react';

export const ekskulData: Ekskul[] = [
  {
    id: 1,
    slug: 'tahfidz-quran',
    title: 'Tahfidz Qur\'an',
    image: 'img/tahfidz.jpeg',
    icon: BookOpen,
    shortDescription: 'Menghafal dan memahami Al-Qur\'an dengan baik dan benar.',
    details: {
      ekskul: 'Rohis Riyadushshalihin',
      ketua: 'Ahmad Awan Dhely',
      waktu: 'Setelah pulang sekolah // Setiap hari selasa',
      penanggungJawab: 'Salman Maulidi',
    },
    description: [
      'Ekstrakurikuler Tahfidz Qur\'an di Rohis Riyadushshalihin bertujuan untuk membina para siswa agar dapat menghafal Al-Qur\'an dengan baik dan benar.',
      'Kegiatan ini dilaksanakan secara rutin dengan bimbingan yang terstruktur, memadukan metode hafalan dan pemahaman makna ayat-ayat suci. Selain mengejar target hafalan, kegiatan ini juga mengajarkan siswa untuk menjaga hafalan mereka dengan metode muraja\'ah, sekaligus memupuk kecintaan mereka terhadap Al-Qur\'an sebagai pedoman hidup.',
    ],
  },
  {
    id: 2,
    slug: 'muhadhoroh',
    title: 'Muhadhoroh',
    image: 'img/Muhadoroh.jpeg',
    icon: Megaphone,
    shortDescription: 'Minat bakat untuk mengasah keterampilan ceramah atau menjadi MC, tilawah, dan lain-lain.',
    details: {
      ekskul: 'Rohis Riyadushshalihin',
      ketua: 'Ahmad Awan Dhely',
      waktu: 'Setelah pulang sekolah // Setiap hari kamis',
      penanggungJawab: 'Salman Maulidi',
    },
    description: [
        'Muhadhoroh adalah wadah bagi siswa untuk mengasah keterampilan berbicara di depan umum dalam konteks Islami. Kegiatan ini mencakup latihan ceramah (kultum), menjadi MC (Master of Ceremony) dalam acara keagamaan, serta melantunkan tilawah Al-Qur\'an dengan indah.',
        'Melalui bimbingan rutin, anggota diajarkan teknik-teknik retorika, penyusunan materi dakwah yang efektif, serta adab-adab dalam menyampaikan pesan kebaikan. Program ini bertujuan untuk melahirkan dai-dai muda yang percaya diri dan mampu berdakwah di berbagai kesempatan.'
    ],
  },
  {
    id: 3,
    slug: 'hadroh-marawis',
    title: 'Hadroh dan Marawis',
    image: 'img/hadrohmarawis.jpeg',
    icon: Music,
    shortDescription: 'Kegiatan seni musik islami yang mendidik.',
    details: {
      ekskul: 'Rohis Riyadushshalihin',
      ketua: 'Ahmad Awan Dhely',
      waktu: 'Setelah pulang sekolah // Setiap hari jum\'at',
      penanggungJawab: 'Endah Retnoningtias dan Salman Maulidi',
    },
    description: [
        'Hadroh dan Marawis adalah kegiatan ekstrakurikuler yang fokus pada seni musik Islami sebagai media syiar dan kecintaan kepada Rasulullah SAW. Siswa akan belajar memainkan alat musik rebana dan marawis sambil melantunkan shalawat dan puji-pujian kepada Nabi Muhammad SAW.',
        'Kegiatan ini tidak hanya mengasah bakat seni, tetapi juga menanamkan nilai-nilai kebersamaan, disiplin, dan cinta kepada tradisi Islam. Tim Hadroh dan Marawis Rohis Riyadushshalihin sering tampil dalam berbagai acara sekolah maupun di luar sekolah.'
    ],
  },
];
