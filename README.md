# This project is create and generate vCard to QR Code

## Features
   - Create vCard with individual input fields
   - Generate QR Code from vCard
   - Download QR Code as PNG
   - Import excel file and generate QR Code from excel file with list of vCard

## Tech Stack
   - React
   - TypeScript
   - Tailwind CSS
   - Vite

## How to run project
   ```bash
   # install dependencies
   npm install
   # serve with hot reload at (http://localhost:5173/business-card/CreateVCardWithPhoto.htm)
   npm run dev

   # build for production with minification
   npm run build
   
   # After build, U can open file (dist/index.html) and change (dist/index.html) to (dist/business-card/CreateVCardWithPhoto.htm) 
   # and open file (dist/business-card/CreateVCardWithPhoto.htm)  and need to modify 'CreateVCardWithPhoto.htm' to ' <link rel="icon" type="image/svg+xml" href="/business-card/assets/logo.svg" /> '
   # and open file (dist/business-card/CreateVCardWithPhoto.htm)  and need to modify 'CreateVCardWithPhoto.htm' to ' <script type="module" src="/business-card/assets/js/.....js"></script> '
   # and open file (dist/business-card/CreateVCardWithPhoto.htm)  and need to modify 'CreateVCardWithPhoto.htm' to ' <link rel="stylesheet" href="/business-card/assets/css/.....css" /> '
   ```

# Project Structure

This project follows a specific structure to keep everything organized. Here's an overview of the project structure and the purpose of each file and folder:

- `.env`: This file contains environment-specific settings. It's ignored by Git to prevent committing sensitive data like API keys.

- `.eslintrc.cjs`, `.prettierrc`: These files are for configuring ESLint and Prettier, which are used to enforce a consistent coding style.

- `components.json`: This file contains...

- `example/`: This directory contains example files...

- `index.html`: This is the main HTML file that is loaded when you visit the site.

- `package.json`: This file contains metadata about the project and its dependencies.

- `postcss.config.js`: This file is for configuring PostCSS, a tool for transforming CSS.

- `public/`: This directory contains static files that are served directly by the server.

- `src/`: This is where the source code of the application lives.
  - `App.css`, `App.tsx`: These are the main CSS and TypeScript files for the application.
  - `assets/`: This directory contains static assets that are imported by the source code, such as images.
  - `components/`: This directory contains reusable React components.
  - `index.css`: This is the main CSS file for the application.
  - `lib/`: This directory contains...
  - `main.tsx`: This is the main TypeScript file that bootstraps the React application.
  - `views/`: This directory contains...
  - `vite-env.d.ts`: This file contains...

- `tailwind.config.js`: This file is for configuring Tailwind CSS, a utility-first CSS framework.

- `tsconfig.json`, `tsconfig.node.json`: These files are for configuring the TypeScript compiler.

- `vite.config.ts`: This file is for configuring Vite, the build tool used in this project.



# Branches 
   - main: This branch contains the latest version of the source code, which is automatically deployed to production.
   - dev: This branch contains the latest version of the source code, which is automatically deployed to staging.
   - feature/xxx: This branch contains the source code for a specific feature. When the feature is complete, it is merged into the dev branch.