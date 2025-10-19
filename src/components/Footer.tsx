import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              NEXXT GROUP
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Global Business Accelerator. Trusted Excellence across Automobile, Fashion, Real Estate, and Manufacturing.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Subsidiaries', 'Services', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@nexxtgroup.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 Nexxt Group Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
