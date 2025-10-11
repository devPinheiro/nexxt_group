import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function ContactPage() {
  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '450 Park Avenue, New York, NY 10022',
      phone: '+1 (212) 555-0100',
      email: 'newyork@apexglobal.com',
    },
    {
      city: 'London',
      country: 'UK',
      address: '1 Canada Square, Canary Wharf, London E14 5AB',
      phone: '+44 20 7123 4567',
      email: 'london@apexglobal.com',
    },
    {
      city: 'Hong Kong',
      country: 'China',
      address: 'International Finance Centre, Central, Hong Kong',
      phone: '+852 2123 4567',
      email: 'hongkong@apexglobal.com',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai International Financial Centre, Dubai',
      phone: '+971 4 123 4567',
      email: 'dubai@apexglobal.com',
    },
  ];

  const contactReasons = [
    'General Inquiry',
    'Partnership Opportunities',
    'Investment Information',
    'Media Relations',
    'Career Opportunities',
    'Other',
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our global team
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-700">First Name</label>
                    <Input
                      placeholder="John"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-gray-300 focus:border-black"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-gray-300 focus:border-black"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Reason for Contact</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-black focus:outline-none">
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="border-gray-300 focus:border-black resize-none"
                  />
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 py-6">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us directly through any of the channels below.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-gray-600">info@apexglobal.com</p>
                    <p className="text-gray-600">press@apexglobal.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (212) 555-0100 (Americas)</p>
                    <p className="text-gray-600">+44 20 7123 4567 (Europe)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Local time at each office</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gray-50 border-2 border-gray-100">
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  Media Inquiries
                </h3>
                <p className="text-gray-600 mb-4">
                  For press and media-related questions, please contact our media relations team.
                </p>
                <Button variant="outline" className="border-2 hover:bg-white">
                  Media Contact
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Offices
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our global headquarters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-gray-100 hover:border-gray-300 transition-all h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                        {office.city}
                      </h3>
                      <p className="text-gray-500">{office.country}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-gray-700">{office.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-700">{office.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="text-gray-700">{office.email}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-6 border-2 hover:bg-gray-50">
                    Get Directions
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Global Presence
            </h2>
            <p className="text-gray-400">
              Operating in 50+ countries across four continents
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video bg-gray-900 rounded-lg overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Interactive Map Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
