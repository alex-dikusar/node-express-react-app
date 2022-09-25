import express, { Express } from 'express';
import cors from 'cors';
import './env';
import db from './db';
import './models';

const app: Express = express();
const port = process.env.PORT;

app.use(cors);
app.use(express.json());

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
