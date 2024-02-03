import React from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_ALL_POSTS } from "../../reducers/slice/postSlice";
import { useLocation, useParams } from "react-router-dom";

export default function Posts() {
  const params = useParams();
  const location = useLocation();

  const posts = useSelector((state) => state.post.posts);
  const postsSearch = useSelector((state) => state.search.posts);

  return (
    <div className={`${styles.posts} mt-3`}>
      {(location.pathname === ("/search/searchall" || "/search/searchpost")
        ? postsSearch
        : posts
      )?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
