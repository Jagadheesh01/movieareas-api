import { express } from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students" });
});

app.listen(PORT, () => {
  console.log(`PORT running in http://localhost:${PORT}`);
});
