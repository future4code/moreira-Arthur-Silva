import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
//express & CORS
const app: Express = express();

app.use(express.json());
app.use(cors());


//Server config
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
//test database
/* app.get("/getall", async (req, res) => {
  const result = await connection("movie");
  res.status(200).send(result);
}); */