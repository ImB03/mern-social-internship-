import Post from "../models/post.js";
import User from "../models/user.js";

// GET POST BY SEARCH
export const searchTerm = async (req, res, next) => {
  const searchTerm = req.query.q;
  console.log(searchTerm);

  try {
    const title = new RegExp(searchTerm, "i");

    console.log(title, 3);

    const posts = await Post.find({
      $or: [
        { title: title },
        { description: title },
        { creator: title },
        { name: title },
        { tags: title },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
    next(err);
  }
};
