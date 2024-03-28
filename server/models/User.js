import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: { type: Array, default: [] },
    friendRequest: { type: Array, default: [] },
    notification: { type: Array, default: [] },
    userAvatar: { type: String, default: "https://res.cloudinary.com/drnm85yvv/image/upload/v1711634892/cloudinary-img/r6qbxpwrfczh2h1l3p2h.png" },
    coverAvatar: { type: String, default: "https://res.cloudinary.com/drnm85yvv/image/upload/v1711634911/cloudinary-img/favrngjsmfvt1m4fslrm.png" },
    provinceCity: { type: String, default: "" },
    workplace: { type: String, default: "" },
    school: { type: String, default: "" },
    homeTown: { type: String, default: "" },
    nickname: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
