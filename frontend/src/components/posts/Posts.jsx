import React from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_ALL_POSTS } from "../../reducers/slice/postSlice";

export default function Posts() {
  const posts = useSelector((state) => state.post.posts);
  console.log(posts);

  return (
    <div className={`${styles.posts} mt-3`}>
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
