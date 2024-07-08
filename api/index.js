import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/configs/Database.js";
import { router } from "./src/routes/index.js";
import { notFound , errorHandler} from "./src/middlewares/ErrorHandler.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Router
router(app);

// not found
app.use(notFound);
app.use(errorHandler);
// define port
const PORT = process.env.PORT || 8888;

// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
