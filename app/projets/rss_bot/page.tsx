import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Données du projet
const project = {
  title: "RSS Bot pour Discord",
  description:
    "Un bot Python pour publier automatiquement les flux RSS dans des salons Discord. Idéal pour la veille technologique.",
  image: "/icons/rss_bot.png",
  category: "Bot",
  slug: "rss-bot-discord",
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
      "asyncio",
      "logging",
      "datetime",
      "hashlib",
    ],
    description:
      "RSS Bot est un projet Python permettant de surveiller automatiquement plusieurs flux RSS et de publier les nouveaux articles dans des salons Discord configurés. Léger, rapide et personnalisable, il est parfait pour automatiser la veille technologique sur un serveur Discord, notamment grâce à son système de logs et sa détection intelligente d’articles déjà publiés.",
  },
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="text-primary">A</span>S
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary"
            >
              À propos
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-primary"
            >
              Projets
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Compétences
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-6 md:py-10">
        <div className="mb-6 md:mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            scroll={false}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="md:col-span-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6">
              {project.details.subtitle}
            </p>

            <div className="rounded-lg overflow-hidden mb-6 md:mb-8">
              <Image
                src={project.image || "/placeholder.svg"}
                width={1200}
                height={800}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-base md:text-lg mb-6 md:mb-8">
                {project.details.description}
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <a
                href="https://github.com/itsaam/rss_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="flex items-center">
                  Explorez le projet <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="rounded-lg border p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Fonctionnalités Clés
              </h3>
              <ul className="space-y-2">
                {project.details.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm md:text-base"
                  >
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Technologies Utilisées
              </h3>
              <ul className="space-y-2">
                {project.details.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm md:text-base"
                  >
                    <span className="mr-2">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-10 mt-12 md:mt-20">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-xl mb-4 md:mb-0">
            <span className="text-primary">A</span>S
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} Abdelmalek Samy. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
