import { motion } from 'motion/react';
import { Globe, Car, Shirt, Home, ShoppingCart, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

const DIVISIONS = [
  {
    icon: Globe,
    title: 'Global Services',
    description: 'End-to-end business consulting and international trade solutions that bridge markets and accelerate growth.',
    features: ['Business consulting', 'Procurement & supply chain', 'Import & export', 'Corporate solutions', 'Logistics support'],
    link: null,
  },
  {
    icon: Car,
    title: 'Automobile Dealership',
    description: 'Premium vehicle sales, importation, and comprehensive fleet management across Nigeria and beyond.',
    features: ['Vehicle sales', 'Vehicle importation', 'Fleet management', 'Auto financing', 'After-sales support'],
    link: null,
  },
  {
    icon: Shirt,
    title: 'Fashion & Lifestyle',
    description: 'Contemporary clothing, accessories, and bespoke branding solutions for individuals and businesses.',
    features: ['Clothing and apparel', 'Fashion accessories', 'Branding and merchandising', 'Custom designs'],
    link: null,
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Property development, sales, and investment opportunities built on quality construction and smart infrastructure.',
    features: ['Property development', 'Property sales', 'Property management', 'Construction & infrastructure', 'Real estate investment'],
    link: null,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'A robust online marketplace powering retail, wholesale, and cross-border digital commerce — Tradiixx.com.',
    features: ['Online marketplace', 'Retail and wholesale', 'Digital commerce solutions', 'Cross-border trade'],
    link: 'https://tradiixx.com',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    description: 'Hotels, restaurants, events, and tourism services that deliver memorable experiences with lasting impact.',
    features: ['Hotels and accommodation', 'Restaurants', 'Event management', 'Tourism and leisure services'],
    link: null,
  },
];

const APPROACH = [
  { step: '01', title: 'Discovery', description: 'Deep dive into your business challenges and objectives.' },
  { step: '02', title: 'Strategy', description: 'Develop customised solutions aligned with your goals.' },
  { step: '03', title: 'Execution', description: 'Implement with precision and expert project management.' },
  { step: '04', title: 'Growth', description: 'Continuous improvement and ongoing partnership support.' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function ServicesPage() {
  const servicesConfig = getPageConfig('services');

  return (
    <>
      <SimpleSEO
        title={servicesConfig.title}
        description={servicesConfig.description}
        keywords={servicesConfig.keywords}
        type="website"
        path="/services"
      />
      <div className="min-h-screen">

        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero.jpeg"
              alt="Nexxt Group"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.p
              className="text-gray-400 text-sm tracking-widest uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What We Offer
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Six specialised divisions delivering comprehensive solutions across key sectors
            </motion.p>
          </div>
        </section>

        {/* Divisions Grid */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <p className="text-black text-sm tracking-widest uppercase mb-3">Our Divisions</p>
              <h2 className="text-4xl md:text-5xl text-black mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Business Divisions
              </h2>
              <div className="w-20 h-0.5 bg-neutral-600 mx-auto mb-5" />
              <p className="text-black max-w-2xl mx-auto">
                Leveraging expertise across six divisions to deliver tailored solutions that drive sustainable growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DIVISIONS.map((division, index) => (
                <motion.div
                  key={division.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <Card className="p-8 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all h-full group flex flex-col">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-neutral-700 transition-colors">
                        <division.icon className="text-white" size={26} />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                          {division.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{division.description}</p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-neutral-800 mt-auto">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {division.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-gray-400 text-sm">
                            <div className="w-1 h-1 bg-gray-500 rounded-full shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {division.link && (
                        <a
                          href={division.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-white text-sm font-medium hover:text-gray-300 transition-colors"
                        >
                          Visit Tradiixx.com <ArrowRight size={14} />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">How We Work</p>
              <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Approach
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A proven methodology built on collaboration, insight, and measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {APPROACH.map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4 text-white/20" style={{ fontFamily: 'var(--font-serif)' }}>
                    {phase.step}
                  </div>
                  <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Let's Build Something Exceptional
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Partner with Nexxt Group to transform your business and unlock new growth opportunities.
              </p>
              <a
                href="mailto:ocfrankofficial2@gmail.com"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-md font-medium transition-colors"
              >
                Start a Conversation <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
