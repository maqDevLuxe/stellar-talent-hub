import { motion } from "framer-motion";
import { Crown, Plane, Diamond, Star } from "lucide-react";

const perks = [
  { icon: Crown, title: "VIP Brand Access", desc: "First-look partnerships with top-tier luxury brands before they go public." },
  { icon: Plane, title: "Global Travel", desc: "All-expenses-paid campaign travel to the world's most exclusive locations." },
  { icon: Diamond, title: "Luxury Gifting", desc: "Curated luxury product suites from partner brands year-round." },
  { icon: Star, title: "Award Nominations", desc: "Strategic positioning for industry awards and recognition programs." },
];

const ExclusivePerks = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">Benefits</p>
        <h2 className="font-display text-4xl md:text-6xl">Exclusive <span className="text-gradient">Perks</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {perks.map((perk, i) => (
          <motion.div
            key={perk.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center hover-lift group"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-blush flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <perk.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-sm mb-3">{perk.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{perk.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExclusivePerks;
