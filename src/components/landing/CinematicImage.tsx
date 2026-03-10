import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CinematicImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.img
        style={{ y }}
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
        alt="Cinematic talent"
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">The Vision</p>
          <h2 className="font-display text-4xl md:text-7xl max-w-3xl">
            Where Talent Meets <span className="text-gradient">Legacy</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicImage;
