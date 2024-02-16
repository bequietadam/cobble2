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
      `body {
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
      `body {
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
      `body {
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
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
`
  },
  "/App.tsx": {
    code:
      `export default function App(): JSX.Element {
  return <h1>Hello Next typed world</h1>
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
);`,

  },
  "/package.json": {
    code:
      `{
  "dependencies": {
    "next": "latest",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^4.0.0",
    "framer-motion": "latest",
    "styled-components": "latest"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/next": "latest",
    "@types/node": "latest",
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
      `body {
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
      `body {
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
      `body {
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
      `body {
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
      `body {
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
      `body {
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
      `body {
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
      `body {
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
      `body {
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
