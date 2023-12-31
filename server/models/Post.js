import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    creatorName: String,
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
