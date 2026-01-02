# Stefan Lüllmann's Personal Portfolio

![Professional Portfolio Preview](https://qnr34aa1vn.ufs.sh/f/x81VdwhEWe9YufWdMOGMBAJTXcEpiqxV9sKO42Lv6SlI3wGY)

This repository contains the source code for my Professional Website, built to showcase my Projects (both Personal and Client), write Professional Case Studies for my projects and write technical deep dives on advanced topics.
Designed for speed, responsiveness, and maintainability.

**Live Website**: [https://stefan-luellmann.com](https://stefan-luellmann.com)

## Core Features

- **Project Showcase:** Highlights Personal and Client Projects with interactive cards, image galleries, tech stacks and direct links to all relevant pages.
- **Case Studies:** Detailed Case Studies written in MDX for each Project, documenting planning, design, tech choices, development, challenges, solutions and releases.
- **Technical Deep Dives:** Widespread Technical Deep Dives on different technologies, from Performance to Edge Cases in Prisma, Zod, TypeScript, React and many more.
- **High Performance:** Built with Next.js and Static Site Generation (SSG) to achieve optimal Lighthouse scores.
- **Fully Responsive:** Mobile-first design ensures a seamless experience across all devices.
- **Modern Styling:** Tailwind CSS usage for component-scoped styles combined with custom made reset additions and Tailwind classes.

## Tech Stack

This Project demonstrates proficiency in the following Technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescript.org/)
- **Styling:** [SCSS Module](https://sass-lang.com/) and [clsx](https://github.com/lukeed/clsx) for conditional classnames.
- **Content:** MDX parsed with `next-mdx-remote` and `gray-matter` for legal pages and case studies.
- **Deployment:** [Netlify](https://www.netlify.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/OneDev49/stefan-luellmann-portfolio
```

2. **Navigate to the project directory:**

```bash
cd stefan-luellmann-portfolio
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the development server:**

```bash
npm run dev
```

After the 4. Step, open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure Overview

- /public - Directory for favicons, CV files and font files
- /content - MDX content for Technical Deep Dives (ordered by Topic), Case Studies and Legal Pages
- /src - Next.js project directory
  - /app - Next.js App Router pages
  - /components - Reusable UI components
  - /config - Project and Case Study Metadata (`projects.ts`)
  - /context - React contexts
  - /lib - Utility functions (e.g., MDX parsing)

## Contact

Stefan Lüllmann - [hallo@stefan-luellmann.com](mailto:hallo@stefan-luellmann.com)

Project Link: [https://github.com/OneDev49/stefan-luellmann-portfolio](https://github.com/OneDev49/stefan-luellmann-portfolio)

## Licensing

The source code for this project is licensed under the [MIT License](LICENSE).

All other assets, including but not limited to images, logos, case studies and written content, are my personal property.
They are **not** licensed for reuse without my explicit written permission.

### Third-Party Assets

- Technology logos are trademarks of their respective owners.
- Brand logos are trademarks of their respective owners.
- Icons are used from [Font Awesome](https://fontawesome.com/license) and [SVGLogos](https://svgporn.com/) (CC0), and are subject to their respective licenses.
