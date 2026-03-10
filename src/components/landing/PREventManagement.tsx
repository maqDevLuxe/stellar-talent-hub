import { motion } from "framer-motion";

const events = [
  { title: "Met Gala 2025", location: "New York", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { title: "Paris Fashion Week", location: "Paris", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
  { title: "Cannes Film Festival", location: "Cannes", img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80" },
];

const PREventManagement = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">PR & Events</p>
        <h2 className="font-display text-4xl md:text-6xl">Red Carpet <span className="text-gradient">Ready</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
          >
            <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-editorial text-[10px] text-primary tracking-[0.3em] mb-1">{event.location}</p>
              <h3 className="font-display text-lg">{event.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PREventManagement;
