import { motion } from "framer-motion";

const articles = [
  { title: "The Rise of Creator-Led Brands in 2025", category: "Trends", date: "Mar 2025", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { title: "Why Micro-Influencers Are the New Luxury", category: "Industry", date: "Feb 2025", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { title: "Digital Fashion Shows Redefine Engagement", category: "Innovation", date: "Jan 2025", img: "https://images.unsplash.com/photo-1558171813-01342daa26e4?w=600&q=80" },
];

const IndustryNews = () => {
  return (
    <section id="news" className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">Insights</p>
        <h2 className="font-display text-4xl md:text-6xl">Industry <span className="text-gradient">Pulse</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card overflow-hidden hover-lift group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden">
              <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-editorial text-[10px] text-primary tracking-[0.2em]">{a.category}</span>
                <span className="text-muted-foreground text-xs">{a.date}</span>
              </div>
              <h3 className="font-display text-sm leading-tight">{a.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default IndustryNews;
