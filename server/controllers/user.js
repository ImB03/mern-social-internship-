import Post from "../models/post.js";
import User from "../models/user.js";

//GET USER
export const getOneUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    delete user._doc.password;

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Get user unsuccessfully" });
    next(err);
  }
};

// /* UPDATE */
export const updateUser = async (req, res, next) => {
  const dataUser = req.body;
  const userId = req.user._id;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, dataUser, {
      new: true,
    });

    await Post.updateMany(
      { "creator.userId": userId },
      {
        $set: {
          "creator.userName": dataUser.userName, // Cập nhật trường userName của creator
          "creator.userAvatar": dataUser.userAvatar, // Cập nhật trường userAvatar của creator
        },
      }
    );


    const posts = await Post.find().sort({ _id: -1 });

    res.status(200).json({ updatedUser, posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update user unsuccessfully" });
    next(err);
  }
};

// /* FRIEND REQUEST */
// export const friendRequest = async (req, res, next) => {
//   const userId = req.user._id;
//   const friendId = req.params.userId;

//   console.log(userId);
//   console.log(friendId);

//   try {
//     const user = await User.findById(userId);
//     const friend = await User.findById(friendId);

//     friend._doc.friendRequest.push(userId);

//     const updatedFriend = await User.findByIdAndUpdate(friendId, friend, {
//       new: true,
//     });

//     console.log(updatedFriend);

//     res.status(200).json(updatedFriend);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Update user unsuccessfully" });
//     next(err);
//   }
// };
