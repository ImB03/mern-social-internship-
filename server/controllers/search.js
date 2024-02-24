import User from "../models/user.js";
import Post from "../models/post.js";

//SEARCH TERM
export const searchTerm = async (req, res, next) => {
  const searchTerm = req.query.q;

  try {
    const term = new RegExp(searchTerm, "i");

    const users = await User.find({
      $or: [{ userName: term }],
    }).limit(5);

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
    next(err);
  }
};

//SEARCH
export const search = async (req, res, next) => {
  const search = req.query.q;

  if (typeof search !== "string") {
    return res.status(400).json({ message: "Invalid search parameter" });
  }

  try {
    const term = new RegExp(search, "i");

    const users = await User.find({
      $or: [{ userName: term }],
    });

    console.log(users);

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
    next(err);
  }
};
