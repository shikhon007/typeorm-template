declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'staging' | 'test';
      PORT: number;
      CORS_ORIGIN: string;
      DB_TYPE: string;
      DB_HOST: string;
      DB_PORT: number;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      JWT_SECRET: string;
    }
  }
}

// // convert it into a module by adding an empty export statement.
export {};
