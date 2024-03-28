import Post from "../models/Post.js";
import User from "../models/User.js";

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

export const updateUser = async (req, res, next) => {
  const dataUser = req.body;
  const userId = req.user._id;

  try {
    let updatedDataUser = { ...dataUser };

    if (req?.files && req?.files?.userAvatar) {
      updatedDataUser.userAvatar = req?.files?.userAvatar[0]?.path;
    }

    if (req?.files && req?.files?.coverAvatar) {
      updatedDataUser.coverAvatar = req?.files?.coverAvatar[0]?.path;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedDataUser, {
      new: true,
    });

    await Post.updateMany(
      { "creator.userId": userId },
      {
        $set: {
          "creator.userName": updatedDataUser.userName,
          "creator.userAvatar": updatedDataUser?.userAvatar,
        },
      }
    );

    await Post.updateMany(
      { "comments.userId": userId },
      {
        $set: {
          "comments.$[elem].userName": updatedDataUser.userName,
          "comments.$[elem].userAvatar": updatedDataUser?.userAvatar,
        },
      },
      { arrayFilters: [{ "elem.userId": userId }] }
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
