export const organs = {
  heart: {
    name: "Heart",
    emoji: "🫀",
    color: "#E8485C",
    tagline: "The engine that never stops",
    sketchfabId: "168b474fba564f688048212e99b4159d",
    overview:
      "A muscular organ roughly the size of your fist, pumping about 2,000 gallons of blood every day. It beats around 100,000 times a day — over 2.5 billion times in a lifetime.",
    parts: [
      {
        name: "Left Ventricle",
        description:
          "The strongest chamber. Pumps oxygenated blood out through the aorta to your entire body.",
        diseases: [
          {
            name: "Left Ventricular Hypertrophy",
            severity: "moderate",
            description: "The muscle wall thickens from high blood pressure.",
          },
          {
            name: "Dilated Cardiomyopathy",
            severity: "severe",
            description:
              "The ventricle stretches and weakens, can't pump effectively.",
          },
        ],
      },
      {
        name: "Mitral Valve",
        description:
          "Gatekeeper between left atrium and ventricle. Two flaps that snap shut to prevent backflow.",
        diseases: [
          {
            name: "Mitral Valve Prolapse",
            severity: "mild",
            description:
              "Leaflets bulge back into the atrium. Usually harmless.",
          },
          {
            name: "Mitral Regurgitation",
            severity: "moderate",
            description: "Valve doesn't close properly, blood leaks backward.",
          },
        ],
      },
    ],
    heart: {
      // ... everything you already have, plus:
      howItWorks: [
        {
          title: "The Cardiac Cycle",
          text: "Every heartbeat has two phases. Diastole — the heart relaxes and fills with blood. Systole — it contracts and pushes blood out. This happens in perfect sequence: atria squeeze first, then ventricles. The whole cycle takes less than a second.",
        },
        {
          title: "The Electrical System",
          text: "Your heart has its own electrical wiring. The SA node fires an impulse, it spreads across the atria making them contract, hits the AV node which delays it just long enough for blood to flow into the ventricles, then shoots down the Bundle of His and Purkinje fibers making the ventricles contract. When this system misfires, you get arrhythmias.",
        },
        {
          title: "The Coronary Circulation",
          text: "The heart can't use the blood inside it. It needs its own supply delivered by the coronary arteries on its surface. These arteries fill during diastole — the only organ that gets its blood supply while resting, not while working.",
        },
      ],
      facts: [
        "Your heart pumps about 2,000 gallons of blood every day.",
        "A woman's heart beats slightly faster than a man's on average.",
        "The heart can continue beating even when disconnected from the body — it has its own electrical system.",
        "Laughing is good for your heart. It increases blood flow by 20%.",
        "The heart beats about 100,000 times per day, 35 million times a year.",
        "A newborn's heart beats about twice as fast as an adult's.",
      ],
      warningSigns: [
        {
          sign: "Chest pain or pressure",
          description:
            "Especially during exertion. Can radiate to arm, jaw, or back.",
        },
        {
          sign: "Shortness of breath",
          description: "During normal activities or while lying flat.",
        },
        {
          sign: "Irregular heartbeat",
          description: "Fluttering, racing, or skipping beats.",
        },
        {
          sign: "Swollen legs or ankles",
          description:
            "Fluid retention from the heart not pumping effectively.",
        },
        {
          sign: "Persistent fatigue",
          description: "Unusual tiredness even with adequate sleep.",
        },
      ],
    },
  },
  brain: {
    name: "Brain",
    emoji: "🧠",
    color: "#8B7BF2",
    tagline: "100 billion neurons, one command center",
    sketchfabId: "3022543bb7a54b88b892ff4907e50929",
    overview:
      "The most complex object in the known universe. 100 billion neurons, 100 trillion synapses. Every thought, memory, and movement starts here.",
    parts: [
      {
        name: "Frontal Lobe",
        description:
          "The CEO. Decision-making, personality, planning, speech. Last to fully develop — not complete until mid-20s.",
        diseases: [
          {
            name: "Frontotemporal Dementia",
            severity: "severe",
            description:
              "Neurons degenerate. Personality changes dramatically.",
          },
          {
            name: "Broca's Aphasia",
            severity: "moderate",
            description: "Knows what to say but can't form the words.",
          },
        ],
      },
      {
        name: "Temporal Lobe",
        description:
          "Processes hearing, language, memory. The hippocampus sits deep within.",
        diseases: [
          {
            name: "Temporal Lobe Epilepsy",
            severity: "moderate",
            description:
              "Seizures causing strange sensations, deja vu, brief loss of awareness.",
          },
        ],
      },
      {
        name: "Cerebellum",
        description:
          "Coordinates movement, balance, motor learning. More neurons than the rest of the brain combined.",
        diseases: [
          {
            name: "Cerebellar Ataxia",
            severity: "moderate",
            description:
              "Loss of coordination and balance. Unsteady walking, slurred speech.",
          },
        ],
      },
      {
        name: "Brain Stem",
        description:
          "Controls breathing, heart rate, blood pressure, sleep — all the stuff you never think about.",
        diseases: [
          {
            name: "Brain Stem Stroke",
            severity: "severe",
            description:
              "Can affect all limbs, speech, swallowing, consciousness simultaneously.",
          },
        ],
      },
    ],
  },

  kidney: {
    name: "Kidneys",
    emoji: "🫘",
    color: "#E06840",
    tagline: "Your blood's filtration plant",
    sketchfabId: "3aef2741ea754fb486451292b87e159a",
    overview:
      "Two bean-shaped organs filtering 50 gallons of blood daily. They remove waste, regulate blood pressure, balance electrolytes, and produce hormones for red blood cell production.",
    parts: [
      {
        name: "Nephron",
        description:
          "The functional unit. Each kidney has 1 million. A tiny filtering machine with a glomerulus and tubule.",
        diseases: [
          {
            name: "Chronic Kidney Disease",
            severity: "severe",
            description:
              "Nephrons destroyed over years by diabetes or hypertension. No symptoms until 70-80% gone.",
          },
          {
            name: "Nephrotic Syndrome",
            severity: "moderate",
            description:
              "Glomeruli become leaky, dumping protein into urine. Severe swelling around eyes and ankles.",
          },
        ],
      },
      {
        name: "Glomerulus",
        description:
          "Tiny ball of capillaries. Blood forced through under pressure, filtering waste while keeping blood cells.",
        diseases: [
          {
            name: "Glomerulonephritis",
            severity: "moderate",
            description:
              "Inflammation from immune attack. Blood and protein in urine.",
          },
          {
            name: "Diabetic Nephropathy",
            severity: "severe",
            description:
              "High blood sugar damages glomeruli. Leading cause of kidney failure worldwide.",
          },
        ],
      },
      {
        name: "Renal Cortex",
        description:
          "Outer layer where most filtration occurs. Contains glomeruli and convoluted tubules.",
        diseases: [
          {
            name: "Renal Cell Carcinoma",
            severity: "severe",
            description:
              "Most common kidney cancer. Often found incidentally. Can grow large before symptoms.",
          },
        ],
      },
      {
        name: "Renal Pelvis",
        description:
          "Funnel where urine collects after processing. Channels urine into the ureter toward the bladder.",
        diseases: [
          {
            name: "Kidney Stones",
            severity: "moderate",
            description:
              "Minerals crystallize into stones. Some of the most intense pain a human can experience.",
          },
          {
            name: "Hydronephrosis",
            severity: "moderate",
            description:
              "Renal pelvis swells from urine backup. Pressure damages tissue if not relieved.",
          },
        ],
      },
      {
        name: "Renal Artery",
        description:
          "Delivers blood from the aorta. Each kidney gets 20% of cardiac output — enormous for their size.",
        diseases: [
          {
            name: "Renal Artery Stenosis",
            severity: "moderate",
            description:
              "Artery narrows, kidney thinks blood pressure is low, releases hormones that raise it.",
          },
        ],
      },
    ],
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
export function getOrgan(slug) {
  return organs[slug] || null;
}
export function getAllSlugs() {
  return Object.keys(organs);
}
