import React, { useEffect } from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { SET_POSTS } from "../../reducers/slice/slice";

export default function Posts() {
  const params = useParams();
  const dispatch = useDispatch();

  console.log(params);

  const posts = useSelector((state) => state.persistedReducer.slice.posts);

  const postsSearch = useSelector(
    (state) => state.persistedReducer.search.posts
  );

  useEffect(() => {
    if (params.userId) {

    }
  }, [params]);

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
