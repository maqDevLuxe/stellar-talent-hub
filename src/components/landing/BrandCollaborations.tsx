import { motion } from "framer-motion";

const brands = ["PRADA", "GUCCI", "DIOR", "CHANEL", "VERSACE", "BALENCIAGA", "FENDI", "YSL"];

const BrandCollaborations = () => {
  return (
    <section className="section-padding overflow-hidden border-t border-border">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-editorial text-xs text-primary tracking-[0.3em] text-center mb-16"
      >
        Trusted By The World's Leading Brands
      </motion.p>

      <div className="relative">
        <div className="flex animate-marquee gap-20 items-center">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-4xl text-muted-foreground/30 hover:text-primary whitespace-nowrap transition-colors duration-500 shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCollaborations;
