import React, { useEffect, useRef, useState } from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function Posts() {
  const params = useParams();
  const location = useLocation();
  const pageName = location.pathname.split("/")[1];
  const [processedPosts, setProcessedPosts] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  const posts = useSelector((state) => state.persistedReducer.slice.posts);

  useEffect(() => {
    if (pageName === "profile" && params.userId) {
      const processedPosts = posts.filter(
        (post) => post.creator.userId === params.userId
      );
      setProcessedPosts(processedPosts);
    } else if (pageName === "search" && qValue) {
      const processedPosts = posts.filter(
        (post) =>
          post.creator.userName.includes(qValue) ||
          post.description.includes(qValue)
      );
      setProcessedPosts(processedPosts);
    } else {
      setProcessedPosts(posts);
    }
  }, [pageName, params.userId, posts, qValue]);

  return (
    <div className={`${styles.posts} mt-3`}>
      {processedPosts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
