import express from "express";
import cors from "cors";
import fs from "fs";
import { log } from "console";
const app = express();

app.use(cors());
app.use(express.json());

let data = JSON.parse(fs.readFileSync("./user.json"));

function addTodo(userData) {
  userData = { id: data.users.length - 1 + 2, ...userData };
  data.users.push(userData);
  fs.writeFileSync("./user.json", JSON.stringify(data, null, 2));
}

app.get("/", async (req, res) => {
  const data = await fs.readFileSync("./user.json");
  res.json(JSON.parse(data));
});

app.post("/", (req, res) => {
  addTodo(req.body);
  res.json("Data added succesfully");
});

app.listen(3000, () => {
  console.log("listning on prot 3000");
});
