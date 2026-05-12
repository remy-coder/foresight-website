import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';

export default function SubscribePage() {
  const [isOpeningEmail, setIsOpeningEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpeningEmail(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');

    const subject = encodeURIComponent('Newsletter Subscription Request - Foresight Australia');
    const body = encodeURIComponent(`Please subscribe me to the Foresight Australia newsletter.\n\nName: ${firstName} ${lastName}\nEmail: ${email}`);
    
    window.location.href = `mailto:foresight@foresight.org.au?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsOpeningEmail(false);
    }, 3000);
  };

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
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                  placeholder="John"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                <input
                  name="lastName"
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
                name="email"
                type="email"
                required
                className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="space-y-6">
              <button
                type="submit"
                disabled={isOpeningEmail}
                className="w-full py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-[1.02] shadow-xl shadow-accent/20 disabled:opacity-70"
              >
                {isOpeningEmail ? 'Opening email...' : 'Subscribe Now'}
              </button>
              <p className="text-xs text-center text-gray-400 font-display font-medium leading-relaxed max-w-lg mx-auto">
                Submitting this form will open your email app so you can send your subscription request to Foresight Australia. We respect your privacy.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
