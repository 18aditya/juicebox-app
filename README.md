# Juicebox App

This is a Next.js project using custom CSS (no Tailwind) for a multi-step form and results experience.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd juicebox-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure
- `src/app/` — Main Next.js app pages (Homepage, Tutorial, Form, Results)
- `src/components/` — Reusable UI components (Button, MobileHeader, AITalks, TextInput, etc.)
- `src/styles/globals.css` — Global and component CSS (no Tailwind)
- `public/` — Static assets (images, fonts, etc.)

## Custom Fonts
Fonts are loaded from the `public/fonts/` directory and configured in `src/styles/fonts.css`.

## Environment Variables
No special environment variables are required for local development.

## Notes
- This project uses the Next.js App Router (`src/app/`).
- All styling is done with native CSS classes in `globals.css`.
- If you see errors about `useSearchParams` or other Next.js hooks, ensure you are using `<Suspense>` boundaries as required by Next.js.

## Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```