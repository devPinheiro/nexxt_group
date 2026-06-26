import { motion } from 'motion/react';
import { Award, Users, Target, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';

const VALUES = [
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

export function AboutPage() {
  const aboutConfig = getPageConfig('about');

  return (
    <>
      <SimpleSEO
        title={aboutConfig.title}
        description={aboutConfig.description}
        keywords={aboutConfig.keywords}
        type="website"
        path="/about"
      />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero.jpeg"
              alt="Nexxt Group headquarters"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            
            <motion.h1
              className="text-5xl md:text-6xl text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              About Nexxt Group
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Driving innovation and empowering Africa's economic transformation
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="lg:py-40 py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div {...fadeInUp}>
              <p className="text-black text-sm tracking-widest uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl text-black mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                Building Businesses That Create Lasting Value
              </h2>
              <p className="text-lg text-black leading-relaxed mb-5">
                Nexxt Group is a forward-thinking company dedicated to driving innovation across technology, renewable energy, procurement, digital solutions, and business development. With a vision to deliver practical, technology-driven solutions, we help businesses improve efficiency, accelerate growth, and adapt to an evolving global economy.
              </p>
              <p className="text-base text-black leading-relaxed">
                We are committed to empowering businesses, supporting entrepreneurship, and contributing to Africa's economic transformation through innovation, digital technology, and strategic investments.
              </p>
            </motion.div>
          </div>
        </section>
          {/* Values Section */}
        <section className="lg:py-40 py-12 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">What We Stand For</p>
              <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Values
              </h2>
              <div className="w-20 h-0.5 bg-neutral-600 mx-auto mb-5" />
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that guide every decision we make and every partnership we form.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all h-full">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="text-white" size={26} />
                      </div>
                      <div>
                        <h3 className="text-xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                          {value.title}
                        </h3>
                        <p className="text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="lg:py-40 py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Vision for Africa
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To establish Nexxt Group as one of Africa's leading multinational enterprises — recognised for excellence, innovation, and positive impact on communities and economies across the continent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="lg:py-40 py-12 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">Leadership</p>
              <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Meet Our Founder & CEO
              </h2>
              <div className="w-20 h-0.5 bg-neutral-600 mx-auto mb-5" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-2xl bg-white/5 blur-sm" />
                  <img
                    src="/images/ceo-frank.jpeg"
                    alt="Frank Chibuike Onyeukwu — Founder & CEO, Nexxt Group"
                    className="relative w-full max-w-sm md:max-w-md rounded-2xl object-cover border border-neutral-700"
                    style={{ aspectRatio: '3/4', objectPosition: 'top' }}
                  />
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-3xl text-white mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                  Frank Chibuike Onyeukwu
                </h3>
                <p className="text-gray-400 font-medium mb-6">Founder & Chief Executive Officer — Nexxt Group</p>

                <div className="space-y-4 text-gray-300 leading-relaxed text-[0.95rem]">
                  <p>
                    Frank Chibuike Onyeukwu is an accomplished entrepreneur, business strategist, and the Founder and Chief Executive Officer (CEO) of <strong className="text-white">Nexxt Group</strong>, a forward-thinking company dedicated to driving innovation across technology, renewable energy, procurement, digital solutions, and business development.
                  </p>
                  <p>
                    With a vision to build businesses that create lasting value, Frank has positioned Nexxt Group as an organisation focused on delivering practical, technology-driven solutions that help businesses improve efficiency, accelerate growth, and adapt to an evolving global economy.
                  </p>
                  <p>
                    Frank holds a degree in <strong className="text-white">Theatre Arts and Business Management</strong> — a discipline that strengthened his leadership, communication, and creative thinking abilities. Recognising the growing importance of data in business, he furthered his education by studying <strong className="text-white">Data Analysis</strong>, gaining valuable expertise in business intelligence, data interpretation, and strategic decision-making.
                  </p>
                  <p>
                    Known for his innovative mindset and commitment to excellence, Frank combines creativity with analytical thinking to identify new opportunities and develop sustainable business solutions. His leadership philosophy is centred on integrity, innovation, collaboration, and continuous improvement.
                  </p>
                  <p>
                    As the driving force behind Nexxt Group, Frank Chibuike Onyeukwu is committed to empowering businesses, supporting entrepreneurship, and contributing to Africa's economic transformation through innovation, digital technology, and strategic investments. His long-term vision is to establish Nexxt Group as one of Africa's leading multinational enterprises, recognised for excellence, innovation, and positive impact.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      

      </div>
    </>
  );
}
