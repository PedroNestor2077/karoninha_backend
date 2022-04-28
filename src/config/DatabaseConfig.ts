import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const user = String(process.env.DATABASE_USER);
const pass = String(process.env.DATABASE_PASS);
const host = String(process.env.DATABASE_HOST);
const port = Number(process.env.DATABASE_PORT);

export default async function DatabaseConfig() {
  try {
    mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}`);
    const db = mongoose.connection;
    db.once('open', () => {
      /* eslint-disable-next-line no-console */
      console.info('Mongo Connected');
    });
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.info('DB connection error');
  }
}
