import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const quickLinks = ['About Us', 'Services', 'Contact'];

  return (
    <footer className="bg-black py-12  border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src="/images/logo-white.svg" className="w-24 pb-2" alt="Nexxt Group logo" />
            <p className="text-white/50 mb-6 max-w-md text-sm leading-relaxed">
              NextTradiixx Company Limited — Driving innovation across Global Services, Automobiles, Fashion, Real Estate, E-Commerce, and Hospitality.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/nexxt-group' },
                { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/nexxtgroup' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/nexxtgroup' },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center hover:border-gray-500 hover:text-white transition-colors text-gray-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://tradiixx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tradiixx.com ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <a href="mailto:ocfrankofficial2@gmail.com" className="hover:text-white transition-colors break-all">
                  ocfrankofficial2@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2347079800450" className="hover:text-white transition-colors">
                  +234 707 980 0450
                </a>
              </li>
              <li className="leading-snug">
                8 Funso Owoyemi Street, Abule Egba,<br />Lagos State, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-3 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} NexxtTradiixx Company Limited. All rights reserved.</p>
          <p className="text-white/50">Nexxt Group</p>
        </div>
      </div>
    </footer>
  );
}
