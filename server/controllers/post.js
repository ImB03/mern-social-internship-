import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res, next) => {
  try {
    const { description, picturePath } = req.body;
    const newPost = new Post({
      description,
      picturePath,
      // likes: {},
      // comments: [],
    });
    await newPost.save();

    res.status(200).json({ message: "Create post successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Create post unsuccessfully!" });
    next(err);
  }
};

/* GET POST */
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Get posts unsuccessfully" });
    next(err);
  }
};

export const getOnePost = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Get post unsuccessfully" });
    next(err);
  }
};

export const getPostOfUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(postId);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};