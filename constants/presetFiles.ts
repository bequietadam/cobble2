const filesReact = {
  "/App.js": {
    code: "export default function App() {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.js": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^5.0.0"\n  },\n  "main": "/index.js",\n  "devDependencies": {}\n}',
    // visible: false,
    // readonly: true,
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 15rem;\n}"
  },
};

const filesReactTs = {
  "/App.tsx": {
    code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.tsx": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^4.0.0"\n  },\n  "devDependencies": {\n    "@types/react": "^18.0.0",\n    "@types/react-dom": "^18.0.0",\n    "typescript": "^4.0.0"\n  },\n  "main": "/index.tsx"\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
  "/tsconfig.json": {
    code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}'
  },
};

const filesNext = {
  "/next.config.js": {
    code: "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n}\n\nmodule.exports = nextConfig\n"
  },
  "/package.json": {
    code: `{
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
      },
      "dependencies": {
        "next": "latest",
        "react": "latest",
        "react-dom": "latest",
        "framer-motion": "latest",
        "styled-components": "latest"
      },
      "devDependencies": {},
      "main": "/pages/index.js",
    }`
  },
  "/pages/_app.js": {
    code: "import '../styles.css'\n\nexport default function MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}"
  },
  "/pages/index.js": {
    code: 'export default function Home({ data }) {\n  return (\n    <div>\n      <h1>Hello {data}</h1>\n    </div>\n  );\n}\n  \nexport function getServerSideProps() {\n  return {\n    props: { data: "world" },\n  }\n}\n'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
};

const filesNextTs = {
  "/App.tsx": {
    code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.tsx": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "next": "latest",\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^4.0.0",\n    "framer-motion": "latest",\n    "styled-components": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "^18.0.0",\n    "@types/react-dom": "^18.0.0",\n    "@types/next": "latest",\n    "@types/node": "latest",\n    "typescript": "^4.0.0"\n  },\n  "main": "/index.tsx"\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
  "/tsconfig.json": {
    code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}'
  },
};

const filesStyledComponents = {
  "/App.js": {
    code: "export default function App() {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.js": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^5.0.0",\n    "styled-components": "latest"\n  },\n  "main": "/index.js",\n  "devDependencies": {}\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
};

const filesStyledComponentsTs = {
  "/App.tsx": {
    code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.tsx": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^4.0.0"\n  },\n    "styled-components": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "^18.0.0",\n    "@types/react-dom": "^18.0.0",\n    "typescript": "^4.0.0"\n  },\n  "main": "/index.tsx"\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
  "/tsconfig.json": {
    code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}'
  },
};


const filesFramerMotion = {
  "/App.js": {
    code: "export default function App() {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.js": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^5.0.0",\n    "framer-motion": "latest",\n    "styled-components": "latest"\n  },\n  "main": "/index.js",\n  "devDependencies": {}\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
};

const filesFramerMotionTs = {
  "/App.tsx": {
    code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.tsx": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-scripts": "^4.0.0"\n  },\n    "framer-motion": "latest",\n    "styled-components": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "^18.0.0",\n    "@types/react-dom": "^18.0.0",\n    "typescript": "^4.0.0"\n  },\n  "main": "/index.tsx"\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
  "/tsconfig.json": {
    code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}'
  },
};

// const filesFramerMotion00 = {
//   "App.js": `import { motion } from "framer-motion"

//   import "./App.css"
//   // import Logo from "./Logo"

//   function App() {
//       const colors = {
//           motionMagenta: "#f08",
//           motionBlue: "#05f",
//           motionPurple: "#70f",
//       }

