import Post from "../models/post.js";
import User from "../models/user.js";

//GET USER
export const getOneUser = async (req, res) => {
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

// export const getUserFriend = async (req, res) => {
//   try {
//     const { friendId } = req.params;
//     const user = await User.findById(friendId);

//     const friends = await Promise.all(
//       user.friends.map((id) => User.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );
//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// /* UPDATE */
export const updateUser = async (req, res, next) => {
  const dataUser = req.body;
  const userId = req.user.userId;

  console.log(dataUser);
  console.log(userId);

  try {
    await User.findByIdAndUpdate(userId, dataUser, {
      new: true,
    });

    res.status(200).json({ message: "Update user successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update user unsuccessfully" });
    next(err);
  }
};
// export const addRemoveFriend = async (req, res) => {
//   try {
//     const { userId, friendId } = req.params;
//     const user = await User.findById(userId);
//     const friend = await User.findById(friendId);

//     if (user.friends.includes(friendId)) {
//       user.friends = user.friends.filter((id) => id !== friendId);
//       friend.friends = friend.friends.filter((id) => id !== userId);
//     } else {
//       user.friends.push(friendId);
//       friend.friends.push(userId);
//     }
//     await user.save();
//     await friend.save();

//     const friends = await Promise.all(
//       user.friends.map((id) => User.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );

//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
