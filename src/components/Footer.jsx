import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const linkClass =
  'inline-block text-sm opacity-90 transition-all duration-200 hover:opacity-100 hover:translate-x-1';

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-4 group">
              <img
                src="/logo.png"
                alt="Sajan Shree Garments butterfly logo"
                className="h-10 w-10 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="text-lg font-bold">Sajan Shree Garments</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Trusted manufacturers and wholesalers of quality uniforms and readymade garments for schools, corporates, and institutions.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Quick links</span>
            <nav className="flex flex-col gap-2 items-start">
              <Link to="/" className={linkClass}>
                Home
              </Link>
              <Link to="/about" className={linkClass}>
                About us
              </Link>
              <Link to="/products" className={linkClass}>
                Products
              </Link>
              <Link to="/contact" className={linkClass}>
                Contact us
              </Link>
            </nav>
          </motion.div>

          <motion.div variants={item}>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Products</span>
            <nav className="flex flex-col gap-2 items-start">
              <Link to="/school-uniforms-indore" className={linkClass}>
                School uniforms
              </Link>
              <Link to="/school-blazers-indore" className={linkClass}>
                School blazers
              </Link>
              <Link to="/corporate-uniforms-indore" className={linkClass}>
                Corporate uniforms
              </Link>
              <Link to="/security-uniforms-indore" className={linkClass}>
                Security uniforms
              </Link>
              <Link to="/aprons-manufacturer-indore" className={linkClass}>
                Aprons
              </Link>
            </nav>
          </motion.div>

          <motion.div variants={item}>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Contact info</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 group">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="text-sm opacity-90">9893053534</span>
              </div>
              <div className="flex items-start gap-2 group">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="text-sm opacity-90">9425062368</span>
              </div>
              <div className="flex items-start gap-2 group">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="text-sm opacity-90 break-all">ssgbhavya@rediffmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Address</span>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p className="text-sm opacity-90 leading-relaxed">
                15/2 Junatukoganj, Hemilton Road, Rambagh, Indore 452007
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Sajan Shree Garments. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
