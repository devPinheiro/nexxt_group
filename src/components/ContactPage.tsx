import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, FormEvent } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  reason: string;
  message: string;
}

interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
}

export function ContactPage() {
  const contactConfig = getPageConfig('contact');
  
  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    reason: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const offices: Office[] = [
    {
      city: 'Lagos',
      country: 'Nigeria',
      address: 'Victoria Island Business District, Lagos State, Nigeria',
      phone: '+234 1 234 5678',
      email: 'lagos@nexxtgroup.com',
    },
    {
      city: 'Abuja',
      country: 'Nigeria', 
      address: 'Central Business District, Abuja FCT, Nigeria',
      phone: '+234 9 876 5432',
      email: 'abuja@nexxtgroup.com',
    },
    {
      city: 'New York',
      country: 'United States',
      address: '1 World Trade Center, New York, NY 10007',
      phone: '+1 (212) 555-0100',
      email: 'newyork@nexxtgroup.com',
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '1 Canada Square, Canary Wharf, London E14 5AB',
      phone: '+44 20 7123 4567',
      email: 'london@nexxtgroup.com',
    },
  ];

  const contactReasons = [
    'Partnership Opportunities',
    'Investment Information', 
    'Automobile Division Inquiry',
    'Fashion Division Inquiry',
    'Real Estate Division Inquiry',
    'Manufacturing Division Inquiry',
    'Business Acceleration Services',
    'Media Relations',
    'Career Opportunities',
    'General Inquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        reason: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <SimpleSEO
        title={contactConfig.title}
        description={contactConfig.description}
        keywords={contactConfig.keywords}
        type="website"
        path="/contact"
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5NDgxODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business contact"
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
              Partner With Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with Nexxt Group's global business acceleration team
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
                <h2
                  className="text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Start the Conversation
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to accelerate your business? Our team of experts is here to help you explore partnership opportunities and growth strategies.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">There was an error sending your message. Please try again or contact us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-gray-700 font-medium">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="border-gray-300 focus:border-black"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-gray-700 font-medium">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="border-gray-300 focus:border-black"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@company.com"
                      className="border-gray-300 focus:border-black"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-black"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                      className="border-gray-300 focus:border-black"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block mb-2 text-gray-700 font-medium">
                      Reason for Contact *
                    </label>
                    <select 
                      id="reason"
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-black focus:outline-none disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a reason</option>
                      {contactReasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your business goals and how we can help accelerate your growth..."
                      rows={6}
                      className="border-gray-300 focus:border-black resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 py-6 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
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
                <h2
                  className="text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Connect Directly
                </h2>
                <p className="text-gray-600 mb-8">
                  Prefer to reach out directly? Our global team is available through multiple channels to assist with your business needs.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@nexxtgroup.com</p>
                      <p className="text-gray-600">partnerships@nexxtgroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (212) 555-0100 (Americas)</p>
                      <p className="text-gray-600">+44 20 7123 4567 (Europe)</p>
                      <p className="text-gray-600">+234 1 234 5678 (Africa)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Local time at each office</p>
                    </div>
                  </div>
                </div>

                <Card className="p-6 bg-gray-50 border-2 border-gray-100">
                  <h3
                    className="text-xl mb-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Media & Press Inquiries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For media relations, press inquiries, and interview requests, please contact our communications team.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-2 hover:bg-white"
                    onClick={() => window.location.href = 'mailto:press@nexxtgroup.com'}
                  >
                    Contact Media Team
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
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Global Offices
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at any of our global headquarters across four continents
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={`${office.city}-${office.country}`}
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
                        <h3
                          className="text-2xl mb-1"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {office.city}
                        </h3>
                        <p className="text-gray-500">{office.country}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Address</p>
                        <p className="text-gray-700">{office.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Phone</p>
                        <p className="text-gray-700">{office.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Email</p>
                        <p className="text-gray-700">{office.email}</p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-6 border-2 hover:bg-gray-50"
                      onClick={() => {
                        const encodedAddress = encodeURIComponent(office.address);
                        window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
                      }}
                    >
                      Get Directions
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Global Business Acceleration
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Operating across 50+ countries with local expertise and global reach. 
                Accelerating business growth through mature, trusted partnerships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="text-lg">Interactive Global Map</p>
                  <p className="text-sm mt-2">Showcasing our worldwide presence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}