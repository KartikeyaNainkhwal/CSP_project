import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth.js";
import  userRoutes  from "./routes/users.js";
import  postRoutes  from "./routes/posts.js";
import { createPost } from "./controllers/post.js";
import { verifytoken } from "./middlewares/auth.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(helmet());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(express.json());  // Fix: Add parentheses here
app.use(morgan("common"));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Routing
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifytoken, upload.single("picture"), createPost);


// Mongoose setup
const port = 3001;
mongoose.connect("mongodb+srv://Kartikeya:1089qpalzm@cluster0.iqybizk.mongodb.net/<databaseName>?retryWrites=true&w=majority")
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
