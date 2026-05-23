import { business } from "./business";

export interface NavLink {
  name: string;
  href: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface Typeface {
  slug: string;
  number: string;
  name: string;
  classification: string;
  designer: string;
  year: string;
  description: string;
  weights: string[];
  styles: number;
  releaseQuarter: string;
  sample: string;
  glyph: string;
  features: string[];
  pricing: { license: string; price: string }[];
}

export interface SiteContent {
  nav: { links: NavLink[]; cta: NavLink };
  hero: {
    issue: string;
    headline: string;
    subhead: string;
    sampleLetter: string;
    metaRows: { label: string; value: string }[];
  };
  about: {
    label: string;
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  catalog: {
    label: string;
    heading: string;
    items: Typeface[];
  };
  process: {
    label: string;
    heading: string;
    steps: { num: string; title: string; body: string }[];
  };
  testimonial: {
    label: string;
    quote: string;
    attribution: string;
    role: string;
  };
  inUse: {
    label: string;
    heading: string;
    images: ImageRef[];
  };
  faq: {
    label: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  newsletter: {
    label: string;
    heading: string;
    body: string;
  };
  footer: { copyright: string; links: NavLink[] };
  metadata: { title: string; description: string; ogImage: string };
}

export const content: SiteContent = {
  nav: {
    links: [
      { name: "Foundry", href: "#about" },
      { name: "Catalogue", href: "#catalog" },
      { name: "Process", href: "#process" },
      { name: "In Use", href: "#in-use" },
      { name: "Index", href: "#faq" },
    ],
    cta: { name: "Subscribe", href: "#newsletter" },
  },

  hero: {
    issue: "Issue No. 14 — Q4 / 2026",
    headline: "Type that earns its space.",
    subhead:
      "Specimen is a two-person foundry in lower Manhattan releasing one carefully drawn family every quarter. We make type the way a printer used to make type — slowly, by hand, and with a strong opinion about counter shapes.",
    sampleLetter: "Aa",
    metaRows: [
      { label: "Foundry", value: "Specimen, est. 2018" },
      { label: "Released", value: "14 families · 168 styles" },
      { label: "Indexed in", value: "Type East · Type Notes · Klim Library" },
      { label: "Trial licence", value: "Free for personal projects" },
    ],
  },

  about: {
    label: "01 / Foundry",
    title: "We draw type that does not exist yet.",
    body: [
      "Specimen was founded by Roan Marsh and Lior Tavi in 2018, in a single-room studio above a fish market. We have not moved. The fish market is gone. The room remains.",
      "We do not licence revivals. We do not chase trends. We draw one family per quarter — never more — and we sit with it for at least nine months before it leaves the studio.",
      "Every retail family is companioned by a free reading weight, because text type is a public service and reading should not be paywalled.",
    ],
    stats: [
      { value: "14", label: "Families released" },
      { value: "168", label: "Styles drawn" },
      { value: "9mo", label: "Average build time" },
      { value: "Q4", label: "Next release · 2026" },
    ],
  },

  catalog: {
    label: "02 / Catalogue",
    heading: "Six families. Each one a long conversation about a single problem.",
    items: [
      {
        slug: "halyard",
        number: "TF-014",
        name: "Halyard",
        classification: "Grotesque · 14 styles",
        designer: "Roan Marsh",
        year: "2026",
        description:
          "A nautical grotesque drawn for newsroom front pages. Hairline serifs on the I, single-storey g, an undeniable feeling of being printed at four in the morning.",
        weights: ["Thin", "Light", "Regular", "Medium", "Bold", "Black", "+ Italics"],
        styles: 14,
        releaseQuarter: "Q4 / 2026",
        sample: "Halyard",
        glyph: "H",
        features: ["Standard ligatures", "Alternate g, a, R", "Tabular figures", "12 languages"],
        pricing: [
          { license: "Desktop · per style", price: "$45" },
          { license: "Family · 14 styles", price: "$420" },
          { license: "Web + Desktop", price: "$680" },
        ],
      },
      {
        slug: "marston",
        number: "TF-013",
        name: "Marston",
        classification: "Transitional Serif · 10 styles",
        designer: "Lior Tavi",
        year: "2026",
        description:
          "A working serif for long-form essays, drawn in the spirit of Caslon but ground down to fewer ornaments and a sturdier bracket. Reads cleanly at 11pt on rough paper.",
        weights: ["Light", "Regular", "Medium", "Bold", "Black", "+ Italics"],
        styles: 10,
        releaseQuarter: "Q3 / 2026",
        sample: "Marston",
        glyph: "M",
        features: ["Old-style figures", "Small caps", "Discretionary ligatures", "26 languages"],
        pricing: [
          { license: "Desktop · per style", price: "$50" },
          { license: "Family · 10 styles", price: "$360" },
          { license: "Web + Desktop", price: "$580" },
        ],
      },
      {
        slug: "shed",
        number: "TF-012",
        name: "Shed Mono",
        classification: "Monospaced · 6 styles",
        designer: "Roan Marsh",
        year: "2026",
        description:
          "A code face that respects whitespace. Drawn for terminals, error messages, and any moment a typeface needs to step quietly out of the reader's way.",
        weights: ["Regular", "Medium", "Bold", "+ Italics"],
        styles: 6,
        releaseQuarter: "Q2 / 2026",
        sample: "Shed Mono",
        glyph: "{",
        features: ["Coding ligatures", "Powerline glyphs", "Zero with slash", "ASCII art tested"],
        pricing: [
          { license: "Desktop · per style", price: "$35" },
          { license: "Family · 6 styles", price: "$180" },
          { license: "Web + Desktop · Family", price: "$320" },
        ],
      },
      {
        slug: "valois",
        number: "TF-011",
        name: "Valois Display",
        classification: "Display Serif · 8 styles",
        designer: "Lior Tavi",
        year: "2026",
        description:
          "A high-contrast display face for editorial pull quotes and gallery walls. Pulled from a centuries-old hand-painted shop sign in the 4th arrondissement.",
        weights: ["Light", "Regular", "Bold", "Black", "+ Italics"],
        styles: 8,
        releaseQuarter: "Q1 / 2026",
        sample: "Valois",
        glyph: "V",
        features: ["Swash caps", "Ornaments", "Stylistic alternates ×3", "8 languages"],
        pricing: [
          { license: "Desktop · per style", price: "$60" },
          { license: "Family · 8 styles", price: "$420" },
          { license: "Web + Desktop", price: "$700" },
        ],
      },
      {
        slug: "platen",
        number: "TF-010",
        name: "Platen",
        classification: "Slab Serif · 8 styles",
        designer: "Roan Marsh",
        year: "2025",
        description:
          "A working slab serif with a faint mechanical wobble — meant to look like it was cast and then printed on a slightly-tired letterpress. Beloved by book designers.",
        weights: ["Light", "Regular", "Medium", "Bold", "+ Italics"],
        styles: 8,
        releaseQuarter: "Q4 / 2025",
        sample: "Platen",
        glyph: "P",
        features: ["Texture variants ×2", "Ink-trap fork", "True italics", "18 languages"],
        pricing: [
          { license: "Desktop · per style", price: "$50" },
          { license: "Family · 8 styles", price: "$340" },
          { license: "Web + Desktop", price: "$560" },
        ],
      },
      {
        slug: "berm",
        number: "TF-009",
        name: "Berm",
        classification: "Geometric Sans · 12 styles",
        designer: "Lior Tavi",
        year: "2025",
        description:
          "A geometric sans with rounded terminals — drawn for branding work that wants to feel modern without feeling sterile. Slightly heavier than it should be.",
        weights: ["Thin", "Light", "Regular", "Medium", "Bold", "Black", "+ Italics"],
        styles: 12,
        releaseQuarter: "Q3 / 2025",
        sample: "Berm",
        glyph: "B",
        features: ["Circular tabular figures", "True italics", "Variable axis", "32 languages"],
        pricing: [
          { license: "Desktop · per style", price: "$45" },
          { license: "Family · 12 styles", price: "$420" },
          { license: "Web + Desktop", price: "$640" },
        ],
      },
    ],
  },

  process: {
    label: "03 / Process",
    heading: "How a typeface gets made here.",
    steps: [
      {
        num: "01",
        title: "Hand sketch",
        body: "The first three weeks are paper. We draw the H, n, and o by hand, photograph them, and pin them to a wall to argue about for a while.",
      },
      {
        num: "02",
        title: "Glyph build",
        body: "Once the cap-height and x-height feel resolved, we draw the rest of the alphabet in Glyphs over six to eight weeks. Diacritics are last.",
      },
      {
        num: "03",
        title: "Mastering",
        body: "Spacing and kerning take three weeks per weight. Then we generate the variable font and test it across thirteen languages.",
      },
      {
        num: "04",
        title: "Specimen book",
        body: "Every family ships with a 32-page letterpressed specimen book, printed in Buffalo by Hatch. The book is what the family is, in print form.",
      },
    ],
  },

  testimonial: {
    label: "04 / Notes from the field",
    quote:
      "Specimen feels like a foundry from twenty years ago, except all the tooling actually works. The variable font for Halyard is the cleanest I have seen this year.",
    attribution: "Niko Rinaldi",
    role: "Design director, MIT Technology Review",
  },

  inUse: {
    label: "05 / In use",
    heading: "Selected work from licensees, 2025–26.",
    images: [
      {
        src: "/images/use-01.jpg",
        alt: "An open hardback book set in Marston, with a pressed leaf resting beside a chapter heading.",
      },
      {
        src: "/images/use-02.jpg",
        alt: "A designer's hand sketching a letterform with an orange pen in a grid notebook.",
      },
      {
        src: "/images/use-03.jpg",
        alt: "A sharp pencil resting on architect's blueprint paper, sketching out type proportions.",
      },
      {
        src: "/images/use-04.jpg",
        alt: "A page of dense text set in Marston, with a pair of black glasses laid across the column.",
      },
      {
        src: "/images/use-05.jpg",
        alt: "Shed Mono displayed in a code editor at high contrast, with syntax-highlighted PHP.",
      },
      {
        src: "/images/use-06.jpg",
        alt: "A close-up of a hand drawing fine detail in a notebook with a blue technical pen.",
      },
    ],
  },

  faq: {
    label: "06 / Index of questions",
    heading: "Practical answers, no flourishes.",
    items: [
      {
        q: "How do trial fonts work?",
        a: "Trial OTFs are free for any personal, in-house, or unbilled work — for sketching, comps, dev environments, school. Once the work is invoiced, the project needs a paid licence.",
      },
      {
        q: "What does 'one family per quarter' actually mean?",
        a: "We release exactly four new families a year, on the first Tuesday of January, April, July, and October. Specimen subscribers see them ten days early.",
      },
      {
        q: "Do you do custom commissions?",
        a: "Yes, but slowly. We accept two commissions per year. Lead time is typically nine months. Pricing starts at $48,000 for a single family.",
      },
      {
        q: "Is there a student discount?",
        a: "Free. Email us from your .edu address with a one-paragraph note about what you're working on and we'll send a non-commercial student licence.",
      },
      {
        q: "What about variable fonts?",
        a: "Every family released after 2024 ships with a variable axis on weight, and most ship with a width axis. The Glyphs source is available to licensees on request.",
      },
      {
        q: "Why so few foundry styles?",
        a: "Because we believe in finishing things. A foundry that ships nine families in nine months can't possibly have lived with them long enough to know if they work. We can.",
      },
    ],
  },

  newsletter: {
    label: "07 / Specimen Bulletin",
    heading: "A quarterly letter, sent the morning a family ships.",
    body: "Two pages, no images, no tracking. Just the new family, a note on how it was drawn, and a download link to the trial OTF.",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} ${business.name} Foundry. All glyphs drawn by hand in New York.`,
    links: [
      { name: "Licensing", href: "#" },
      { name: "EULA", href: "#" },
      { name: "Press kit", href: "#" },
    ],
  },

  metadata: {
    title: `${business.name} — Independent type foundry, New York`,
    description:
      "Specimen is a two-person type foundry in Manhattan releasing one family every quarter. Trial fonts free, student licences free, variable axes shipped.",
    ogImage: "/opengraph-image",
  },
};
