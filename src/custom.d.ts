declare module '*.png' {
    const value: string;
    export default value;
  }


  interface ImportMetaEnv {
    VITE_API_URL: string;
    // Add other environment variables you need here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }