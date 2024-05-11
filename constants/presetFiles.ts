const filesReact = {
  "/App.js": {
    code:
      `export default function App() {
  return <h1>Hello React world</h1>
}
`
  },
  "/index.js": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-scripts": "^5.0.0"
},
"main": "/index.js",
"devDependencies": {}
}`,
    // visible: false,
    // readonly: true,
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 15rem;
}
`
  },
};

const filesReactTs = {
  "/App.tsx": {
    code:
      `export default function App(): JSX.Element {
  return <h1>Hello React typed world</h1>
}`
  },
  "/index.tsx": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.0.0"
  },
  "main": "/index.tsx"
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },
  "/tsconfig.json": {
    code:
      `{ 
  "include": [
      "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`
  },
};

const filesNext = {
  "/next.config.js": {
    code:
      `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "styled-components": "latest"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "devDependencies": {},
  "main": "/pages/index.js"
}`
  },
  "/pages/_app.js": {
    code:
      `import '../styles.css'
  
  export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}`
  },
  "/pages/index.js": {
    code:
      `export default function Home({ data }) {
  return (
    <div>
      <h1>Hello Next {data}</h1>
    </div>
    );
  }
  
  export function getServerSideProps() {
    return {
      props: { data: "world" },
    }
  }`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`
  },
};

const filesNextTs = {
  "/next.config.js": {
    code:
      `/** @type {import('next').NextConfig} */
      const nextConfig = {};
      
      module.exports = nextConfig;
`
  },
  "/package.json": {
    code:
      `{
  "name": "nextjs-app-router",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "latest",
    "styled-components": "latest"
  },
  "scripts": {
    "dev": "NEXT_TELEMETRY_DISABLED=1 next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "typescript": "^5"
  }
}`
  },
  "/next-env.d.ts": {
    code: `/// <reference types="next" />
    /// <reference types="next/image-types/global" />
    
    // NOTE: This file should not be edited
    // see https://nextjs.org/docs/basic-features/typescript for more information.
    `
  },
  "/.eslintrc.json": {
    code: `{
      "extends": "next/core-web-vitals"
    }
    `
  },
  "tsconfig.json": {
    code: `{
      "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "bundler",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "incremental": true,
        "plugins": [
          {
            "name": "next"
          }
        ],
        "paths": {
          "@/*": ["./*"]
        }
      },
      "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      "exclude": ["node_modules"]
    }
    `
  },
  "/app/layout.tsx": {
    code: `import type { Metadata } from "next";
    import { Inter } from "next/font/google";
    import "./globals.css";
    
    const inter = Inter({ subsets: ["latin"] });
    
    export const metadata: Metadata = {
      title: "Create Next App",
      description: "Generated by create next app",
    };
    
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      );
    }
    `
  },
  "/app/page.tsx": {
    code: `import Image from "next/image";
    import styles from "./page.module.css";
    
    export default function Home() {
      return (
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>app/page.tsx</code>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
    
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
    
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
    
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>-&gt;</span>
              </h2>
              <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
            </a>
    
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Templates <span>-&gt;</span>
              </h2>
              <p>Explore starter templates for Next.js.</p>
            </a>
    
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>-&gt;</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      );
    }
    `
  },
  "/app/globals.css": {
    code: 
    `html {
  background: black;
  color: #999;
}
body {
      --max-width: 1100px;
      --border-radius: 12px;
      --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
        "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
        "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
    
      --foreground-rgb: 0, 0, 0;
      --background-start-rgb: 214, 219, 220;
      --background-end-rgb: 255, 255, 255;
    
      --primary-glow: conic-gradient(
        from 180deg at 50% 50%,
        #16abff33 0deg,
        #0885ff33 55deg,
        #54d6ff33 120deg,
        #0071ff33 160deg,
        transparent 360deg
      );
      --secondary-glow: radial-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
    
      --tile-start-rgb: 239, 245, 249;
      --tile-end-rgb: 228, 232, 233;
      --tile-border: conic-gradient(
        #00000080,
        #00000040,
        #00000030,
        #00000020,
        #00000010,
        #00000010,
        #00000080
      );
    
      --callout-rgb: 238, 240, 241;
      --callout-border-rgb: 172, 175, 176;
      --card-rgb: 180, 185, 188;
      --card-border-rgb: 131, 134, 135;
    }
    
    @media (prefers-color-scheme: dark) {
      :root {
        --foreground-rgb: 255, 255, 255;
        --background-start-rgb: 0, 0, 0;
        --background-end-rgb: 0, 0, 0;
    
        --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
        --secondary-glow: linear-gradient(
          to bottom right,
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0.3)
        );
    
        --tile-start-rgb: 2, 13, 46;
        --tile-end-rgb: 2, 5, 19;
        --tile-border: conic-gradient(
          #ffffff80,
          #ffffff40,
          #ffffff30,
          #ffffff20,
          #ffffff10,
          #ffffff10,
          #ffffff80
        );
    
        --callout-rgb: 20, 20, 20;
        --callout-border-rgb: 108, 108, 108;
        --card-rgb: 100, 100, 100;
        --card-border-rgb: 200, 200, 200;
      }
    }
    
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }
    
    body {
      color: rgb(var(--foreground-rgb));
      background: linear-gradient(
          to bottom,
          transparent,
          rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    @media (prefers-color-scheme: dark) {
      html {
        color-scheme: dark;
      }
    }
    `
  },
  "/app/page.module.css": {
    code: `.main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 6rem;
      min-height: 100vh;
    }
    
    .description {
      display: inherit;
      justify-content: inherit;
      align-items: inherit;
      font-size: 0.85rem;
      max-width: var(--max-width);
      width: 100%;
      z-index: 2;
      font-family: var(--font-mono);
    }
    
    .description a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    
    .description p {
      position: relative;
      margin: 0;
      padding: 1rem;
      background-color: rgba(var(--callout-rgb), 0.5);
      border: 1px solid rgba(var(--callout-border-rgb), 0.3);
      border-radius: var(--border-radius);
    }
    
    .code {
      font-weight: 700;
      font-family: var(--font-mono);
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(25%, auto));
      max-width: 100%;
      width: var(--max-width);
    }
    
    .card {
      padding: 1rem 1.2rem;
      border-radius: var(--border-radius);
      background: rgba(var(--card-rgb), 0);
      border: 1px solid rgba(var(--card-border-rgb), 0);
      transition:
        background 200ms,
        border 200ms;
    }
    
    .card span {
      display: inline-block;
      transition: transform 200ms;
    }
    
    .card h2 {
      font-weight: 600;
      margin-bottom: 0.7rem;
    }
    
    .card p {
      margin: 0;
      opacity: 0.6;
      font-size: 0.9rem;
      line-height: 1.5;
      max-width: 30ch;
    }
    
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 4rem 0;
    }
    
    .center::before {
      background: var(--secondary-glow);
      border-radius: 50%;
      width: 480px;
      height: 360px;
      margin-left: -400px;
    }
    
    .center::after {
      background: var(--primary-glow);
      width: 240px;
      height: 180px;
      z-index: -1;
    }
    
    .center::before,
    .center::after {
      content: "";
      left: 50%;
      position: absolute;
      filter: blur(45px);
      transform: translateZ(0);
    }
    
    .logo {
      position: relative;
    }
    /* Enable hover only on non-touch devices */
    @media (hover: hover) and (pointer: fine) {
      .card:hover {
        background: rgba(var(--card-rgb), 0.1);
        border: 1px solid rgba(var(--card-border-rgb), 0.15);
      }
    
      .card:hover span {
        transform: translateX(4px);
      }
    }
    
    @media (prefers-reduced-motion) {
      .card:hover span {
        transform: none;
      }
    }
    
    /* Mobile */
    @media (max-width: 700px) {
      .content {
        padding: 4rem;
      }
    
      .grid {
        grid-template-columns: 1fr;
        margin-bottom: 120px;
        max-width: 320px;
        text-align: center;
      }
    
      .card {
        padding: 1rem 2.5rem;
      }
    
      .card h2 {
        margin-bottom: 0.5rem;
      }
    
      .center {
        padding: 8rem 0 6rem;
      }
    
      .center::before {
        transform: none;
        height: 300px;
      }
    
      .description {
        font-size: 0.8rem;
      }
    
      .description a {
        padding: 1rem;
      }
    
      .description p,
      .description div {
        display: flex;
        justify-content: center;
        position: fixed;
        width: 100%;
      }
    
      .description p {
        align-items: center;
        inset: 0 0 auto;
        padding: 2rem 1rem 1.4rem;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
        background: linear-gradient(
          to bottom,
          rgba(var(--background-start-rgb), 1),
          rgba(var(--callout-rgb), 0.5)
        );
        background-clip: padding-box;
        backdrop-filter: blur(24px);
      }
    
      .description div {
        align-items: flex-end;
        pointer-events: none;
        inset: auto 0 0;
        padding: 2rem;
        height: 200px;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          rgb(var(--background-end-rgb)) 40%
        );
        z-index: 1;
      }
    }
    
    /* Tablet and Smaller Desktop */
    @media (min-width: 701px) and (max-width: 1120px) {
      .grid {
        grid-template-columns: repeat(2, 50%);
      }
    }
    
    @media (prefers-color-scheme: dark) {
      .vercelLogo {
        filter: invert(1);
      }
    
      .logo {
        filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
      }
    }
    
    @keyframes rotate {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
    `
  },
  "/.codesandbox/tasks.json": {
    code: `{
      // These tasks will run in order when initializing your CodeSandbox project.
      "setupTasks": [
        {
          "name": "Install Dependencies",
          "command": "pnpm install"
        }
      ],
    
      // These tasks can be run from CodeSandbox. Running one will open a log in the app.
      "tasks": {
        "dev": {
          "name": "dev",
          "command": "pnpm run dev",
          "runAtStart": true,
          "preview": {
            "port": 3000
          }
        },
        "build": {
          "name": "build",
          "command": "pnpm run build",
          "runAtStart": false
        },
        "start": {
          "name": "start",
          "command": "pnpm run start",
          "runAtStart": false
        },
        "lint": {
          "name": "lint",
          "command": "pnpm run lint",
          "runAtStart": false
        }
      }
    }
    `
  }
};


// const filesNextTs00 = {
//   "/next.config.js": {
//     code:
//       `/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
// `
//   },
//   "/App.tsx": {
//     code:
//       `export default function App(): JSX.Element {
//   return <h1>Hello Next typed world</h1>
// }`
//   },
//   "/index.tsx": {
//     code:
//       `import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );`,

//   },
//   "/package.json": {
//     code:
//       `{
//   "dependencies": {
//     "next": "latest",
//     "react": "^18.0.0",
//     "react-dom": "^18.0.0",
//     "react-scripts": "^4.0.0",
//     "framer-motion": "latest",
//     "styled-components": "latest",
//     "@next/swc-wasm-nodejs": "12.1.6"
//   },
//   "scripts": {
//     "dev": "NEXT_TELEMETRY_DISABLED=1 next dev",
//     "build": "next build",
//     "start": "next start"
//   },
//   "devDependencies": {
//     "@types/react": "^18.0.0",
//     "@types/react-dom": "^18.0.0",
//     "@types/next": "latest",
//     "@types/node": "latest",
//     "typescript": "^4.0.0"
//   }
// }`
//   },
//   "/public/index.html": {
//     code:
//       `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//   </head>
//   <body>
//     <div id="root"></div>
//   </body>
// </html>`
//   },
//   "/styles.css": {
//     code:
//       `body {
//   font-family: sans-serif;
//   -webkit-font-smoothing: auto;
//   -moz-font-smoothing: auto;
//   -moz-osx-font-smoothing: grayscale;
//   font-smoothing: auto;
//   text-rendering: optimizeLegibility;
//   font-smooth: always;
//   -webkit-tap-highlight-color: transparent;
//   -webkit-touch-callout: none;
// }

// h1 {
//   font-size: 1.5rem;
// }`
//   },
//   "/tsconfig.json": {
//     code:
//       `{
//   "include": [
//     "./**/*"
//   ],
//   "compilerOptions": {
//     "strict": true,
//     "esModuleInterop": true,
//     "lib": [ "dom", "es2015" ],
//     "jsx": "react-jsx"
//   }
// }`
//   },
// };


const filesStyledComponents = {
  "/App.js": {
    code:
      `export default function App() {
  return <h1>Hello StyledComponents world</h1>
}`
  },
  "/index.js": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <App />
</StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.0",
    "styled-components": "latest"
  },
  "main": "/index.js",
  "devDependencies": {}
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },
};

