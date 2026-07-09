import { createFileRoute } from "@tanstack/react-router";
import DossierPortfolio from "@/components/DossierPortfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Case File 2026-AI-001 — Mayank Ojha | AI/ML Developer Portfolio",
      },
      {
        name: "description",
        content:
          "The declassified case file of Mayank Ojha — AI/ML developer, full-stack engineer, freelance operative. Scroll to open the dossier.",
      },
      { property: "og:title", content: "Case File 2026-AI-001 — Mayank Ojha" },
      {
        property: "og:description",
        content:
          "A cinematic classified-dossier portfolio: projects, experience, and exhibits on record.",
      },
    ],
  }),
});

function Index() {
  return <DossierPortfolio />;
}
