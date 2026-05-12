import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [isOpeningEmail, setIsOpeningEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpeningEmail(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent('Website enquiry - Foresight Australia');
    const body = encodeURIComponent(`First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:foresight@foresight.org.au?subject=${subject}&body=${body}`;

    // Reset button text after a delay
    setTimeout(() => {
      setIsOpeningEmail(false);
    }, 3000);
  };

  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-5xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Contact Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Get in <span className="text-primary">Touch</span>. <br />We're Here.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            For enquiries regarding our programs, partnerships, or how to support our work, please contact our Sydney office.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-24">
          <div>
            <div className="space-y-8 md:space-y-16">
              {[
                { icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />, title: 'Our Office', content: 'PO Box 663, HORNSBY NSW 2077' },
                { icon: <Phone className="w-6 h-6 md:w-8 md:h-8" />, title: 'Phone', content: '+61 2 8021 3632' },
                { icon: <Mail className="w-6 h-6 md:w-8 md:h-8" />, title: 'Email', content: 'foresight@foresight.org.au' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 md:gap-8 group">
                  <div className="bg-white p-5 md:p-4 rounded-2xl md:rounded-[1.5rem] shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-extrabold mb-2 text-gray-900 tracking-tight">{item.title}</h3>
                    <p className="text-sm md:text-lg text-gray-500 leading-relaxed font-display font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-12 rounded-3xl md:rounded-[3rem] shadow-3xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">First Name</label>
                  <input required name="firstName" type="text" className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="John" />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Last Name</label>
                  <input required name="lastName" type="text" className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Email Address</label>
                <input required name="email" type="email" className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="john@example.com" />
              </div>
              <div className="space-y-3 md:space-y-4">
                <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Message</label>
                <textarea required name="message" rows={5} className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 resize-none" placeholder="How can we help?"></textarea>
              </div>
              <div className="space-y-6">
                <button
                  type="submit"
                  disabled={isOpeningEmail}
                  className="w-full py-5 md:py-6 bg-primary text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all hover:bg-primary-dark shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isOpeningEmail ? 'Opening email...' : 'Send Message'}
                </button>
                <p className="text-[11px] text-center text-gray-400 font-display font-medium leading-relaxed">
                  Submitting this form will open your email app so you can send your message to Foresight Australia.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
