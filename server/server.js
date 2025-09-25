import express from "express";
import cors from "cors";
import pool from "./db.js";          
import numbRoutes from "./routes/numbs.js";  // note the .js extension

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Connected to backend" });
});

// use router
app.use("/api/numbs", numbRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
