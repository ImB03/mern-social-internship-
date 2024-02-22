import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    creator: {
      type: Object,
      default: {},
    },
    description: String,
    picturePath: String,
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
