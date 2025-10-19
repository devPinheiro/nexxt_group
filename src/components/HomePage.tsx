import { motion } from 'motion/react';
import { Building2, TrendingUp, Globe, Shield, ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const homeConfig = getPageConfig('home');
  const subsidiaries = [
    {
      name: 'Nexxt Automobile',
      description: 'Premium automotive solutions and vehicle distribution services',
      industry: 'Automobile',
    },
    {
      name: 'Nexxt Fashion',
      description: 'High-end fashion retail and lifestyle brands worldwide',
      industry: 'Fashion',
    },
    {
      name: 'Nexxt Real Estate',
      description: 'Commercial and residential property development and investment',
      industry: 'Real Estate',
    },
    {
      name: 'Nexxt Manufacturing',
      description: 'Advanced manufacturing and industrial production facilities',
      industry: 'Manufacturing',
    },
  ];

  const services = [
    {
      icon: Building2,
      title: 'Automobile Dealership',
      description: 'Premium vehicle sales and automotive service solutions',
    },
    {
      icon: TrendingUp,
      title: 'Real Estate',
      description: 'Property development and real estate investment services',
    },
    {
      icon: Globe,
      title: 'Customer Goods',
      description: 'High-quality consumer products and retail solutions',
    },
    {
      icon: Shield,
      title: 'Import/Export',
      description: 'Global trade facilitation and international commerce',
    },
  ];

  const regions = [
    { name: 'North America', offices: 45 },
    { name: 'Europe', offices: 38 },
    { name: 'Asia Pacific', offices: 52 },
    { name: 'Middle East', offices: 18 },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

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
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTk0NTc5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Global Business Accelerator. Trusted Excellence.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Two decades of proven leadership across diverse industries worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => onNavigate('about')}
              className="bg-white text-black hover:bg-gray-100 px-20 py-10 group mt-12" 
              size="lg"
            >
              Explore Nexxt Group
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Subsidiaries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading the way across diverse industries with specialized expertise and global reach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={subsidiary.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-gray-100 hover:border-gray-300 transition-all group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl group-hover:text-gray-600 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                      {subsidiary.name}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {subsidiary.industry}
                    </span>
                  </div>
                  <p className="text-gray-600">{subsidiary.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('subsidiaries')}
              variant="outline"
              className="border-2 hover:bg-gray-50"
            >
              View All Subsidiaries
            </Button>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Global Services
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to drive success in an evolving global landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <service.icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Global Presence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Operating in over 150 offices across four continents
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <MapPin className="mx-auto mb-4 text-gray-400" size={32} />
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {region.offices}
                </h3>
                <p className="text-gray-400">{region.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669854310488-542a99280b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGFic3RyYWN0fGVufDF8fHx8MTc1OTQ4MTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global map"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                A Legacy of Excellence
              </h2>
              <div className="space-y-8">
                {[
                  { year: '1947', event: 'Founded in New York City' },
                  { year: '1975', event: 'Expanded to European markets' },
                  { year: '1998', event: 'Entered Asia-Pacific region' },
                  { year: '2025', event: 'Operating in 50+ countries' },
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="text-3xl min-w-[100px]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {milestone.year}
                    </div>
                    <div className="pt-2">
                      <div className="w-12 h-0.5 bg-black mb-2"></div>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0MzQwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Connect with us to explore partnership opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Full Name"
                    className="border-gray-300 focus:border-black"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-gray-300 focus:border-black"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    rows={6}
                    className="border-gray-300 focus:border-black resize-none"
                  />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
