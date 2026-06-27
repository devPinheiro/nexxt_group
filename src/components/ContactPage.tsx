import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { SimpleSEO } from './SEO/SimpleSEO';
import { getPageConfig } from './SEO';
import { useState, FormEvent, ChangeEvent } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  reason: string;
  message: string;
}

const CONTACT_REASONS = [
  'Global Services Inquiry',
  'Automobile Dealership',
  'Fashion & Lifestyle',
  'Real Estate',
  'E-Commerce',
  'Hospitality',
  'Partnership Opportunity',
  'General Inquiry',
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    lines: ['NexxtGroup12@gmail.com'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+234 707 980 0450'],
  },
  {
    icon: MapPin,
    label: 'Address',
    lines: ['8 Funso Owoyemi Street, Abule Egba', 'Lagos State, Nigeria'],
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Monday – Friday: 9:00 AM – 6:00 PM (WAT)'],
  },
];

export function ContactPage() {
  const contactConfig = getPageConfig('contact');

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    reason: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', reason: '', message: '' });
    } catch {
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
      <div className="min-h-screen">

        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero.jpeg"
              alt="Nexttradiixx Company Limited headquarters"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.p
              className="text-white/50 text-sm tracking-widest uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-white/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Connect with the Nexttradiixx team
            </motion.p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  Send Us a Message
                </h2>
                <p className="text-white/500 mb-8">
                  Fill in the form and we'll get back to you within 24 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-neutral-900 border border-neutral-700 rounded-lg">
                    <p className="text-white/50">Thank you! Your message has been sent. We'll be in touch soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-neutral-900 border border-neutral-700 rounded-lg">
                    <p className="text-white/50">Something went wrong. Please try again or email us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-white/50 text-sm font-medium">First Name *</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-600 focus:border-gray-400"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-white/50 text-sm font-medium">Last Name *</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-600 focus:border-gray-400"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-white/50 text-sm font-medium">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-600 focus:border-gray-400"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-white/50 text-sm font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 800 000 0000"
                      className="bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-600 focus:border-gray-400"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-white/50 text-sm font-medium">Company / Organisation</label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-600 focus:border-gray-400"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block mb-2 text-white/50 text-sm font-medium">Reason for Contact *</label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white focus:border-gray-400 focus:outline-none disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="" className="text-white/50">Select a reason</option>
                      {CONTACT_REASONS.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-white/50 text-sm font-medium">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your needs and how we can help..."
                      rows={5}
                      className="bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-600 focus:border-gray-400 resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-6 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900" />
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

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  Reach Us Directly
                </h2>
                <p className="text-white/50 mb-10">
                  Prefer to reach out directly? We're ready to hear from you through any of the channels below.
                </p>

                <div className="space-y-6 mb-10">
                  {CONTACT_INFO.map(({ icon: Icon, label, lines }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{label}</h3>
                        {lines.map(line => (
                          <p key={line} className="text-white/50 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Card */}
                <Card className="p-6 bg-neutral-900 border border-neutral-800">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl text-white" style={{ fontFamily: 'var(--font-serif)' }}>Lagos Office</h3>
                      <p className="text-white/50 text-sm">Nigeria — Head Office</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white mb-0.5 font-medium text-xs uppercase tracking-wider">Address</p>
                      <p className="text-white/50">8 Funso Owoyemi Street, Abule Egba, Lagos State, Nigeria</p>
                    </div>
                    <div>
                      <p className="text-white mb-0.5 font-medium text-xs uppercase tracking-wider">Phone</p>
                      <p className="text-white/50">+234 707 980 0450</p>
                    </div>
                    <div>
                      <p className="text-white mb-0.5 font-medium text-xs uppercase tracking-wider">Email</p>
                      <p className="text-white/50">NexxtGroup12@gmail.com</p>
                    </div>
                  </div>
                  <button
                    className="mt-5 w-full border border-neutral-700 hover:border-gray-500 text-white/50 hover:text-white py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => window.open('https://maps.google.com/maps?q=8+Funso+Owoyemi+Street+Abule+Egba+Lagos+Nigeria', '_blank')}
                  >
                    Get Directions
                  </button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
