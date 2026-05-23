// Single source of truth for core business details
export interface SocialLink {
  name: string;
  href: string;
}

export interface BrandPalette {
  /** Primary brand color used for icon backgrounds and OG accents */
  accent: string;
  /** Foreground text/glyph color on the brand background */
  onAccent: string;
  /** Page background for OG cards */
  bg: string;
  /** Primary text on OG cards */
  ink: string;
  /** Secondary text on OG cards */
  inkMuted: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  socials: SocialLink[];
  brand: BrandPalette;
}

export const business: BusinessDetails = {
  name: "Specimen",
  tagline: "An independent type foundry releasing one family per quarter.",
  email: "hello@specimen.palmstreetweb.design",
  phone: "(212) 555-0117",
  address: "Suite 4F, 88 Centre Street, New York, NY 10013",
  url: "https://specimen.palmstreetweb.design",
  socials: [
    { name: "Instagram", href: "https://instagram.com/specimen" },
    { name: "Are.na", href: "https://are.na/specimen" },
    { name: "GitHub", href: "https://github.com/specimen" },
  ],
  brand: {
    accent: "#E63D2F",
    onAccent: "#FFFFFF",
    bg: "#F2EFEA",
    ink: "#0E0E0E",
    inkMuted: "#595959",
  },
};
