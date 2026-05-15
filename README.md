# Heart Break

a sick heart. literally.

## what is this

a 3D beating heart in your browser that shows you where the problems are.

paste a medical report → an AI reads it → the heart rotates to the problem → you see it.

that's it. that's the whole thing.

## but why

because reading a wall of medical text sucks. "mild insufficiency of the mitral valve" means nothing to most people. but if a 3D heart spins around and highlights the exact spot that's broken? now you get it.

## how does it actually work

ok so think about it from first principles.

**question 1: every anomaly has a location right?**

yes. no matter what test is done on any human heart, the problem exists somewhere physically. which means it has a coordinate.

**question 2: if it has a coordinate on the test, can we find it on our 3D model?**

yes. the test has its own coordinate system. our 3D heart has its own coordinate system. we just need a transformation between them. linear algebra. matrix multiplication. map one space onto the other.

**question 3: so what do we actually need to build?**

three things:

1. **a heart dictionary** — click around the 3D heart, record coordinates, label them. "left ventricle is from here to here." now we have a map.

2. **a tiny AI** — reads the medical report, extracts the findings, matches them to regions in the dictionary. outputs a simple JSON with coordinates.

3. **the viewer** — takes those coordinates, rotates the 3D heart to face the problem, highlights it. one HTML file. no frameworks.

each piece is dumb simple on its own. the magic is how they connect — through coordinates.

## the stack

- **Sketchfab Viewer API** — loads and controls the 3D heart model in the browser
- **Astro** — static site generator for the medical atlas pages
- **a small LLM** (ollama / llama 3 8B) — reads reports, outputs coordinates. runs locally, costs nothing
- **one JSON file** — the bridge between the AI and the viewer

## what i learned building this

- scripts run top to bottom. put them after the elements they reference.
- `file://` URLs can't talk to iframes. run a local server.
- brave browser blocks cross-origin postMessage. develop in chrome.
- animated 3D models need `{ pick: "slow" }` for click detection.
- an API is just a waiter between two programs.
- good software is simple. one HTML file that just works.
- hardcode first, generalize later. ship it then make it smart.
- AI multiplies what you bring. bring understanding, not laziness.

## running it

```bash
npm install
npm run dev
```

open `localhost:4321`

## what's next

- map every region of the heart with coordinates
- wire up the LLM to read echo reports
- extend to brain, kidneys, and other organs
- the CT scan coordinate transformation thing (image registration)
- make robotic surgery easier maybe?? idk man we'll see

## the blog

i'm documenting the whole journey here: [medium.com/@avirals554/heart-break](https://medium.com/@avirals554/heart-break-88141bc608f1)

---
