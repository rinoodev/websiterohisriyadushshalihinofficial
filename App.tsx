import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import ProtectedRoute from './router/ProtectedRoute.tsx';
import MainLayout from './layouts/MainLayout.tsx';

// Static imports instead of lazy loading
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import Tentang from './pages/Tentang.tsx';
import Kegiatan from './pages/Kegiatan.tsx';
import KegiatanDetail from './pages/KegiatanDetail.tsx';
import Berita from './pages/Berita.tsx';
import BeritaDetail from './pages/BeritaDetail.tsx';
import Galeri from './pages/Galeri.tsx';
import Program from './pages/Program.tsx';
import JadwalKajian from './pages/JadwalKajian.tsx';
import Kontak from './pages/Kontak.tsx';
import Donasi from './pages/Donasi.tsx';
import NotFound from './pages/NotFound.tsx';
import Dakwah from './pages/Dakwah.tsx';
import DepartemenDetail from './pages/DepartemenDetail.tsx';
import DakwahDetail from './pages/DakwahDetail.tsx';
import EkskulDetail from './pages/EkskulDetail.tsx';


function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="tentang" element={<Tentang />} />
                <Route path="kegiatan" element={<Kegiatan />} />
                <Route path="kegiatan/:id" element={<KegiatanDetail />} />
                <Route path="departemen/:slug" element={<DepartemenDetail />} />
                <Route path="ekskul/:slug" element={<EkskulDetail />} />
                <Route path="berita" element={<Berita />} />
                <Route path="berita/:id" element={<BeritaDetail />} />
                <Route path="galeri" element={<Galeri />} />
                <Route path="program" element={<Program />} />
                <Route path="jadwal-kajian" element={<JadwalKajian />} />
                <Route path="kontak" element={<Kontak />} />
                <Route path="donasi" element={<Donasi />} />
                <Route path="dakwah" element={<Dakwah />} />
                <Route path="dakwah/:slug" element={<DakwahDetail />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
