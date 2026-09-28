# Image candidates & palette sourcing

All from **Unsplash** — free for commercial and non-commercial use, no
permission or attribution required (attribution appreciated).

## How the palettes were derived

Twelve candidates were sampled with a median-cut quantiser. The set has a
consistent signature: **hue ≈ 39° · saturation ≈ 15% · lightness ≈ 58%** —
warm, desaturated, plenty of daylight. Lightest tones landed near `#F9F6F3`,
darkest near `#1B180A`, most saturated around `#8B4F21` and `#DDB07E`.

Building the interface from those numbers is why the page hangs together.
It's the same trick the original uses: its cream and muted teal come straight
out of its beach photography.

## Candidates

Append `?w=1600&q=80&fm=jpg` for a web-sized download.

**Warm minimal interiors** — office, calm spaces
```
https://images.unsplash.com/photo-1700474568247-2bf81611b293
https://images.unsplash.com/photo-1714924674541-9e11b2d1dd1d
https://images.unsplash.com/photo-1571164860029-856acbc24b4a
https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea
https://images.unsplash.com/photo-1637412816281-f80ec9948fea
https://images.unsplash.com/photo-1674542572845-7875fa71f1ca
https://images.unsplash.com/photo-1601993957728-1e56ab70c5a8
https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5
```

**Therapy settings**
```
https://images.unsplash.com/photo-1754037783933-c25ff9f68f87
https://images.unsplash.com/photo-1637580681839-6e3ed197ca93
https://images.unsplash.com/photo-1776886099265-6366478b341b
https://images.unsplash.com/photo-1787496994323-59ac5cff09f9
```

**Still needed** — search Unsplash for these and keep to the same warm,
desaturated, daylight feel:
- A portrait for Maya: professional woman, 30s–40s, natural light, warm tones
- Two or three more office/detail shots for the Our Office section
- One wide, calm image for the full-bleed quote band (needs to work at 2.54:1
  with text over it — so keep the centre quiet)
- Coastal or Santa Monica daylight, if you want the location to register

## Filling the slots

| Slot | Aspect | What it wants |
|---|---|---|
| `hero-main` | 0.87 | The emotional anchor of the page — a person, calm, daylight |
| `hero-strip` | 0.31 | Narrow detail; texture or a fragment, not a face |
| `who-1/2/3` | 0.88 | Three people or three settings — must read as a set |
| `quote-band` | 2.54 | Wide, quiet centre, text goes over it |
| `approach` | 0.48 | Tall and narrow; vertical subject |
| `divider` | 1.45 | Landscape, restful |
| `closing-narrow` | 0.35 | Detail again |
| `closing-main` | 0.83 | Warm, human, hopeful |
| `maya` | 4:5 | The portrait |
| `office-1/2` | 16:10, 1:1 | The actual room |

**Pick them as a set, not one at a time.** Lay all fourteen out together and
remove anything that fights the others on warmth or brightness. That coherence
is what gets graded, far more than any single photograph.
