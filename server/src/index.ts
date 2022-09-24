import express, { Express } from 'express';
import './env';
import db from './db';

const app: Express = express();
const port = process.env.PORT;

const startApp = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(port, () =>
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`,
      ),
    );
  } catch (e) {
    console.error(e);
  }
};

startApp();