//       return (
//           <div className="App">
//               <header className="App-header">
//                 {/* <Logo className="App-logo" /> */}
//                   <motion.p
//                       initial={{ opacity: 1 }}
//                       animate={{ opacity: 0 }}
//                       transition={{
//                           delay: 4,
//                           duration: 2,
//                       }}
//                   >
//                       Edit <code>App.js</code> and save to reload.
//                   </motion.p>
//                   <a
//                       className="App-link"
//                       href="https://react.dev/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                   >
//                       Learn React
//                   </a>
//                   <motion.a
//                       style={{
//                           background: \`linear-gradient(to right,
//                             \${colors.motionBlue} 20%,
//                             \${colors.motionMagenta}, 
//                             \${colors.motionPurple})\`,
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           textDecorationColor: colors.motionPurple,
//                           marginTop: 5,
//                       }}
//                       href="https://www.framer.com/motion/"
//                       target="_blank"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{
//                           delay: 4,
//                           duration: 2,
//                       }}
//                   >
//                       & Framer Motion
//                   </motion.a>
//               </header>
//           </div>
//       )
//   }

//   export default App`,
//   "App.css": `.App {
//     text-align: center;
// }

// .App-logo {
//     height: 40vmin;
//     pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//     .App-logo {
//         animation: App-logo-spin infinite 20s linear;
//     }
// }

// svg.App-logo path {
//     fill: transparent;
//     stroke-width: 21.55;
//     stroke-linecap: round;
// }

// .App-header {
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
// }

// .App-link {
//     color: #61dafb;
// }

// @keyframes App-logo-spin {
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// }
// `
// }


const filesReactThree = {
  "/App.js": {
    code: "export default function App() {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.js": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-postprocessing": "1.4.0",\n    "react-scripts": "^5.0.0",\n    "@react-three/drei": "latest",\n    "@react-three/fiber": "latest",\n    "three": "latest"\n  },\n  "main": "/inex.js",\n  "devDependencies": {}\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
};

const filesReactThreeTs = {
  "/App.tsx": {
    code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n"
  },
  "/index.tsx": {
    code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);'
  },
  "/package.json": {
    code: '{\n  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-postprocessing": "1.4.0",\n    "react-scripts": "^4.0.0",\n    "@react-three/drei": "latest",\n    "@react-three/fiber": "latest",\n    "three": "latest"\n  },\n  "devDependencies": {\n    "@types/react": "^18.0.0",\n    "@types/react-dom": "^18.0.0",\n    "typescript": "^4.0.0"\n  },\n  "main": "/index.tsx"\n}'
  },
  "/public/index.html": {
    code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
  "/tsconfig.json": {
    code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}'
  },
};


const filesP5js = {

}

const filesTypescript = {
  "/index.html": {
    code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n\n<body>\n  <div id="app"></div>\n\n  <script src="index.ts">\n  </script>\n</body>\n\n</html>'
  },
  "/index.ts": {
    code: 'import "./styles.css";\n\ndocument.getElementById("app").innerHTML = `\n<h1>Hello world</h1>\n`;\n'
  },
  "/package.json": {
    code: '{\n  "dependencies": {},\n  "devDependencies": {\n    "typescript": "^4.0.0"\n  },\n  "main": "/index.ts"\n}'
  },
  "/styles.css": {
    code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
  },
  "/tsconfig.json": {
    code: '{\n  "compilerOptions": {\n    "strict": true,\n    "module": "commonjs",\n    "jsx": "preserve",\n    "esModuleInterop": true,\n    "sourceMap": true,\n    "allowJs": true,\n    "lib": [\n      "es6",\n      "dom"\n    ],\n    "rootDir": "src",\n    "moduleResolution": "node"\n  }\n}'
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
  "/index.html":
    { code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n</head>\n\n<body>\n  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>\n  <div id="app"></div>\n\n  <script src="index.js"></script>\n</body>\n\n</html>' },

  "/index.js":
    { code: 'import "./styles.css";\n\ndocument.getElementById("app").innerHTML = `\n<h1>Hello world</h1>\n`;\n' },

  "/package.json":
    { code: '{\n  "dependencies": {},\n  "main": "/index.js",\n  "devDependencies": {}\n}' },

  "/styles.css":
    { code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}" },

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
  // "next": filesNext,
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
