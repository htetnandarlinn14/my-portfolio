# Htet Nandar Linn — Portfolio Guide

A personal developer portfolio built with **React + Vite + Tailwind CSS**
(no backend, no database). This guide explains where every piece of content
lives so you can update it easily.

> The scaffold's `README.md` still contains the default Vite text.
> **This file is the project-specific guide.**

## 1. Run the project

```bash
npm install      # first time only
npm run dev      # dev server -> http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # check the code for problems
```

## 2. Where everything lives

All editable content is in **`src/data/portfolioData.js`**. You normally
never need to touch a component to change text.

| Export        | What it controls                                               |
| ------------- | -------------------------------------------------------------- |
| `profile`     | Name, title, location, email, phone, GitHub, hero intro, photo |
| `navLinks`    | Navbar + footer navigation links                               |
| `about`       | Paragraphs in the About section                                |
| `skills`      | Skill categories and badges (edit the arrays freely)           |
| `projects`    | The two project cards (title, description, tech, links)        |
| `education`   | University, degree, graduation period                          |
| `experience`  | Optional section — stays hidden while the list is empty `[]`   |
| `contact`     | Contact heading + intro line                                   |
| `socialLinks` | Email, phone, GitHub cards in the Contact section              |

## 3. Change the profile photo

1. Put the new photo in the `public/` folder, e.g. `public/images/profile.jpg`.
2. In `portfolioData.js`, set:

   ```js
   imageSrc: "/images/profile.jpg",
   imageAlt: "Portrait of Htet Nandar Linn",
   ```

A **square** image (e.g. 800×800) works best — the Hero crops it to a
rounded square. A real photo is already in place at
`public/images/profile.jpg`.

## 4. Change the project screenshots

Both project cards currently use
`public/placeholders/project-placeholder.svg`. Replace it either by:

- overwriting that file, **or**
- adding real screenshots and pointing each project at them:

  ```js
  {
    id: 1,
    title: "Media Library Management System",
    imageSrc: "/images/media-library.png",   // <- your screenshot
    ...
  }
  ```

A **16:9** image works best because the card frame is `aspect-[16/9]`.

## 5. Add project links

Each project has `demoUrl` and `repoUrl`. They are `null` on purpose —
no repository URLs are invented.

- Set `repoUrl` to a real GitHub repository URL → a **Source Code** button appears.
- Set `demoUrl` to a live demo URL → a **View Project** button appears.
- While both are `null`, the card links to her GitHub **profile** instead and
  shows an honest note that a direct link will be added later.

The GitHub account (`https://github.com/htetnandarlinn14`) currently has **no
public repositories**, so no repo links are shown yet.

## 6. Update skills

`skills.categories` is just an array of `{ title, skills: [...] }`. Add, remove,
or reorder entries — the Skills section adapts automatically. Skills are
presented as a learning toolkit (not expert-level claims).

## 7. Change the colors

Design tokens live in `tailwind.config.js` under `theme.extend.colors`:
`mint`, `deep-mint`, `charcoal`, `secondary-dark`, `off-white`, `muted-gray`,
`soft-mint`. Gradients, glows, and animations are defined in the same file.
Shared CSS classes (`.btn-primary`, `.card`, `.badge`, …) are in `src/index.css`.

## 8. Project structure

```
src/
├─ components/
│  ├─ Button.jsx          Primary / outline buttons (link or button)
│  ├─ Section.jsx         Shared spacing + width wrapper
│  ├─ SectionHeading.jsx  Eyebrow + title + lead block
│  ├─ Navbar.jsx          Sticky nav + mobile toggle
│  ├─ MobileNav.jsx       Small-screen menu panel
│  ├─ ProjectCard.jsx     One project card
│  ├─ SkillBadge.jsx      One skill badge
│  ├─ Footer.jsx          Footer
│  └─ sections/           Hero, AboutMe, Skills, Projects, Education,
│                         Experience (optional), Contact
├─ data/portfolioData.js  All editable content
├─ App.jsx                Page composition
├─ main.jsx               React entry point
└─ index.css              Tailwind layers + shared classes
```

## 9. Notes

- No backend, no database, no form that pretends to send email.
- Contact uses a real `mailto:` link for email and a `tel:` link for phone.
- Icons come from `lucide-react`. Nothing else is added beyond React/Vite/Tailwind.
- The unused Vite/React scaffold files have been removed, so every file in the
  project is actually part of the site.
