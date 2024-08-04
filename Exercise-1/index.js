import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", express.static("views"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
