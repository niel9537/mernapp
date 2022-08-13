import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import MasterRoute from "./routes/MasterRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(MasterRoute);

app.listen(5000, () => {
    console.log(`Server started on port`);
});



