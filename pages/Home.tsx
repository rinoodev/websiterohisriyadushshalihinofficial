
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.ts';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import { Label } from '../components/ui/Label.tsx';
import { ArrowRight, PlayCircle, CheckCircle, ChevronRight, MapPin, Phone, Instagram, X } from 'lucide-react';
import { galeriData } from '../data/galeri.ts';
import { departemenData } from '../data/departemen.ts';
import { dakwahData } from '../data/dakwah.ts';
import { ekskulData } from '../data/ekskul.ts';

const Home: React.FC = () => {
  useDocumentTitle('Home');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  const departmentsForFilter = ['All', 'Dakwah', 'BRT', 'Humas', 'Ekonomi', 'TI'];
  const filteredGallery = (
    activeDepartment === 'All'
      ? galeriData
      : galeriData.filter(img => img.department === activeDepartment)
  ).slice(0, 5);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        closeVideoModal();
       }
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isVideoModalOpen]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Rohis Riyadushshalihin
              </h1>
              <p className="mt-4 text-lg md:text-xl text-primary-200 max-w-2xl mx-auto lg:mx-0">
                Ilmu, Amal, Dakwah.. Allahuakbar!!
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-amber-400 hover:bg-amber-500 text-primary-900 font-semibold flex items-center gap-2 px-6 py-3 shadow-lg transform hover:scale-105 transition-transform duration-300"
                  onClick={openVideoModal}
                >
                  <PlayCircle className="w-6 h-6" />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center animate-fade-in-right">
              <img
                src="img/ROHIS.png"
                alt="Logo Rohis Riyadushshalihin"
                className="max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200 uppercase tracking-wider">About Us</h2>
                <div className="mt-2 w-20 h-1 bg-amber-400 mx-auto rounded"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                {/* Left Column */}
                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Rohis Riyadushshalihin adalah organisasi yang berkomitmen untuk membentuk generasi muda Islami yang berakhlakul karimah, serta mengajak seluruh anggota untuk lebih mendekatkan diri kepada Allah SWT melalui kegiatan-kegiatan rohani yang positif.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 dark:text-gray-200">Mengajarkan nilai-nilai Islami yang menuntun pada akhlak mulia.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 dark:text-gray-200">Menyediakan ruang untuk pengembangan spiritual dan intelektual generasi muda.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 dark:text-gray-200">Membina ukhuwah Islamiyah antar sesama anggota dan masyarakat.</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Rohis Riyadushshalihin berusaha menjadi wadah bagi setiap individu yang ingin memperdalam ilmu agama islam dan memperkuat iman. Kami juga aktif dalam berbagai kegiatan sosial yang bertujuan untuk memberikan manfaat bagi umat.
                    </p>
                    <Button variant="outline" asChild>
                        <Link to="/dakwah">
                            Lihat Kumpulan Dakwah <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
      
      {/* Departemen Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 leading-tight">
              Departemen Rohis Riyadushshalihin mendukung <span className="text-primary-600 dark:text-primary-400">pengembangan spiritual dan pendidikan</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Di Rohis Riyadushshalihin, kami memiliki lima departemen yang berfokus pada pengembangan siswa dalam berbagai aspek keislaman dan kepemimpinan.
            </p>
            <div className="space-y-4 pt-4">
              {departemenData.map((dept, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <button
                      onClick={() => handleAccordionClick(index)}
                      className="w-full p-4 flex justify-between items-center cursor-pointer text-left"
                      aria-expanded={isOpen}
                      aria-controls={`accordion-content-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-amber-500 dark:text-amber-400">0{index + 1}</span>
                        <span className="font-semibold text-gray-700 dark:text-gray-200">{dept.name}</span>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                    </button>
                    <div
                      id={`accordion-content-${index}`}
                      style={{ maxHeight: isOpen ? '150px' : '0' }}
                      className="transition-all duration-500 ease-in-out overflow-hidden"
                      aria-hidden={!isOpen}
                    >
                      <div className="p-4 pt-0 space-y-4 text-gray-600 dark:text-gray-300">
                        <p>{dept.description}</p>
                         <Button variant="outline" size="sm" asChild>
                            <Link to={`/departemen/${dept.slug}`}>
                                Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Column */}
          <div className="flex justify-center items-center">
              <img
                src="img/ROHIS.png"
                alt="Logo Rohis Riyadushshalihin"
                className="max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-lg"
              />
          </div>
        </div>
      </section>

      {/* Kegiatan Ekskul Section */}
      <section className="bg-white dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200 uppercase tracking-wider">
              Kegiatan Ekskul Rohis
            </h2>
            <div className="mt-2 w-20 h-1 bg-amber-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Ekskul Rohis Riyadushshalihin setiap hari kamis, dan jum'at
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ekskulData.map((item) => (
              <Link to={`/ekskul/${item.slug}`} key={item.id} className="block group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center h-full transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-800 dark:text-primary-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumentasi Kegiatan Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200 uppercase tracking-wider">
              Dokumentasi Kegiatan Setiap Departemen
            </h2>
            <div className="mt-2 w-20 h-1 bg-amber-400 mx-auto rounded"></div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8">
            {departmentsForFilter.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                    activeDepartment === dept
                        ? 'bg-primary-600 text-white rounded-full px-4 py-1.5 shadow'
                        : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 px-4 py-1.5'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredGallery.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]">
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-800/80 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm">Departemen {image.department}</h3>
                  <p className="text-gray-200 text-xs line-clamp-2">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200 uppercase tracking-wider">
              Contact Us
            </h2>
            <div className="mt-2 w-20 h-1 bg-amber-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Silakan hubungi kami jika ada yang ingin anda tanyakan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Contact Info & Map */}
            <div className="border border-primary-200 dark:border-primary-700/50 rounded-lg p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-200">Address</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Jl. Barokah No. 06 Desa Wanaherang Kec. Gunungputri Kab. Bogor, Wanaherang, Kec. Gunungputri, Kab. Bogor Prov, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-200">Call Us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+62-895-1914-2908</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+62-821-2264-5450</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-800 dark:text-primary-200">Follow Us on Instagram</h3>
                  <a href="https://www.instagram.com/rohisskiel/?igsh=ZnlxaWJ4d3hvY3hn#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">@rohisskiel</a>
                </div>
              </div>
              <div className="pt-6 border-t border-primary-200 dark:border-primary-700/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.931728448842!2d106.9157838153435!3d-6.40277809536709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69956a237568c9%3A0x929c16086f62f3f!2sSMK%20Negeri%201%20Gunungputri!5e0!3m2!1sen!2sid!4fv=1689320293849!5m2!1sen!2sid"
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */} <div className="border border-primary-200 dark:border-primary-700/50 rounded-lg p-6"> <form className="space-y-4"> <div className="grid sm:grid-cols-2 gap-4"> <div> <Label htmlFor="home-name">Your Name</Label> <Input id="home-name" type="text" placeholder="user" className="mt-1"/> </div> <div> <Label htmlFor="home-email">Your Email</Label> <Input id="home-email" type="email" placeholder="user@gmail.com" className="mt-1"/> </div> </div> <div> <Label htmlFor="home-subject">Subject</Label> <Input id="home-subject" type="text" placeholder="Regarding..." className="mt-1"/> </div> <div> <Label htmlFor="home-message">Message</Label> <textarea id="home-message" rows={5} placeholder="Write your message here..." className="w-full mt-1 flex rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" ></textarea> </div> <Button type="submit" className="w-full !bg-amber-400 hover:!bg-amber-500 !text-primary-900 font-semibold"> Send Message </Button> </form> </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeVideoModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div 
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute -top-3 -right-3 bg-white text-gray-800 dark:bg-gray-900 dark:text-white rounded-full p-1.5 z-10 shadow-lg"
              aria-label="Close video player"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <video
                ref={videoRef}
                src="img/Video.mp4" // Placeholder video
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
