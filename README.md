# vscode-portfolio
[![Open is Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/itsnitinr/vscode-portfolio)

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

## Features Roadmap

- [✓] Themes and customizations
  - [✓] GitHub Dark (default)
  - [✓] Night owl
  - [✓] Dracula
  - [✓] Ayu
  - [✓] Nord

For other features and themes suggestions, please open an issue.

## Environment Variables

For fetching your articles from dev.to, create an `.env.local` file inside the project directory. Check the `.env.local.example` file for more information.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

