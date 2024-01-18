import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "There is no token" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, dataUser) => {
      if (err) return res.status(403).json({ message: "Token is not valid!" });
      req.user = dataUser;
      next();
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Authorization unsuccess!" });
    next(err);
  }
};
