"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, Code, Database, Server } from "lucide-react";
import Image from "next/image";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  // Parallax effect for hero elements
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  // Smooth animations
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative"
      ref={ref}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-primary/5"
        style={{ y: smoothY1, rotate: smoothRotate }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-[#7C3AED]/5"
        style={{ y: smoothY2 }}
      />

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
              <span className="text-sm  tracking-widest text-primary">
                Développeur Junior
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-0.5 bg-primary w-0"
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Crée des
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {" "}
                solutions
              </motion.span>{" "}
              performantes et
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#7C3AED]/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {" "}
                efficaces
              </motion.span>
            </h1>
            <motion.h3
              className="text-xl font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Apprendre, coder et résoudre des problèmes
            </motion.h3>
            <motion.p
              className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Passionné par le back-end, j&apos;aime créer et améliorer des
              applications. En formation, je cherche une alternance (2 semaines
              entreprise / 2 semaines école) pour monter en compétences.
            </motion.p>

            <motion.div
              className="flex justify-center mb-6 space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <motion.a
                href="https://github.com/itsaam"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Image
                  src="/icons/github.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/samy-abdelmalek/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://bento.me/itsaam"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Image
                  src="/icons/bento.png"
                  alt="Bento.me"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="sr-only">Bento.me</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full flex items-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Voir mes projets</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-20 relative"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-[#7C3AED]/20 rounded-2xl opacity-70"
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(124, 58, 237, 0)",
                    "0px 0px 20px rgba(124, 58, 237, 0.3)",
                    "0px 0px 0px rgba(124, 58, 237, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <Image
                  src="/icons/main.avif"
                  width={1200}
                  height={600}
                  alt="Modern dashboard interface design"
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
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Front end</p>
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
                    <Database className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Database</p>
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
                    <Server className="w-4 h-4 text-[#EC4899]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Backend</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
