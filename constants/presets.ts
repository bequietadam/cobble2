import { SandpackPredefinedTemplate } from '@codesandbox/sandpack-react/types';
import files from './presetFiles';

type Presets = {
  [key: string]: {
    template: SandpackPredefinedTemplate;
    dependencies: {};
    externalResources: string[];
    files: {} | null;
  }
}



const presets: Presets = {
  "react": {
    template: "react",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['react'],
  },
  "react-ts": {
    template: "react-ts",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['react-ts'],
  },
  // "next": {
  //   template: "nextjs",
  //   dependencies: {},
  //   externalResources: ["https://cdn.tailwindcss.com"],
  //   files: files['next'],
  // },
  "next-ts": {
    template: "react-ts",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['next-ts'],
  },
  "styled-components": {
    template: "react",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['styled-components'],
  },
  "styled-components-ts": {
    template: "react-ts",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['styled-components-ts'],
  },
  "framer-motion": {
    template: "react",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['framer-motion'],
  },
  "framer-motion-ts": {
    template: "react-ts",
    dependencies: {
    },
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['framer-motion-ts'],
  },
  "@react-three": {
    template: "react",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['@react-three'],
  },
  "@react-three-ts": {
    template: "react-ts",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['@react-three-ts'],
  },

  // "p5.js": {
  //   template:"static",
  //   dependencies: {},
  //   externalResources: [],
  //   files: files['p5.js'],
  // },
  "typescript": {
    template: "vanilla-ts",
    dependencies: {},
    externalResources: [],
    files: files['typescript'],
  },
  // "html-css": {
  //   template: "static",
  //   dependencies: {},
  //   externalResources: [],
  //   files: files['html-css'],
  // },
  "html-css-js": {
    template: "vanilla",
    dependencies: {},
    externalResources: ["https://code.jquery.com/jquery-3.7.1.min.js"],
    files: files['html-css-js'],

  }
}


export default presets;
