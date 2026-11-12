export type Spread = {
  id: string;
  tab: string;
  title: string;
};

export const SPREADS: Spread[] = [
  { id: "cover", tab: "COVER", title: "Portfolio" },
  { id: "profile", tab: "PROFILE", title: "Subject Profile" },
  { id: "business", tab: "BUSINESS", title: "Business Details" },
  { id: "services", tab: "SERVICES", title: "Services" },
  { id: "education", tab: "EDUCATION", title: "Academic Record" },
  { id: "experience", tab: "OPERATIONS", title: "Field Operations" },
  { id: "projects", tab: "EXHIBITS", title: "Case Exhibits" },
  { id: "skills", tab: "SKILLSET", title: "Skillset Dossier" },
  { id: "leadership", tab: "COMMEND.", title: "Commendations" },
  { id: "contact", tab: "CONTACT", title: "Close the Case" },
];
