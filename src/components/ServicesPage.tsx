import { motion } from 'motion/react';
import { Building2, TrendingUp, Globe, Shield, Users, Briefcase, LineChart, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

export function ServicesPage() {
  const servicesConfig = getPageConfig('services');
  const services = [
    {
      icon: Building2,
      title: 'Automobile Dealership',
      description: 'Premium vehicle sales and automotive service solutions with comprehensive dealership support.',
      features: [
        'Vehicle Sales & Distribution',
        'Service & Maintenance',
        'Parts & Accessories',
        'Customer Support',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Real Estate',
      description: 'Property development and real estate investment services with comprehensive market expertise.',
      features: [
        'Property Development',
        'Investment Advisory',
        'Asset Management',
        'Market Analysis',
      ],
    },
    {
      icon: Globe,
      title: 'Customer Goods',
      description: 'High-quality consumer products and retail solutions across diverse market segments.',
      features: [
        'Product Development',
        'Retail Distribution',
        'Brand Management',
        'Quality Assurance',
      ],
    },
    {
      icon: Shield,
      title: 'Import/Export',
      description: 'Global trade facilitation and international commerce solutions with comprehensive logistics support.',
      features: [
        'Trade Documentation',
        'Customs Clearance',
        'Logistics Management',
        'Regulatory Compliance',
      ],
    },
    {
      icon: Users,
      title: 'Human Capital',
      description: 'Talent management and organizational development services to build high-performing teams.',
      features: [
        'Leadership Development',
        'Talent Acquisition',
        'Performance Management',
        'Culture Transformation',
      ],
    },
    {
      icon: Briefcase,
      title: 'M&A Advisory',
      description: 'End-to-end merger and acquisition support from due diligence to post-merger integration.',
      features: [
        'Target Identification',
        'Due Diligence',
        'Deal Structuring',
        'Integration Planning',
      ],
    },
    {
      icon: LineChart,
      title: 'Financial Advisory',
      description: 'Expert financial guidance for complex transactions and strategic financial planning.',
      features: [
        'Capital Structure Optimization',
        'Financial Modeling',
        'Valuation Services',
        'Restructuring Advisory',
      ],
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Technology-enabled business transformation to stay competitive in the digital age.',
      features: [
        'Digital Strategy',
        'Technology Implementation',
        'Change Management',
        'Innovation Labs',
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <SimpleSEO
        title={servicesConfig.title}
        description={servicesConfig.description}
        keywords={servicesConfig.keywords}
        type="website"
        path="/services"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc1OTQ4MTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="African business team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive solutions for complex business challenges
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Leveraging our global expertise and industry knowledge, we deliver tailored solutions that drive sustainable growth and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="p-8 border-2 border-gray-100 hover:border-gray-300 transition-all h-full group">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    <service.icon className="text-white" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-4 group-hover:text-gray-600 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="pt-6 border-t border-gray-200">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Approach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology built on collaboration, insight, and measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your business challenges and objectives',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop customized solutions aligned with your goals',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute with precision and expert project management',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement and ongoing support',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4 text-gray-600" style={{ fontFamily: 'var(--font-serif)' }}>
                  {phase.step}
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  {phase.title}
                </h3>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Financial Services',
              'Technology',
              'Energy & Utilities',
              'Real Estate',
              'Healthcare',
              'Manufacturing',
              'Retail & Consumer',
              'Telecommunications',
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer">
                  <p className="font-medium">{industry}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Let's Build Something Exceptional
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to transform your business and unlock new opportunities for growth.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                Download Brochure
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
