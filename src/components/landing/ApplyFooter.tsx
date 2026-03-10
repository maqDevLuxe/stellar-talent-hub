import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";

const ApplyFooter = () => {
  return (
    <>
      <section id="apply" className="section-padding border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-editorial text-xs text-primary tracking-[0.3em] mb-4">Ready?</p>
          <h2 className="font-display text-4xl md:text-7xl mb-6">
            Join The <span className="text-gradient">ÉLITE</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
            We're selectively expanding our roster. If you're a creator with 100K+ followers and a vision for greatness, we want to hear from you.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-secondary border border-border px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="button"
              className="gradient-blush text-primary-foreground font-editorial text-xs px-8 py-4 tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Apply <ArrowRight size={14} />
            </button>
          </form>
          <p className="text-muted-foreground text-[11px]">Response within 48 hours. By invitation only.</p>
        </motion.div>
      </section>

      <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl tracking-widest">
            ÉLITE<span className="text-primary">.</span>
          </div>

          <div className="flex items-center gap-6">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-xs">© 2025 ÉLITE Management. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ApplyFooter;
