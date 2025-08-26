import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 dark:bg-primary-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Branding */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Rohis Riyadushshalihin</h3>
            <p className="text-sm text-primary-200">
              Membina generasi Rabbani yang berakhlak mulia dan berprestasi.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/tentang" className="hover:text-amber-400 transition-colors">Tentang Kami</Link></li>
            
              <li><Link to="/dakwah" className="hover:text-amber-400 transition-colors">Dakwah</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <address className="text-sm not-italic space-y-2 text-primary-200">
              <p>Jl. Barokah No. 06<br/>Gunungputri, Bogor, Jawa Barat</p>
              <p>Phone: +62-877-8710-1391</p>
            </address>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
            <p className="text-sm text-primary-200 mb-4">
              Dapatkan update terbaru dari kegiatan kami di media sosial.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rohisskiel/?igsh=ZnlxaWJ4d3hvY3hn#" aria-label="Instagram" className="text-primary-200 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-primary-700 dark:border-primary-900 pt-8 text-center text-sm text-primary-300">
          <p>
            &copy; {new Date().getFullYear()} Rohis Riyadushshalihin. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;