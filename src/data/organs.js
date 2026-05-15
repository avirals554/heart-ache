export const organs = {
  heart: {
    name: "Heart",
    emoji: "🫀",
    color: "#E8485C",
    tagline: "The engine that never stops",
    sketchfabId: "168b474fba564f688048212e99b4159d",
  },
  brain: {
    name: "Brain",
    emoji: "🧠",
    color: "#8B7BF2",
    tagline: "100 billion neurons, one command center",
    sketchfabId: null,
  },
  kidney: {
    name: "Kidneys",
    emoji: "🫘",
    color: "#E06840",
    tagline: "Your blood's filtration plant",
    sketchfabId: null,
  },
};

export function getOrganList() {
  return Object.entries(organs).map(([slug, o]) => ({
    slug,
    name: o.name,
    emoji: o.emoji,
    color: o.color,
    tagline: o.tagline,
  }));
}
