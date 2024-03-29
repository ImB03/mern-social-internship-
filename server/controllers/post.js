import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res, next) => {
  const dataPost = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    const updatedDataPost = {
      creator: {
        userId: userId,
        userName: user.userName,
        userAvatar: user.userAvatar,
      },
      ...dataPost,
    };

    if (req?.file && req?.file?.path) {
      updatedDataPost.picturePath = req?.file?.path;
    }

    const newPost = new Post(updatedDataPost);
    await newPost.save();

    const posts = await Post.find().sort({ _id: -1 });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Create post unsuccessfully!" });
    next(err);
  }
};

/* GET POST */
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Get posts unsuccessfully" });
    next(err);
  }
};

//UPDATE POST

export const updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  const dataPost = req.body;

  try {
    const updatedDataPost = {
      ...dataPost,
    };

    if (req?.file && req?.file?.path) {
      updatedDataPost.picturePath = req?.file?.path;
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, updatedDataPost, {
      new: true,
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update post unsuccessfully" });
    next(err);
  }
};

export const commentPost = async (req, res, next) => {
  const postId = req.params.postId;
  const dataComment = req.body.dataComment;
  const userId = req.user._id;

  try {
    const post = await Post.findById(postId);
    const user = await User.findById(userId);

    post.comments.push({
      userId: userId,
      userComment: dataComment,
      userName: user.userName,
      userAvatar: user.userAvatar,
      commentAt: "",
    });

    const updatedPost = await Post.findByIdAndUpdate(postId, post, {
      new: true,
    });

    updatedPost.comments.reverse();

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Comment unsuccessfully" });
    next(err);
  }
};

//DELETE POST

export const deletePost = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    await Post.findByIdAndRemove(postId);

    const posts = await Post.find().sort({ _id: -1 });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete post unsuccessfully" });
    next(err);
  }
};

// export const getPostOfUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const post = await Post.find({ userId });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

/* UPDATE */
export const likePost = async (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.user._id;

  try {
    const post = await Post.findById(postId);

    const isLiked = post.likes.includes(userId);

    if (isLiked) {
      post.likes = post.likes.filter((itemUserId) => itemUserId !== userId);
    } else {
      post.likes.push(userId);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { likes: post.likes },
      { new: true }
    );

    updatedPost.comments.reverse();

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Like post unsuccessfully" });
    next(err);
  }
};
