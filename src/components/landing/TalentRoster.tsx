import { motion } from "framer-motion";

const talents = [
  { name: "Aria Voss", role: "Fashion & Lifestyle", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", followers: "12.4M" },
  { name: "Kai Renard", role: "Luxury & Travel", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", followers: "8.7M" },
  { name: "Luna Chen", role: "Beauty & Wellness", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", followers: "15.2M" },
  { name: "Dante Moreau", role: "Streetwear & Culture", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", followers: "6.9M" },
];

const TalentRoster = () => {
  return (
    <section id="talent" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">Our Roster</p>
        <h2 className="font-display text-4xl md:text-6xl">The Faces of<br /><span className="text-gradient">Influence</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {talents.map((talent, i) => (
          <motion.div
            key={talent.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
          >
            <img
              src={talent.img}
              alt={talent.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-editorial text-[10px] text-primary tracking-[0.3em] mb-1">{talent.followers} Followers</p>
              <h3 className="font-display text-xl mb-1">{talent.name}</h3>
              <p className="text-muted-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{talent.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TalentRoster;
