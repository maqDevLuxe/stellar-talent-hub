import { motion } from "framer-motion";

const reviews = [
  { quote: "ÉLITE transformed our influencer strategy entirely. Their talent roster is unmatched.", author: "Sophie Laurent", role: "VP Marketing, Luxury Maison", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { quote: "The level of professionalism and creative vision is beyond anything we've experienced.", author: "Marcus Wei", role: "Brand Director, Global Fashion House", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
  { quote: "Every campaign exceeded KPIs by 300%. They don't just manage talent — they build empires.", author: "Isabella Rossi", role: "CMO, Premium Beauty Brand", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
];

const BrandReviews = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">Testimonials</p>
        <h2 className="font-display text-4xl md:text-6xl">Partner <span className="text-gradient">Voices</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover-lift"
          >
            <p className="text-foreground text-sm leading-relaxed mb-8 italic">"{r.quote}"</p>
            <div className="flex items-center gap-4">
              <img src={r.avatar} alt={r.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-display text-xs">{r.author}</p>
                <p className="text-muted-foreground text-[11px]">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandReviews;
