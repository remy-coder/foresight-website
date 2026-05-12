import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

interface VolunteerFormPageProps {
  onNavigate?: (id: string) => void;
}

export default function VolunteerFormPage({ onNavigate }: VolunteerFormPageProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xvzvkezw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-12 md:pt-32 md:pb-24 bg-[#FAFAFA] min-h-[60vh] flex items-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 text-primary">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6 text-gray-900 tracking-tight">
              Thank you.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-display font-medium leading-relaxed">
              Your volunteer enquiry has been sent to Foresight Australia.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('get-involved')}
              className="mt-10 px-8 py-4 bg-primary text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all hover:bg-primary-dark"
            >
              Back to Get Involved
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <button
          onClick={() => onNavigate && onNavigate('get-involved')}
          className="group flex items-center gap-3 text-primary font-display font-black uppercase tracking-widest text-xs mb-10 hover:gap-5 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Get Involved</span>
        </button>

        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Volunteer with <span className="text-primary">Foresight Australia</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            Thank you for your interest in volunteering with Foresight Australia. Please complete the form below and we will contact you about suitable opportunities.
          </motion.p>
        </div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[3rem] shadow-3xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
            
            {error && (
              <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <p className="text-sm font-display font-bold">
                  Sorry, your enquiry could not be sent. Please email us directly at <a href="mailto:foresight@foresight.org.au" className="underline hover:text-red-700 transition-colors">foresight@foresight.org.au</a>.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">First Name</label>
                  <input required name="firstName" type="text" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Last Name</label>
                  <input required name="lastName" type="text" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input required name="email" type="email" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400" placeholder="+61" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Location (City/State)</label>
                  <input required name="location" type="text" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400" placeholder="Sydney, NSW" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Area of Interest</label>
                  <select required name="interest" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900">
                    <option value="">Select an option</option>
                    <option value="Clinical/Medical">Clinical/Medical</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Fundraising/Events">Fundraising/Events</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Skills / Background</label>
                <input required name="skills" type="text" className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400" placeholder="e.g. Registered Nurse, Marketing, Student" />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea required name="message" rows={4} className="w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 resize-none placeholder:font-medium placeholder:text-gray-400" placeholder="Tell us more about yourself..."></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 md:py-6 bg-primary text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all hover:bg-primary-dark shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Submit Application'}
                </button>
                <p className="text-[11px] text-center text-gray-400 font-display font-medium mt-6">
                  You can also email us directly at <a href="mailto:foresight@foresight.org.au" className="text-primary hover:underline transition-all font-bold">foresight@foresight.org.au</a>.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