const filesStyledComponentsTs = {
  "/App.tsx": {
    code:
      `export default function App(): JSX.Element {
  return <h1>Hello StyledComponents typed world</h1>
}
`
  },
  "/index.tsx": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^4.0.0",
    "styled-components": "latest"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.0.0"
  },
  "main": "/index.tsx"
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },
  "/tsconfig.json": {
    code:
      `{
      "include": [
        "./**/*"
      ],
      "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "lib": [ "dom", "es2015" ],
        "jsx": "react-jsx"
      }
    }`
  },
};


const filesFramerMotion = {
  "/App.js": {
    code:
      `export default function App() {
  return <h1>Hello Framer world</h1>
}`
  },
  "/index.js": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.0",
    "framer-motion": "latest",
    "styled-components": "latest"
  },
  "main": "/index.js",
  "devDependencies": {}
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },
};

const filesFramerMotionTs = {
  "/App.tsx": {
    code:
      `export default function App(): JSX.Element {
  return <h1>Hello Framer Motion typed world</h1>
}
`
  },
  "/index.tsx": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^4.0.0",
    "framer-motion": "latest",
    "styled-components": "latest"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.0.0"
  },
  "main": "/index.tsx"
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },
  "/tsconfig.json": {
    code:
      `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`
  },
};

