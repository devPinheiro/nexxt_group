import { motion } from 'motion/react';
import { Award, Users, Target, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

export function AboutPage() {
  const aboutConfig = getPageConfig('about');
  const leadership = [
    {
      name: 'James Morrison',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0MjU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0MjU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0MjU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Emily Thompson',
      title: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0MjU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, setting benchmarks for quality and performance.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace change and continuously seek new ways to create value for our stakeholders.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and respect for all stakeholders.',
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
        title={aboutConfig.title}
        description={aboutConfig.description}
        keywords={aboutConfig.keywords}
        type="website"
        path="/about"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NDgxODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="African business professional"
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
            The Nexxt Story
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Two decades of accelerating global business across diverse industries
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              To accelerate global business growth through our diverse portfolio spanning Automobile, Fashion, Real Estate, and Manufacturing, while maintaining the highest standards of excellence and innovation.
            </p>
            <p className="text-lg text-gray-500">
              We are committed to being the trusted partner for businesses worldwide, delivering mature solutions and sustainable growth across all sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Heritage
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: '2005',
                title: 'The Foundation',
                description: 'Nexxt Group was founded with a vision to accelerate global business growth across diverse industries with mature, trusted solutions.',
              },
              {
                year: '2008',
                title: 'Automobile Division',
                description: 'Launched Nexxt Automobile, establishing our premium automotive solutions and vehicle distribution services.',
              },
              {
                year: '2012',
                title: 'Fashion & Real Estate',
                description: 'Expanded into fashion retail and real estate development, diversifying our portfolio across lifestyle and property sectors.',
              },
              {
                year: '2016',
                title: 'Manufacturing Excellence',
                description: 'Established Nexxt Manufacturing, bringing advanced industrial production capabilities to our growing portfolio.',
              },
              {
                year: '2020',
                title: 'Global Acceleration',
                description: 'Accelerated international expansion with comprehensive import/export operations and customer goods distribution.',
              },
              {
                year: '2025',
                title: 'Industry Leadership',
                description: 'Leading global business acceleration across Automobile, Fashion, Real Estate, and Manufacturing in 50+ countries.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-right md:text-left">
                  <div className="text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    {milestone.year}
                  </div>
                </div>
                <div className="w-4 h-4 bg-black rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Leadership
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Guided by a team of visionary leaders with decades of global experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-1 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                      {leader.name}
                    </h3>
                    <p className="text-gray-400">{leader.title}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Values
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our decisions and define who we are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-gray-100 hover:border-gray-300 transition-all h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Commitment
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to creating long-term value while maintaining the highest ethical standards. Our commitment extends beyond financial performance to encompass environmental stewardship, social responsibility, and good governance.
            </p>
            <p className="text-lg text-gray-600">
              As we look to the future, we remain focused on sustainable growth, innovation, and making a positive impact on the world around us.
            </p>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
