import express from "express";
import cors from "cors";
import carrosRoutes from "./routes/carros.js";

const app = express();
const porta = 3001;

app.use(cors());
app.use(express.json());

app.use('/carros', carrosRoutes);

app.listen(porta);
