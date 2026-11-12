import { createFileRoute } from "@tanstack/react-router";
import DossierPortfolio from "@/components/DossierPortfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Mayank.DEV — AI-Powered Products & Growth Systems for Local Businesses, Indore",
      },
      {
        name: "description",
        content:
          "Mayank.DEV — AI-Powered Products & Growth Systems for Local Businesses, Indore",
      },
      { property: "og:title", content: "Mayank.DEV — AI-Powered Products & Growth Systems for Local Businesses, Indore" },
      {
        property: "og:description",
        content:
          "Mayank.DEV — AI-Powered Products & Growth Systems for Local Businesses, Indore",
      },
    ],
  }),
});

function Index() {
  return <DossierPortfolio />;
}
