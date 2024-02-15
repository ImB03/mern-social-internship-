import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userPicturePath: { type: String, default: "" },
    friends: { type: Array, default: [] },
    friendRequest: { type: Array, default: [] },
    notification: { type: Array, default: [] },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    avatarUser: { type: String, default: "" },
    coverAvatar: { type: String, default: "" },
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
