import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Données du projet
const project = {
  title: "HSP - Plateforme de Services de Santé",
  description:
    "Une plateforme innovante connectant hôpitaux et professionnels de santé avec des fonctionnalités en temps réel.",
  image: "/icons/blue.png",
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
      "Notre plateforme intègre un système de messagerie en temps réel optimisé et sécurisé, avec un focus particulier sur la protection des données médicales sensibles. Nous utilisons des technologies de pointe pour garantir la confidentialité et l'intégrité des informations.",
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
              className="text-sm font-medium hover:text-primary transition-colors"
              scroll={false}
            >
              À propos
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              scroll={false}
            >
              Projets
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              scroll={false}
            >
              Compétences
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              scroll={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            scroll={false}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.details.subtitle}
            </p>

            <div className="rounded-lg overflow-hidden mb-8">
              <Image
                src={project.image || "/placeholder.svg"}
                width={1200}
                height={800}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-lg mb-8">{project.details.description}</p>
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/hdidogs/hsp"
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

          <div>
            <div className="rounded-lg border p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Fonctionnalités Clés
              </h3>
              <ul className="space-y-2">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">
                Technologies Utilisées
              </h3>
              <ul className="space-y-2">
                {project.details.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-10 mt-20">
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
