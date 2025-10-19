import { motion } from 'motion/react';
import { Building2, DollarSign, Zap, Home, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

export function SubsidiariesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const subsidiariesConfig = getPageConfig('subsidiaries');

  const subsidiaries = [
    {
      name: 'Nexxt Automobile',
      logo: Building2,
      industry: 'Automobile',
      description: 'Premium automotive solutions and vehicle distribution services with global dealership network.',
      established: '2008',
      headquarters: 'Detroit, USA',
      employees: '12,000+',
      regions: ['North America', 'Europe', 'Asia'],
    },
    {
      name: 'Nexxt Fashion',
      logo: DollarSign,
      industry: 'Fashion',
      description: 'High-end fashion retail and lifestyle brands with premium boutiques worldwide.',
      established: '2012',
      headquarters: 'Milan, Italy',
      employees: '8,500+',
      regions: ['Global'],
    },
    {
      name: 'Nexxt Manufacturing',
      logo: Zap,
      industry: 'Manufacturing',
      description: 'Advanced manufacturing and industrial production facilities serving global markets.',
      established: '2016',
      headquarters: 'Shanghai, China',
      employees: '15,000+',
      regions: ['Asia Pacific', 'Europe', 'Americas'],
    },
    {
      name: 'Nexxt Real Estate',
      logo: Home,
      industry: 'Real Estate',
      description: 'Commercial and residential property development and investment with global portfolio.',
      established: '2012',
      headquarters: 'Dubai, UAE',
      employees: '6,000+',
      regions: ['Middle East', 'Asia', 'Europe'],
    },
    {
      name: 'Apex Manufacturing',
      logo: Building2,
      industry: 'Manufacturing',
      description: 'Advanced manufacturing solutions and industrial equipment for global markets.',
      established: '1972',
      headquarters: 'Tokyo, Japan',
      employees: '20,000+',
      regions: ['Asia Pacific', 'North America'],
    },
    {
      name: 'Apex Healthcare',
      logo: Building2,
      industry: 'Healthcare',
      description: 'Healthcare services and medical facilities network serving millions of patients annually.',
      established: '2005',
      headquarters: 'Singapore',
      employees: '25,000+',
      regions: ['Asia Pacific', 'Middle East'],
    },
  ];

  const filters = ['all', 'Finance', 'Technology', 'Energy', 'Real Estate', 'Manufacturing', 'Healthcare'];

  const filteredSubsidiaries = selectedFilter === 'all' 
    ? subsidiaries 
    : subsidiaries.filter(sub => sub.industry === selectedFilter);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <SimpleSEO
        title={subsidiariesConfig.title}
        description={subsidiariesConfig.description}
        keywords={subsidiariesConfig.keywords}
        type="website"
        path="/subsidiaries"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Subsidiaries
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A diverse portfolio of industry-leading companies
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span>Filter by Industry:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(filter)}
                  className={selectedFilter === filter ? 'bg-black' : 'hover:bg-gray-50'}
                >
                  {filter === 'all' ? 'All' : filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSubsidiaries.map((subsidiary, index) => (
              <motion.div
                key={subsidiary.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-gray-100 hover:border-gray-300 transition-all h-full group cursor-pointer">
                  {/* Logo and Industry */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <subsidiary.logo className="text-white" size={32} />
                    </div>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                      {subsidiary.industry}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl mb-4 group-hover:text-gray-600 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                    {subsidiary.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {subsidiary.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Established</p>
                      <p className="font-medium">{subsidiary.established}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Headquarters</p>
                      <p className="font-medium">{subsidiary.headquarters}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Employees</p>
                      <p className="font-medium">{subsidiary.employees}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Regions</p>
                      <p className="font-medium">{subsidiary.regions.length}</p>
                    </div>
                  </div>

                  {/* Regions */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {subsidiary.regions.map((region) => (
                      <span
                        key={region}
                        className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Global Impact
            </h2>
            <p className="text-gray-400">
              Our subsidiaries collectively make a significant global impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '85,000+', label: 'Total Employees' },
              { number: '50+', label: 'Countries' },
              { number: '$750B+', label: 'Combined Assets' },
              { number: '150+', label: 'Office Locations' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in partnering with one of our subsidiaries? We're always looking for strategic collaborations that drive mutual growth and innovation.
            </p>
            <Button className="bg-black hover:bg-gray-800 px-8 py-6">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
