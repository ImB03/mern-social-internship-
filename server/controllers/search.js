import User from "../models/user.js";

// GET POST BY SEARCH
export const searchTerm = async (req, res, next) => {
  const searchTerm = req.query.q;

  try {
    const title = new RegExp(searchTerm, "i");

    const users = await User.find({
      $or: [{ userName: title }],
    });

    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
    next(err);
  }
};
