import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function SubscribePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen flex items-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Thank you for subscribing.</h2>
            <p className="text-gray-500 font-display font-medium leading-relaxed">
              We've added your email to our list. You'll soon receive the latest updates from Foresight Australia.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">Subscribe to our newsletter</h1>
            <p className="text-lg md:text-xl text-gray-500 font-display font-medium leading-relaxed">
              Stay up to date with Foresight Australia’s latest projects, impact stories, and updates from the field.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-[3rem] shadow-xl border border-gray-100 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                  placeholder="John"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                placeholder="john.doe@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-[1.02] shadow-xl shadow-accent/20"
            >
              Submit
            </button>

            <p className="text-xs text-center text-gray-400 font-display font-medium leading-relaxed max-w-lg mx-auto">
              We respect your privacy and will only use your details to send updates from Foresight Australia.
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
