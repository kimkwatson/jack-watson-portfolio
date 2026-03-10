import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectToDb } from "./db/connect";
import projectRoutes from "./routes/projectRoutes";

dotenv.config();

const app = express();

app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../src/public")));
app.use("/projects", projectRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;

connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
  });