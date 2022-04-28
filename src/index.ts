import Server from './server';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const port = Number(process.env.PORT ? process.env.PORT : 3000);

Server.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.info(`App up on port ${port}. Env: ${process.env.NODE_ENV}`);
});
