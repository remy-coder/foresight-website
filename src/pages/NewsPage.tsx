import { motion } from 'motion/react';

export default function NewsPage() {
  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA] min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Latest Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            News & <span className="text-primary">Announcements</span>.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
          >
            <div className="aspect-[16/9] w-full relative">
              <img 
                src="/media/images/solomon-islands-dr-mathew-bonie-hobart.png" 
                alt="Dr Mathew Bonie" 
                className="w-full h-full object-cover" 
                loading="lazy"
                width="800"
                height="450"
                decoding="async"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-primary">Hobart Conference</div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-6">Supporting Eye Health Leadership in Solomon Islands</h3>
              <div className="text-gray-600 font-display font-medium leading-relaxed flex-1 space-y-4">
                <p>
                  Foresight Australia was pleased to sponsor Dr Mathew Bonie, an ophthalmologist from Solomon Islands, to attend the recent RANZCO Global Eye Health and IAPB conference in Hobart.
                </p>
                <p>
                  This provided an important opportunity for Dr Bonie to hear from and connect with leaders in global eye health, while also helping strengthen planning for future programmes in Solomon Islands to build local ophthalmic capacity.
                </p>
                <p>
                  Foresight remains committed to supporting long-term, locally led eye health development in Solomon Islands through partnership, skills transfer, and sustained engagement.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
          >
            <div className="aspect-[16/9] w-full relative">
              <img 
                src="/media/images/solomon-islands-geoffrey-painter-hobart.png" 
                alt="Geoffrey Painter" 
                className="w-full h-full object-cover" 
                loading="lazy"
                width="800"
                height="450"
                decoding="async"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-primary">Hobart Conference</div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-6">Foresight Australia at the RANZCO Global Eye Health and IAPB Conference</h3>
              <div className="text-gray-600 font-display font-medium leading-relaxed flex-1 space-y-4">
                <p>
                  Foresight Australia was represented at the recent RANZCO Global Eye Health and IAPB conference in Hobart by A/Prof Geoffrey Painter AM, who promoted Foresight’s return to in-country support for Solomon Islands in 2026.
                </p>
                <p>
                  During the conference, Geoffrey participated in the RANZCO Global Health Roundtable NGO discussion as well as the PacEYES meeting, helping continue important conversations about eye health partnerships and future collaboration across the region.
                </p>
                <p>
                  This year is especially significant, marking the 30th anniversary of Geoffrey’s first visit to Solomon Islands — a reminder of Foresight’s long-standing connection and commitment to strengthening local eye care capacity.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
