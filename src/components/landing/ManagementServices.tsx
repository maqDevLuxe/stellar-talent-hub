import { motion } from "framer-motion";
import { TrendingUp, Camera, Megaphone, Shield, Globe, Sparkles } from "lucide-react";

const services = [
  { icon: TrendingUp, title: "Brand Strategy", desc: "Curated partnerships aligned with your personal brand DNA." },
  { icon: Camera, title: "Content Direction", desc: "Editorial-grade content strategy and creative direction." },
  { icon: Megaphone, title: "PR & Communications", desc: "Global press coverage and narrative control." },
  { icon: Shield, title: "Legal & Contracts", desc: "Full legal representation and deal negotiation." },
  { icon: Globe, title: "Global Booking", desc: "International event appearances and campaign placements." },
  { icon: Sparkles, title: "Personal Branding", desc: "Crafting iconic, lasting digital identities." },
];

const ManagementServices = () => {
  return (
    <section id="services" className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">What We Do</p>
        <h2 className="font-display text-4xl md:text-6xl">Full-Spectrum<br /><span className="text-gradient">Management</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 hover-lift group"
          >
            <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-sm mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ManagementServices;
