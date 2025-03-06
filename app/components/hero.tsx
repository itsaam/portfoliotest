"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, Figma, Layers, Palette } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="pt-20 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden relative"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-4 md:left-10 w-32 md:w-64 h-32 md:h-64 rounded-full bg-primary/5"></div>
      <div className="absolute bottom-1/4 right-4 md:right-10 w-36 md:w-72 h-36 md:h-72 rounded-full bg-[#7C3AED]/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="inline-block relative mb-4">
              <span className="text-xs md:text-sm uppercase tracking-widest text-primary">
                UI/UX Designer
              </span>
              <motion.span className="absolute -bottom-2 left-0 h-0.5 bg-primary w-full"></motion.span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 tracking-tight">
              Créer des
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                {" "}
                expériences
              </span>{" "}
              utilisateur
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#7C3AED]/80">
                {" "}
                mémorables
              </span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Designer UI/UX passionné spécialisé dans la création d'interfaces
              intuitives et d'expériences utilisateur captivantes qui résolvent
              des problèmes réels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-medium rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Voir mes projets</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-[#7C3AED] text-[#7C3AED] font-medium rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Me contacter</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 md:mt-20 relative px-4"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-[#7C3AED]/20 rounded-2xl opacity-70"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop"
                width={1200}
                height={600}
                alt="Interface design on a computer screen"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Figma className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium">UI Design</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-xs font-medium">UX Research</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
              animate={{
                x: [0, -10, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EC4899]/20 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-[#EC4899]" />
                </div>
                <div>
                  <p className="text-xs font-medium">Design Systems</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
