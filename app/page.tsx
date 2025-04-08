"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Zap,
  Briefcase,
  Calendar,
  Globe,
  MapPin,
  Download,
  Menu,
  X,
  Settings,
  Languages,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  type Variants,
} from "framer-motion";
import { useRef, useEffect } from "react";

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideIn: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animation component for sections
const AnimatedSection = ({
  children,
  className,
  variants = fadeIn,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  id?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Définition du type Project
type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  slug?: string;
  details?: {
    subtitle: string;
    features: string[];
    technologies: string[];
    description: string;
  };
};

// Définition du type Experience
type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  responsibilities: string[];
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const _sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    experiences: useRef(null),
    contact: useRef(null),
  };

  // Fonction pour gérer le défilement fluide vers les sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Gérer les liens d'ancrage dans l'URL au chargement de la page
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      // Petit délai pour s'assurer que la page est complètement chargée
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  // Parallax effect for background elements
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 20]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -15]);

  // Smooth scroll effect
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothRotate1 = useSpring(rotate1, { stiffness: 100, damping: 30 });
  const smoothRotate2 = useSpring(rotate2, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-background overflow-hidden ">
      {/* Decorative background elements with parallax */}
      <motion.div
        className="fixed top-20 left-[5%] w-64 h-64 rounded-full bg-primary/5 -z-10"
        style={{ y: smoothY1, rotate: smoothRotate1 }}
      />
      <motion.div
        className="fixed top-[40%] right-[5%] w-80 h-80 rounded-full bg-[#7C3AED]/5 -z-10"
        style={{ y: smoothY2, rotate: smoothRotate2 }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-[hsl(220,20%,97%)] backdrop-blur supports-[backdrop-filter]:bg-[hsl(220,20%,97%)]/60">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-base md:text-lg hover:opacity-80 transition-opacity"
          >
            <span className="text-primary">Samy</span> Abdelmalek
          </button>

          {/* Navigation pour desktop */}
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Expériences
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Bouton menu hamburger pour mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray- 00 rounded-lg"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <a
            href="/icons/Cv_AbdelmalekSamy_LettreMotivation.pdf"
            download
            className="hidden md:inline-flex"
          >
            <Button>
              <Download className="mr-2 h-4 w-4" /> CV
            </Button>
          </a>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                À propos
              </button>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Projets
              </button>
              <button
                onClick={() => {
                  scrollToSection("experiences");
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Expériences
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <a
                href="/icons/Cv_AbdelmalekSamy_LettreMotivation.pdf"
                download
                className="inline-flex"
              >
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" /> CV
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <main className="container py-4 md:py-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AnimatedSection
          id="about"
          className="py-12 md:py-20 bg-background overflow-hidden relative scroll-mt-20"
          variants={fadeIn}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.h2
              variants={fadeIn}
              className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center"
            >
              À propos de moi
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <motion.div
                variants={slideIn}
                className="w-full md:w-1/2 px-4 md:px-8"
              >
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 text-justify">
                  Passionné par le développement et en constante évolution, je
                  suis un développeur junior déterminé à perfectionner mes
                  compétences. Actuellement, je me spécialise en React et HTML
                  pour le frontend, ainsi qu'en Python et PHP pour le backend.
                </p>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
                  J'ai également de l'expérience avec les bases de données
                  MongoDB et MySQL, ce qui me permet de concevoir des
                  applications complètes et optimisées.
                </p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8"
              >
                {[
                  {
                    icon: <Code className="w-8 h-8 text-blue-500" />,
                    title: "Frontend",
                    description: "HTML5, CSS3, JavaScript, React",
                  },
                  {
                    icon: <Server className="w-8 h-8 text-green-500" />,
                    title: "Backend",
                    description: "Python, PHP, Java, C#, Laravel",
                  },
                  {
                    icon: <Database className="w-8 h-8 text-purple-500" />,
                    title: "Bases de données",
                    description: "MySQL, MariaDB",
                  },
                  {
                    icon: <Settings className="w-8 h-8 text-red-500" />,
                    title: "Systèmes & Réseaux",
                    description: "Debian, Ubuntu, Windows, Hyper-V, VirtualBox, Vagrant, Apache",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-yellow-500" />,
                    title: "Outils & DevOps",
                    description: "Git, Github, Jenkins, Unity, AWS, Azure, Grafana, Prometheus",
                  },
                  {
                    icon: <Languages className="w-8 h-8 text-pink-500" />,
                    title: "Langues",
                    description: "Anglais (C1), Espagnol (A2)",
                  },                  
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={scaleUp}
                    className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {skill.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Diplômes et Certifications */}
        <AnimatedSection className="py-20 scroll-mt-20" variants={fadeIn}>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              variants={slideIn}
              className="bg-background rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold">Mes diplômes</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">BTS SIO (SLAM)</div>
                  <div className="text-sm text-muted-foreground">
                    2024 - 2026
                  </div>
                </div>
                <div>
                  <div className="font-medium">Baccalauréat Professionnel</div>
                  <div className="text-sm text-muted-foreground">
                    Système Numériques • 2022 - 2023
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="bg-background rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold">Mes certifications</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">DevOps Beginners</div>
                  <div className="text-sm text-muted-foreground">2024</div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection
          id="projects"
          className="py-12 md:py-20 scroll-mt-20"
          variants={fadeIn}
        >
          <motion.h2
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
          >
            Projets Récents
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-muted-foreground mb-8 md:mb-10 max-w-[800px] text-sm md:text-base"
          >
            Une sélection de mes travaux récents sur des applications et des
            sites web.
          </motion.p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 md:mb-8 flex flex-wrap gap-2 bg-background">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="application">Applications</TabsTrigger>
              <TabsTrigger value="web">Sites Web</TabsTrigger>
              <TabsTrigger value="bot">Bots</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6 md:space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div key={index} variants={scaleUp}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="application" className="space-y-6 md:space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {projects
                  .filter((p) => p.category === "Application")
                  .map((project, index) => (
                    <motion.div key={index} variants={scaleUp}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="bot" className="space-y-6 md:space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {projects
                  .filter((p) => p.category === "Bot")
                  .map((project, index) => (
                    <motion.div key={index} variants={scaleUp}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="web" className="space-y-6 md:space-y-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {projects
                  .filter((p) => p.category === "Site Web")
                  .map((project, index) => (
                    <motion.div key={index} variants={scaleUp}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        {/* Expériences professionnelles Section */}
        <AnimatedSection
          id="experiences"
          className="py-20 scroll-mt-20"
          variants={fadeIn}
        >
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold mb-8 text-center"
            >
              Expériences professionnelles
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? slideIn : slideInRight}
                  className="bg-muted p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full z-0 opacity-50 
                    transition-transform duration-300 group-hover:scale-110"
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-2 flex items-center">
                      {exp.company ===
                      "Mutuelle des Architectes Français | MAF" ? (
                        <Globe className="w-6 h-6 mr-2 text-primary" />
                      ) : null}
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </p>
                    <p className="text-muted-foreground mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-xl font-medium mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-primary" />
                      {exp.role}
                    </p>
                    <ul className="list-none space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-primary mr-2">•</span>
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection
          id="contact"
          className="py-20 scroll-mt-20"
          variants={fadeIn}
        >
          <div className="container mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Contactez-moi
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground mb-6 max-w-[500px]"
            >
              Intéressé par une collaboration ? N&apos;hésitez pas à me
              contacter pour des projets ou simplement pour échanger.
            </motion.p>
            <motion.div variants={staggerContainer} className="space-y-4 mt-8">
              <motion.div
                variants={slideIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:ismail.scy@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  ismail.scy@gmail.com
                </a>
              </motion.div>
              <motion.div
                variants={slideIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-3"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://www.linkedin.com/in/samy-abdelmalek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/samy-abdelmalek
                </a>
              </motion.div>
              <motion.div
                variants={slideIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-3"
              >
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/itsaam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/itsaam
                </a>
              </motion.div>
              <motion.div
                variants={slideIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-3"
              >
                <Download className="h-5 w-5 text-primary" />
                <a
                  href="/icons/Tableau de synthèse - Epreuve E4.xlsx"
                  download
                  className="hover:text-primary transition-colors"
                >
                  Télécharger le tableau synthèse
                </a>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-bold text-xl mb-4 md:mb-0"
          >
            <span className="text-primary">Samy</span> Abdelmalek
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-4 md:mt-0"
          >
            © {new Date().getFullYear()} Abdelmalek Samy. Tous droits réservés.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

// Données des projets
const projects: Project[] = [
  {
    title: "HSP - Plateforme de Services de Santé",
    description:
      "Une plateforme innovante connectant hôpitaux et professionnels de santé avec des fonctionnalités en temps réel.",
    image: "/icons/hsp.png",
    category: "Site Web",
    slug: "hsp-plateforme-sante",
    details: {
      subtitle: "Connecter les professionnels de santé pour des soins optimaux",
      features: [
        "Messagerie en temps réel",
        "Système d'actualités et d'annonces",
        "Gestion des offres d'emploi",
        "Authentification sécurisée avec 2FA",
      ],
      technologies: [
        "Laravel (Backend PHP)",
        "JetStream (Authentification)",
        "Livewire (Interactions temps réel)",
        "Tailwind CSS (Design responsive)",
      ],
      description:
        "Notre plateforme intègre un système de messagerie en temps réel optimisé et sécurisé, avec un focus particulier sur la protection des données médicales sensibles. Nous utilisons des technologies de pointe pour garantir la confidentialité et l&apos;intégrité des informations.",
    },
  },
  {
    title: "Convertisseur GIF",
    description:
      "Un outil basé sur Python pour convertir des fichiers GIF en formats PNG ou JPEG avec une interface conviviale.",
    image: "/icons/Convert.png",
    category: "Application",
    slug: "convertisseur-gif",
    details: {
      subtitle: "Conversion simple et rapide de fichiers GIF",
      features: [
        "Interface utilisateur intuitive",
        "Conversion par lots",
        "Prévisualisation des images",
        "Options de qualité personnalisables",
      ],
      technologies: [
        "Python",
        "Tkinter (Interface graphique)",
        "Pillow (Traitement d&apos;images)",
        "PyInstaller (Packaging)",
      ],
      description:
        "Cette application de bureau permet aux utilisateurs de convertir facilement des fichiers GIF en formats PNG ou JPEG. L&apos;interface intuitive offre des options de prévisualisation et de personnalisation pour obtenir exactement le résultat souhaité. L&apos;application prend en charge la conversion par lots pour traiter plusieurs fichiers simultanément.",
    },
  },
  {
    title: "Nuage Air",
    description:
      "Site web d'aéroport permettant aux utilisateurs de réserver des vols, consulter les horaires et gérer leurs réservations.",
    image: "/icons/yellow.jpg",
    category: "Site Web",
    slug: "nuage-air",
    details: {
      subtitle: "Simplifier l'expérience de voyage aérien",
      features: [
        "Réservation de vols en ligne",
        "Consultation des horaires en temps réel",
        "Gestion des réservations",
        "Informations sur les services aéroportuaires",
      ],
      technologies: [
        "PHP",
        "HTML/CSS",
        "JavaScript",
        "MySQL (Base de données)",
      ],
      description:
        "Nuage Air est un site web pour les aéroports qui permet aux voyageurs de réserver des vols, consulter les horaires en temps réel et gérer leurs réservations. Développé avec des technologies web traditionnelles, ce projet représente l'une de mes premières expériences en développement web.",
    },
  },
  {
    title: "RSS Bot pour Discord",
    description:
      "Un bot Python pour publier automatiquement les flux RSS dans des salons Discord. Idéal pour la veille technologique.",
    image: "/icons/rss_bot.png",
    category: "Bot",
    slug: "rss_bot",
    details: {
      subtitle: "Automatisez votre veille avec un bot RSS léger et rapide",
      features: [
        "Récupération de plusieurs flux RSS en parallèle",
        "Publication automatique à intervalles réguliers",
        "Nettoyage du contenu HTML via BeautifulSoup",
        "Détection intelligente des nouveaux articles",
        "Personnalisation des salons Discord de destination",
        "Logs détaillés des événements pour le suivi",
      ],
      technologies: [
        "Python 3",
        "discord.py",
        "feedparser",
        "BeautifulSoup4",
        "asyncio, logging, datetime, hashlib",
      ],
      description:
        "RSS Bot est un projet Python permettant de surveiller automatiquement plusieurs flux RSS et de publier les nouveaux articles dans des salons Discord configurés. Léger, rapide et personnalisable, il est parfait pour automatiser la veille technologique sur un serveur Discord, notamment grâce à son système de logs et sa détection intelligente d’articles déjà publiés.",
    },
  },
  {
    title: "HSPJAVAFX",
    description:
      "Version JavaFX de la Plateforme de Services de Santé, offrant une expérience utilisateur native et performante.",
    image: "/icons/hsp.png",
    category: "Application",
    slug: "hspjavafx",
    details: {
      subtitle:
        "Une expérience utilisateur native pour les professionnels de santé",
      features: [
        "Interface utilisateur native et réactive",
        "Fonctionnement hors ligne avec synchronisation",
        "Performances optimisées pour les grands volumes de données",
        "Intégration avec les systèmes hospitaliers existants",
      ],
      technologies: [
        "Java",
        "JavaFX",
        "Hibernate (ORM)",
        "MySQL (Base de données)",
      ],
      description:
        "HSPJAVAFX est une version desktop de la Plateforme de Services de Santé, développée avec JavaFX pour offrir une expérience utilisateur native et performante. Cette application permet aux professionnels de santé de travailler même en mode hors ligne avec synchronisation ultérieure, et offre des performances optimisées pour gérer de grands volumes de données médicales.",
    },
  },
];

// Données des expériences professionnelles
const experiences: Experience[] = [
  {
    company: "Mutuelle des Architectes Français | MAF",
    location: "Paris, 17ème",
    period: "2024 - Maintenant",
    role: "Alternance Technicien Informatique",
    responsibilities: [
      "Configuration et maintenance des postes sous Intune",
      "Automatisation de tâches avec Python",
      "Gestion de l'enrôlement et du support pour des appareils iPhone",
      "Maintenance des postes informatiques et assistance utilisateurs",
    ],
  },
  {
    company: "Engie",
    location: "Paris La Défense",
    period: "Mai - Juin 2022",
    role: "Stage Développeur & Sécurité",
    responsibilities: [
      "Développement de scripts d'analyse de vulnérabilités sous Linux (Bash, Python)",
      "Contribution à l'évaluation des configurations systèmes et à leur renforcement",
      "Participation à des initiatives de Pentesting et audits de sécurité applicative",
    ],
  },
  {
    company: "St Joseph La Salle",
    location: "Pantin",
    period: "Juin - Juillet 2021",
    role: "Technicien Informatique",
    responsibilities: [
      "Installation et configuration de serveurs Linux dédiés pour l'hébergement",
      "Mise en place d'environnements de test et intégration continue (Vagrant, VirtualBox)",
    ],
  },
  {
    company: "Pharmacie Bastille",
    location: "Paris 11ème",
    period: "Novembre 2019",
    role: "Stage Développeur Web",
    responsibilities: [
      "Maintenance et amélioration du site web de l'entreprise en HTML5, CSS3, JavaScript, PHP",
    ],
  },
];

// Composant Carte de Projet
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.slug ? `/projets/${project.slug}` : "#"}
      className="block"
    >
      <Card className="overflow-hidden group h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary">Voir le projet</Button>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="text-sm text-primary mb-1">{project.category}</div>
          <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
