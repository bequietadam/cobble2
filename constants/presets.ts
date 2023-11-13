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
  "next": {
    template: "nextjs",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: null,

  },
  "framer-motion": {
    template: "react",
    dependencies: {
      'framer-motion': 'latest',
      'styled-components': 'latest',
    },
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['framer-motion'],

  },
  "styled-components": {
    template: "react",
    dependencies: {
      'styled-components': 'latest',
    },
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['react'],

  },
  "@react-three": {
    template: "react",
    dependencies: {
      "@react-three/drei": "latest",
      "@react-three/fiber": "latest",
      "three": "latest",
    },
    externalResources: ["https://cdn.tailwindcss.com"],
    // files: files['@react-three'],
    files: null,
    
  },
  "typescript": {
    template: "vanilla-ts",
    dependencies: {},
    externalResources: [],
    files: null,
  },
  "react-ts": {
    template: "react-ts",
    dependencies: {},
    externalResources: ["https://cdn.tailwindcss.com"],
    files: null,
  },

  // "next-ts": {
  //   template: "next-ts",
  //   dependencies: {},
  //   externalResources: ["https://cdn.tailwindcss.com"],
  //   files: filesReact,

  // },

  "framer-motion-ts": {
    template: "react-ts",
    dependencies: {
      'framer-motion': 'latest',
      'styled-components': 'latest',
    },
    externalResources: ["https://cdn.tailwindcss.com"],
    files: null,

  },

  "styled-components-ts": {
    template: "react-ts",
    dependencies: {
      'styled-components': 'latest',
    },
    externalResources: ["https://cdn.tailwindcss.com"],
    files: files['react'],

  },

  "html-css": {
    template: "static",
    dependencies: {},
    externalResources: [],
    files: null,
  },

  "html-css-js": {
    template: "vanilla",
    dependencies: {},
    externalResources: ["https://code.jquery.com/jquery-3.7.1.min.js"],
    files: null,

  }
}


export default presets;