// const filesFramerMotion00 = {
// }


const filesReactThree = {
  "/App.js": {
    code:
      `export default function App() {
  return <h1>Hello @React-Three world</h1>
}`
  },
  "/index.js": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-postprocessing": "1.4.0",
    "react-scripts": "^5.0.0",
    "@react-three/drei": "latest",
    "@react-three/fiber": "latest",
    "three": "latest"
  },
  "main": "/inex.js",
  "devDependencies": {}
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },
};

const filesReactThreeTs = {
  "/App.tsx": {
    code:
      `export default function App(): JSX.Element {
  return <h1>Hello @React-Three typed world</h1>
}`
  },
  "/index.tsx": {
    code:
      `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-postprocessing": "1.4.0",
    "react-scripts": "^4.0.0",
    "@react-three/drei": "latest",
    "@react-three/fiber": "latest",
    "three": "latest"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.0.0"
  },
  "main": "/index.tsx"
}`
  },
  "/public/index.html": {
    code:
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`
  },
  "/tsconfig.json": {
    code:
      `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`
  },
};


const filesP5js = {

}

const filesTypescript = {
  "/index.html": {
    code:
      `<!DOCTYPE html>
<html>

  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="app"></div>
    <script src="index.ts"></script>
</body>
</html>`
  },
  "/index.ts": {
    code:
      `import "./styles.css";
document.getElementById("app").innerHTML = '<h1>Hello TypeScript world</h1>';`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {},
  "devDependencies": {
    "typescript": "^4.0.0"
  },
  "main": "/index.ts"
}`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`
  },
  "/tsconfig.json": {
    code:
      `{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "jsx": "preserve",
    "esModuleInterop": true,
    "sourceMap": true,
    "allowJs": true,
    "lib": [
      "es6",
      "dom"
    ],
    "rootDir": "src",
    "moduleResolution": "node"
  }
}`
  },
};

// const filesReactThree00 = {
//   "App.js": `"use client"
//   import {pointGenerator, pointGeneratorOutsideBoundaries} from 'pointGenerator.js';
//   import { OrbitControls, Sphere } from '@react-three/drei';
//   import { Canvas, Color, Vector3, useFrame } from '@react-three/fiber';
//   import { useRef } from 'react';
//   import { Group } from 'three';


//   const MIN_RADIUS = 12;
//   const MAX_RADIUS = 16;
//   const DEPTH = 30;
//   const FIRST_COLOR = 'F79A00';
//   const LAST_COLOR = 'FD12D1';
//   const NUM_POINTS = 2500;

//   const getGradientStop = (ratio: number) => {
//     //For outer ring number potentially past max radius,
//     // just clamp to 0
//     const ratioNorm = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

//     const c0 = FIRST_COLOR.match(/.{1,2}/g)!.map((oct) => parseInt(oct, 16) * (1 - ratioNorm));
//     const c1 = LAST_COLOR.match(/.{1,2}/g)!.map((oct) => parseInt(oct, 16) * ratioNorm);
//     const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
//     const color = ci.reduce((a, v) => (a << 8) + v, 0).toString(16).padStart(6, '0');

//     return \`#\${ color }\`;
//   }

//   const calculateColor = (x: number) => {
//     const maxDiff = MAX_RADIUS * 2;
//     const distance = x + MAX_RADIUS;

//     const ratio = distance / maxDiff;

//     const stop = getGradientStop(ratio);
//     return stop;
//   }

//   const randomFromInterval = (min: number, max: number) => {
//     return Math.random() * (max - min) + min;
//   }

//   export const pointGenerator = Array.from(
//     { length: NUM_POINTS },
//     (v, k) => k + 1
//   ).map((num) => {
//     const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
//     const randomAngle = Math.random() * Math.PI * 2;

//     const x = Math.cos(randomAngle) * randomRadius;
//     const y = Math.sin(randomAngle) * randomRadius;
//     const z = randomFromInterval(-DEPTH, DEPTH);

//     const color = calculateColor(x);

//     const newPoint: Point = {
//       index: num,
//       position: [x, y, z],
//       color,
//     }

//     return newPoint
//   })

//   export const pointGeneratorOutsideBoundaries = Array.from(
//     { length: NUM_POINTS / 2 },
//     (v, k) => k + 1
//   ).map((num) => {
//     const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
//     const randomAngle = Math.random() * Math.PI * 2;

//     const x = Math.cos(randomAngle) * randomRadius;
//     const y = Math.sin(randomAngle) * randomRadius;
//     const z = randomFromInterval(-DEPTH * 2, DEPTH * 2);

//     const color = calculateColor(x);

//     const newPoint: Point = {
//       index: num,
//       position: [x, y, z],
//       color,
//     }

//     return newPoint
//   })


//   export type Point = {
//     index: number;
//     position: Vector3;
//     color: Color;
//   }

//   export default function Home() {


//     return (
//       <div className="relative">
//         <Canvas
//           // orthographic
//           camera={{
//             position: [30, 0, 0],
//           }}
//           className="bg-[#101010]"
//           style={{ height: '100vh' }}
//         >
//           <OrbitControls maxDistance={100} minDistance={5} />
//           <directionalLight />
//           <pointLight
//             position={[-30, 0, -30]}
//             power={10}
//           />
//           <PointCircles />


//         </Canvas>

//       </div>
//     )
//   }


//   const PointCircles = () => {
//     const ref = useRef<Group | null>(null);

//     useFrame(({ clock }) => {

//       if (ref.current?.rotation) {

//         ref.current.rotation.z = clock.getElapsedTime() * -1
//         // ref.current.rotation.x = clock.getElapsedTime() * 0.1;

//       }

//     });


//     return (
//       <group ref={ref}>
//         {pointGenerator.map(point => <Point key={point.index} position={point.position} color={point.color} />)}
//         {pointGeneratorOutsideBoundaries.map(point => <Point key={point.index} position={point.position} color={point.color} />)}
//       </group>
//     )
//   }


//   type PointProps = {
//     position: Vector3;
//     color: Color;
//   }

//   const Point = ({ position = [0,0,0], color}: PointProps ) => {

//     return (
//       <Sphere
//         position={position}
//         args={[0.1, 10, 10]}
//       >
//         <meshStandardMaterial
//           color={color}
//           emissive={color}
//           emissiveIntensity={0.2}
//           roughness={0.42}
//         />
//       </Sphere>
//     )
//   }
//   `,
// };


// const filesHtmlCss = {
//   "/index.html": `<!DOCTYPE html>
// <html>

// <head>
//   <title>Parcel Sandbox</title>
//   <meta charset="UTF-8" />
//   <link rel="stylesheet" href="/styles.css" />
// </head>

// <body>
//   <h1>Hello world</h1>
// </body>

// </html>`,
//   "/styles.css": ``,

// }

const filesHtmlCssJs = {
  "/index.html": {
    code:
      `<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <div id="app"></div>
    
    <script src="index.js"></script>
  </body>
</html>`
  },

  "/index.js": {
    code:
      `import "./styles.css";
document.getElementById("app").innerHTML = '<h1>Hello HTML, CSS & JS world</h1>';`
  },
  "/package.json": {
    code:
      `{
  "dependencies": {},
  "main": "/index.js",
  "devDependencies": {}
}`
  },
  "/styles.css": {
    code:
    `html {
  background: black;
  color: #999;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
h1 {
  font-size: 1.5rem;
}`
  },

}

// const filesHtmlCssJs00 = {
//   "/index.html": `<!DOCTYPE html>
// <html>

// <head>
//   <title>Parcel Sandbox</title>
//   <meta charset="UTF-8" />
//   <link rel="stylesheet" href="/styles.css" />
// </head>

// <body>
//   <h1>Hello world</h1>
// </body>

// <script src="/script.js"></script>

// </html>`,
//   "/styles.css": ``,
//   "/script.js": ``,

// }


const presetFiles = {
  "react": filesReact,
  "react-ts": filesReactTs,
  "next": filesNext,
  "next-ts": filesNextTs,
  "styled-components": filesStyledComponents,
  "styled-components-ts": filesStyledComponentsTs,
  "framer-motion": filesFramerMotion,
  "framer-motion-ts": filesFramerMotionTs,
  "@react-three": filesReactThree,
  "@react-three-ts": filesReactThreeTs,
  "p5.js": filesP5js,
  "typescript": filesTypescript,
  "html-css-js": filesHtmlCssJs,
}

export default presetFiles;
