import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 2.4, suffix: "B+", label: "Campaign Impressions" },
  { value: 340, suffix: "M+", label: "Audience Reach" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 750, suffix: "+", label: "Brand Partnerships" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl text-gradient">
      {target < 10 ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
};

const CampaignMetrics = () => {
  return (
    <section id="campaigns" className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">The Numbers</p>
        <h2 className="font-display text-4xl md:text-6xl">Campaign <span className="text-gradient">Reach</span></h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <Counter target={m.value} suffix={m.suffix} />
            <p className="font-editorial text-[10px] text-muted-foreground tracking-[0.2em] mt-4">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CampaignMetrics;
