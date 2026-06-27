import { motion } from 'motion/react';
import { Globe, Car, Shirt, Home, ShoppingCart, UtensilsCrossed, ArrowRight, Lightbulb, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const DIVISIONS = [
  {
    icon: Globe,
    title: 'Global Services',
    description: 'End-to-end business consulting and international trade solutions.',
    link: null,
  },
  {
    icon: Car,
    title: 'Automobile Dealership',
    description: 'Premium vehicle sales, importation, and fleet management across Nigeria.',
    link: null,
  },
  {
    icon: Shirt,
    title: 'Fashion & Lifestyle',
    description: 'Contemporary clothing, accessories, and custom branding solutions.',
    link: null,
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Property development, sales, and investment across key markets.',
    link: null,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online marketplace and digital commerce solutions powering cross-border trade.',
    link: 'https://tradiixx.com',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    description: 'Hotels, restaurants, events, and tourism services delivered with excellence.',
    link: null,
  },
];

const PILLARS = [
  { icon: Lightbulb, title: 'Innovation', body: 'Technology-driven solutions that keep businesses ahead in a fast-moving global economy.' },
  { icon: Shield, title: 'Integrity', body: 'Every partnership is built on transparency, trust, and long-term commitment.' },
  { icon: Zap, title: 'Impact', body: 'Empowering African businesses and entrepreneurs to compete and thrive globally.' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function HomePage({ onNavigate }: HomePageProps) {
  const homeConfig = getPageConfig('home');

  return (
    <>
      <SimpleSEO
        title={homeConfig.title}
        description={homeConfig.description}
        keywords={homeConfig.keywords}
        type="website"
        path="/"
      />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero.jpeg"
              alt="Nexttradiixx Company Limited headquarters"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 text-center text-white px-6 max-w-5xl">
            
            <motion.h1
              className="text-4xl md:text-7xl  mb-6 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Building Africa's Future,<br />One Venture at a Time
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl mb-10 text-white/50 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Global services, automobiles, fashion, real estate, e-commerce &amp; hospitality — all under one roof.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             
            </motion.div>
          </div>
        </section>

        {/* Why Nexxt Strip */}
        <section className="lg:py-32 py-12 bg-white" id="why-nexttradiixx">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16" style={{ fontFamily: 'var(--font-serif)' }}>
              Why Nexttradiixx?
            </h2>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {PILLARS.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-black font-medium text-lg mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Divisions */}
        <section className="lg:py-40 py-12 bg-gray-100" id="divisions">
          <div className="max-w-7xl mx-auto px-6">

            <motion.div {...fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
              <h2
                className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Six divisions built for Africa's future
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A diversified portfolio spanning global services, automobiles, fashion, real estate, e-commerce, and hospitality — all under one roof.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="border-l  border-neutral-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {DIVISIONS.map((division) => (
                <div
                  key={division.title}
                  className="border-r  border-neutral-600 p-8 md:p-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <division.icon className="text-black shrink-0" size={18} />
                    <h3 className="text-black font-medium">{division.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{division.description}</p>
                  {division.link && (
                    <a
                      href={division.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-black text-sm hover:text-gray-600 transition-colors"
                    >
                      tradiixx.com <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
           
              <h2 className=" md:text-6xl text-black mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Ready to Grow With Us?
              </h2>
              <p className="text-black mb-8  md:text-2xl leading-relaxed">
                Partner with Nexttradiixx and access a network of expertise across six powerful business divisions.
              </p>
              <Button
              size="sm"
                variant="default"
                onClick={() => onNavigate('contact')}
                className="bg-gray-900 hover:bg-black text-white px-10 py-6 text-base"
              >
                Start a Conversation
              </Button>
            
          </div>
        </section>

      </div>
    </>
  );
}
