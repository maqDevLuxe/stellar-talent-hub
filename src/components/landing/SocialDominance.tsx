import { motion } from "framer-motion";

const platforms = [
  { name: "Instagram", followers: "89M+", growth: "+234%", color: "from-pink-500 to-purple-500" },
  { name: "TikTok", followers: "127M+", growth: "+412%", color: "from-cyan-400 to-pink-400" },
  { name: "YouTube", followers: "45M+", growth: "+156%", color: "from-red-500 to-red-600" },
  { name: "Twitter/X", followers: "32M+", growth: "+89%", color: "from-blue-400 to-blue-600" },
];

const SocialDominance = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">Social Media</p>
        <h2 className="font-display text-4xl md:text-6xl">Digital <span className="text-gradient">Dominance</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card p-8 hover-lift"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-sm">{p.name}</h3>
              <span className="text-primary font-editorial text-xs tracking-wider">{p.growth} YoY</span>
            </div>
            <p className="font-display text-4xl md:text-5xl text-gradient mb-4">{p.followers}</p>
            <div className="w-full h-1 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialDominance;
