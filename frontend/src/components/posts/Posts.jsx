import React from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function Posts() {
  const params = useParams();

  const posts = useSelector((state) => state.persistedReducer.slice.posts);

  console.log(posts);
  const postsSearch = useSelector(
    (state) => state.persistedReducer.search.posts
  );

  console.log(params.typeState);
  console.log(params.typeState);

  return (
    <div className={`${styles.posts} mt-3`}>
      {(params.typeState === `searchall` || params.typeState === `searchpost`
        ? postsSearch
        : posts
      )?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
