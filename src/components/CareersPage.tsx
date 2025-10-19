import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

export function CareersPage() {
  const careersConfig = getPageConfig('careers');
  const jobs = [
    {
      title: 'Senior Investment Manager',
      subsidiary: 'Apex Financial',
      location: 'New York, USA',
      type: 'Full-time',
      level: 'Senior',
    },
    {
      title: 'Software Architect',
      subsidiary: 'Apex Technologies',
      location: 'San Francisco, USA',
      type: 'Full-time',
      level: 'Senior',
    },
    {
      title: 'Renewable Energy Engineer',
      subsidiary: 'Apex Energy',
      location: 'London, UK',
      type: 'Full-time',
      level: 'Mid-level',
    },
    {
      title: 'Property Development Manager',
      subsidiary: 'Apex Real Estate',
      location: 'Dubai, UAE',
      type: 'Full-time',
      level: 'Senior',
    },
    {
      title: 'Business Analyst',
      subsidiary: 'Apex Global',
      location: 'Singapore',
      type: 'Full-time',
      level: 'Entry-level',
    },
    {
      title: 'Marketing Director',
      subsidiary: 'Apex Global',
      location: 'Hong Kong',
      type: 'Full-time',
      level: 'Director',
    },
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance-based bonuses and equity opportunities.',
    },
    {
      title: 'Global Opportunities',
      description: 'Work across borders with international assignments and transfer programs.',
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning through training programs, mentorship, and educational support.',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, generous time off, and wellness programs.',
    },
    {
      title: 'Inclusive Culture',
      description: 'Diverse and inclusive workplace where every voice is valued and heard.',
    },
    {
      title: 'Innovation Focus',
      description: 'Opportunity to work on cutting-edge projects that shape the future of industries.',
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
        title={careersConfig.title}
        description={careersConfig.description}
        keywords={careersConfig.keywords}
        type="website"
        path="/careers"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTk0ODE4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="African woman business professional"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Career With Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join a global team of exceptional professionals shaping the future
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Apex Global, we believe our people are our greatest asset. We've built a culture that values excellence, innovation, and collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're committed to creating an environment where talented individuals can thrive, grow, and make a meaningful impact on a global scale.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're starting your career or looking to take the next step, you'll find opportunities to challenge yourself and shape the future of our industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1OTM3MzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team meeting"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Why Join Us
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive benefits and opportunities designed to support your career and well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 border-2 border-gray-100 hover:border-gray-300 transition-all h-full">
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities across our global offices and subsidiaries
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={`${job.title}-${job.location}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="p-6 border-2 border-gray-100 hover:border-gray-300 transition-all group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2 group-hover:text-gray-600 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span>{job.subsidiary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {job.level}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="border-2 hover:bg-gray-50 group-hover:border-black transition-all">
                      Apply Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see the right role? We're always looking for exceptional talent.
            </p>
            <Button variant="outline" className="border-2 hover:bg-gray-50">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '85,000+', label: 'Employees Worldwide' },
              { number: '50+', label: 'Countries' },
              { number: '78%', label: 'Internal Promotions' },
              { number: '4.8/5', label: 'Employee Satisfaction' },
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
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in building the future and be part of something extraordinary.
            </p>
            <Button className="bg-black hover:bg-gray-800 px-8 py-6">
              View All Opportunities
            </Button>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
