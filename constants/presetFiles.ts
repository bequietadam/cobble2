
const filesReact = {
  "/App.js": `import Welcome from './Welcome.js';

export default function App() {
return <Welcome/>
}`,
  '/Button.js': {
    code: `export default () => {
  return <button>Hello</button>
  };`,
    readOnly: true, // Set as non-editable, defaults to `false`
    // active: true, // Set as main file, defaults to `false`
    hidden: false // Tab visibility, defaults to `false`
  },
  "/Welcome.js": `export default function Example() {
return (
  <div className="bg-gray-50">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block text-indigo-600">Start your free trial today.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            Get started
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
)
}`
}

const filesNext = ''

const filesFramerMotion = {
  "App.js": `import { motion } from "framer-motion"

  import "./App.css"
  // import Logo from "./Logo"
  
  function App() {
      const colors = {
          motionMagenta: "#f08",
          motionBlue: "#05f",
          motionPurple: "#70f",
      }
  
      return (
          <div className="App">
              <header className="App-header">
                {/* <Logo className="App-logo" /> */}
                  <motion.p
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{
                          delay: 4,
                          duration: 2,
                      }}
                  >
                      Edit <code>App.js</code> and save to reload.
                  </motion.p>
                  <a
                      className="App-link"
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
                  <motion.a
                      style={{
                          background: \`linear-gradient(to right,
                            \${colors.motionBlue} 20%,
                            \${colors.motionMagenta}, 
                            \${colors.motionPurple})\`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textDecorationColor: colors.motionPurple,
                          marginTop: 5,
                      }}
                      href="https://www.framer.com/motion/"
                      target="_blank"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                          delay: 4,
                          duration: 2,
                      }}
                  >
                      & Framer Motion
                  </motion.a>
              </header>
          </div>
      )
  }
  
  export default App`,
  "App.css": `.App {
    text-align: center;
}

.App-logo {
    height: 40vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
}

svg.App-logo path {
    fill: transparent;
    stroke-width: 21.55;
    stroke-linecap: round;
}

.App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}

.App-link {
    color: #61dafb;
}

@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`
}

const filesReactThree = {
  "App.js": `"use client"
  import {pointGenerator, pointGeneratorOutsideBoundaries} from 'pointGenerator.js';
  import { OrbitControls, Sphere } from '@react-three/drei';
  import { Canvas, Color, Vector3, useFrame } from '@react-three/fiber';
  import { useRef } from 'react';
  import { Group } from 'three';


  const MIN_RADIUS = 12;
  const MAX_RADIUS = 16;
  const DEPTH = 30;
  const FIRST_COLOR = 'F79A00';
  const LAST_COLOR = 'FD12D1';
  const NUM_POINTS = 2500;
  
  const getGradientStop = (ratio: number) => {
    //For outer ring number potentially past max radius,
    // just clamp to 0
    const ratioNorm = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
  
    const c0 = FIRST_COLOR.match(/.{1,2}/g)!.map((oct) => parseInt(oct, 16) * (1 - ratioNorm));
    const c1 = LAST_COLOR.match(/.{1,2}/g)!.map((oct) => parseInt(oct, 16) * ratioNorm);
    const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
    const color = ci.reduce((a, v) => (a << 8) + v, 0).toString(16).padStart(6, '0');
  
    return \`#\${ color }\`;
  }
  
  const calculateColor = (x: number) => {
    const maxDiff = MAX_RADIUS * 2;
    const distance = x + MAX_RADIUS;
  
    const ratio = distance / maxDiff;
  
    const stop = getGradientStop(ratio);
    return stop;
  }
  
  const randomFromInterval = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }
  
  export const pointGenerator = Array.from(
    { length: NUM_POINTS },
    (v, k) => k + 1
  ).map((num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
    const randomAngle = Math.random() * Math.PI * 2;
  
    const x = Math.cos(randomAngle) * randomRadius;
    const y = Math.sin(randomAngle) * randomRadius;
    const z = randomFromInterval(-DEPTH, DEPTH);
  
    const color = calculateColor(x);
  
    const newPoint: Point = {
      index: num,
      position: [x, y, z],
      color,
    }
  
    return newPoint
  })
  
  export const pointGeneratorOutsideBoundaries = Array.from(
    { length: NUM_POINTS / 2 },
    (v, k) => k + 1
  ).map((num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
    const randomAngle = Math.random() * Math.PI * 2;
  
    const x = Math.cos(randomAngle) * randomRadius;
    const y = Math.sin(randomAngle) * randomRadius;
    const z = randomFromInterval(-DEPTH * 2, DEPTH * 2);
  
    const color = calculateColor(x);
  
    const newPoint: Point = {
      index: num,
      position: [x, y, z],
      color,
    }
  
    return newPoint
  })
  
  
  export type Point = {
    index: number;
    position: Vector3;
    color: Color;
  }
  
  export default function Home() {
  
  
    return (
      <div className="relative">
        <Canvas
          // orthographic
          camera={{
            position: [30, 0, 0],
          }}
          className="bg-[#101010]"
          style={{ height: '100vh' }}
        >
          <OrbitControls maxDistance={100} minDistance={5} />
          <directionalLight />
          <pointLight
            position={[-30, 0, -30]}
            power={10}
          />
          <PointCircles />
  
  
        </Canvas>
  
      </div>
    )
  }
  
  
  const PointCircles = () => {
    const ref = useRef<Group | null>(null);
  
    useFrame(({ clock }) => {
  
      if (ref.current?.rotation) {
  
        ref.current.rotation.z = clock.getElapsedTime() * -1
        // ref.current.rotation.x = clock.getElapsedTime() * 0.1;
  
      }
  
    });
  
  
    return (
      <group ref={ref}>
        {pointGenerator.map(point => <Point key={point.index} position={point.position} color={point.color} />)}
        {pointGeneratorOutsideBoundaries.map(point => <Point key={point.index} position={point.position} color={point.color} />)}
      </group>
    )
  }
  
  
  type PointProps = {
    position: Vector3;
    color: Color;
  }
  
  const Point = ({ position = [0,0,0], color}: PointProps ) => {
  
    return (
      <Sphere
        position={position}
        args={[0.1, 10, 10]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.42}
        />
      </Sphere>
    )
  }
  `,
};


const filesHtmlCss = {
  "/index.html": `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>
  <h1>Hello world</h1>
</body>

</html>`,
  "/styles.css": ``,

}

const filesHtmlCssJs = {
  "/index.html": `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>
  <h1>Hello world</h1>
</body>

<script src="/script.js"></script>

</html>`,
  "/styles.css": ``,
  "/script.js": ``,

}


const presetFiles = {
  "react": filesReact,
  "react-ts": filesReact,
  "next": filesNext,
  "next-ts": filesNext,
  "framer-motion": filesFramerMotion,
  "@react-three": filesReactThree,
  "html-css": filesHtmlCss,
  "html-css-js": filesHtmlCssJs,
}

export default presetFiles;
