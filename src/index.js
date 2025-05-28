import express from 'express';
import { sequelize } from "./database/connect.js";
import {router} from "../src/routes/router.js"

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api", router);
app.use("/auth", router); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
