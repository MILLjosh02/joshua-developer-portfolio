# Joshua Millonado — Developer Portfolio

A responsive personal portfolio built with **React, Vite, Tailwind CSS 4, Framer Motion, and Lucide React**.

The site presents a combination of IT support experience, software development projects, computer engineering coursework, and an interest in gameplay programming.

## Features

- Responsive dark, gaming-inspired design
- Mobile navigation
- Hero / introduction section
- About and technical skills sections
- Featured project cards with repository and demo links
- Professional experience and education
- Contact links
- Subtle entrance animations
- Vite production build

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- VS Code (recommended)

Check your versions:

```bash
node --version
npm --version
```

## Run locally

1. Extract the ZIP file.
2. Open the extracted `joshua-developer-portfolio` folder in VS Code.
3. Open the integrated terminal.
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local URL printed in the terminal (usually `http://localhost:5173`).

On Windows PowerShell, if script execution blocks `npm`, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` directory.

## Project structure

```text
joshua-developer-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Personalize before publishing

1. Replace `your.email@example.com` in `src/components/Contact.jsx` with your preferred contact email.
2. Replace placeholder GitHub URLs in `src/data.js` for EchoChat and Unreal Engine projects.
3. Update project descriptions, technologies, and statuses as the work evolves.
4. Review skills and experience bullets to ensure every statement accurately reflects your experience.
5. Add your own project screenshots to `public/` or `src/assets/` and update the project cards.

The CSUN entry is deliberately described as **coursework** and does not claim a completed degree.

## Deploy with Vercel

1. Create a GitHub repository for this project.
2. Push the extracted project to GitHub.
3. Sign in to Vercel and import the repository.
4. Use these build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

For GitHub Pages, additional Vite base-path configuration may be required depending on the repository URL. Vercel is the simpler deployment option for this project.

## Tech stack

- React
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React

## License

Personal portfolio starter. Adapt the code for your own portfolio.
