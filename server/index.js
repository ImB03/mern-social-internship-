import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import multer from "multer";
// import { fileURLToPath } from "url";
// import path from "path";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import searchRoutes from "./routes/search.js";
import { createPost } from "./controllers/post.js";
import { signup } from "./controllers/auth.js";
import { verifyToken } from "./middleware/verifyToken.js";

// import User from "./models/User.js";
// import Post from "./models/Post.js";
// import { users, posts } from "./data/index.js";

/* CONFIGURATIONS */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();

app.use(bodyParser.json());

// Middleware Helmet
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Middleware Cookie parser và file upload
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

// Middleware ghi nhật ký
app.use(morgan("common"));

// Middleware phân tích cơ thể
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Middleware CORS
app.use(cors());

// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// export const upload = multer({ storage });

// app.post("/createpost", verifyToken, upload.single("picture"), createPost);
// app.post("/signup", upload.single("picture"), signup);

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/search", searchRoutes);

/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Backend is running on http://localhost:${process.env.PORT}`);
    });

    // User.insertMany(users);
    // Post.insertMany(posts);
    console.log("Connect to Mongoose is SUCCESSFUL!!!!");
  })
  .catch((error) => console.log(`${error} did not connect`));
