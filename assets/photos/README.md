# Photography — drop-in folder

All site photography lives here. The build ships with tasteful placeholder
blocks (a warm `--ink-soft` panel with a centred label). To activate a real
photo, **drop a `.jpg` with the exact filename below into this folder** — no
code changes needed. If a file is absent, the placeholder stays (no broken
images).

Photos are auto-treated with a consistent film-like CSS filter:
`saturate(0.85) contrast(1.05)`.

## Filenames (referenced by `data-photo="…"` in index.html)

| Filename                | Where it appears                          | Suggested subject                     |
|-------------------------|-------------------------------------------|---------------------------------------|
| `garage-interior.jpg`   | §3 “The Idea” sketch→photo frame          | Atmospheric workshop / garage interior |

### Recommended specs
- Landscape/portrait to suit the frame (the §3 frame is 4:5). Min 1200px on the long edge.
- Warm, film-like, slightly desaturated source works best (the CSS filter adds the rest).
- Optimise before adding (TinyJPG / Squoosh). Keep each under ~300 KB for Lighthouse.

## Hero building photo (SVG)
The hero’s sketch→reality moment reveals a photo *inside* the garage line-art.
It is a placeholder `<rect>`+`<text>` in `src/svg/hero-stages.js`
(`BUILDING_SVG`). To use a real image, replace that `<rect>`/`<text>` with:

```xml
<image href="/assets/photos/hero-facade.jpg" x="286" y="250" width="628" height="106"
       preserveAspectRatio="xMidYMid slice" />
```
