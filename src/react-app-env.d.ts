/// <reference types="react-scripts" />

declare module '*.woff2' {
  const src: string;
  export default src;
}

declare interface Window {
  version?: string;
}

declare module 'framer-motion/dist/framer-motion' {
  export * from 'framer-motion';
}
