# Dr. Maya Reynolds, PsyD — therapy practice website

Front-end internship assignment for **Grow My Therapy** (Stage 2).

> **Training exercise.** The layout is a study clone of a publicly available
> template site, rebuilt from scratch in Next.js for skills assessment.
> **Dr. Maya Reynolds is a fictional therapist** supplied in the assignment brief.
> No client branding, logos or photographs from the original site are used here,
> and this site is not published on behalf of any real practice.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 — theme tokens declared in `src/app/globals.css`
- `next/font` — Newsreader (display) + Mulish (body)

## Structure

| Path | What's in it |
|---|---|
| `src/app/globals.css` | **All colour and type tokens.** Nothing else hard-codes a hex |
| `src/content/profile.ts` | **All site copy**, traceable to the therapist profile |
| `src/components/sections.tsx` | Every page section |
| `src/app/page.tsx` | Section order |
| `public/images/` | Images — placeholders committed, replace before submitting |

Re-theming the whole site means editing one block in `globals.css`.
Rewriting the copy means editing one file.

## Running it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npx tsc --noEmit # typecheck
```

## Assignment checklist

**Part 1 — clone**
- [ ] Layout, section order and hierarchy match the original
- [ ] Responsive on desktop, tablet and mobile
- [ ] Typography matches (note: original display face is weight **300**)
- [ ] Theme colours are reusable tokens, not hard-coded — *done, see globals.css*
- [ ] Spacing and padding consistent throughout

**Part 2 — redesign**
- [ ] New palette chosen (primary / secondary / accent), replacing the original
- [ ] All elements updated to the new colours, contrast checked
- [ ] All copy rewritten from the profile — *placeholders marked `TODO` in `profile.ts`*
- [ ] Three services chosen and described
- [ ] SEO: location and specialty keywords in H1, headings and body
- [ ] All images replaced; Maya's photo and a bio added

**Part 3 — new section**
- [ ] "Our Office" section added — *scaffolded, copy still `TODO`*

**Part 4 — video**
- [ ] 5-minute Loom client demo, desktop + mobile, non-technical language

**Deliverables:** live link · public repo · video link
