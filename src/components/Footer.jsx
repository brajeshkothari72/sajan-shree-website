import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/1e20a129-cf80-484b-ae4d-9b3cac318f61/6c9f5567e53bc605f696d75f043be231.png" 
                alt="Sajan Shree Garments butterfly logo" 
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="text-lg font-bold">Sajan Shree Garments</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Trusted manufacturers and wholesalers of quality uniforms and readymade garments for schools, corporates, and institutions.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Quick links</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Home
              </Link>
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                About us
              </Link>
              <Link to="/products" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Products
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
                Contact us
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Contact info</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">9893053534</span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">94250062368</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90 break-all">ssgbhavya@rediffmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Address</span>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p className="text-sm opacity-90 leading-relaxed">
                15/2 Junatukoganj, Hemilton Road, Rambagh, Indore 452007
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Sajan Shree Garments. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;