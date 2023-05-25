export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DB: {
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_CONNECTION: process.env.DB_CONNECTION,
  },
  JWT: {},
});
