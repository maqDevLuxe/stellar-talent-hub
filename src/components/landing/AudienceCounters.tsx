import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { value: 293, suffix: "M", label: "Monthly Active Audience" },
  { value: 48, suffix: "", label: "Countries Reached" },
  { value: 1.8, suffix: "B", label: "Annual Content Views" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const dur = 2000;
    const step = target / (dur / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{target < 10 ? count.toFixed(1) : Math.floor(count)}{suffix}</span>;
};

const AudienceCounters = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="font-display text-6xl md:text-8xl text-gradient">
              <AnimatedNumber target={c.value} suffix={c.suffix} />
            </p>
            <p className="font-editorial text-[10px] text-muted-foreground tracking-[0.3em] mt-4">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AudienceCounters;
