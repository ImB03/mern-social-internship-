import React, { useEffect, useRef, useState } from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function Posts({ setGetPosts }) {
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
    } else if (pageName === "search" && qValue && qValue.trim() !== "") {
      // Phân tách qValue thành mảng các từ
      const searchTerms = qValue.toLowerCase().split(" ");

      const processedPosts = posts.filter((post) => {
        // Kiểm tra xem từng từ trong mảng searchTerms có tồn tại trong userName hoặc description không
        return searchTerms.every((term) => {
          return (
            post.creator.userName.toLowerCase().includes(term) ||
            post.description.toLowerCase().includes(term)
          );
        });
      });

      // Cập nhật processedPosts và getPosts bằng processedPosts đã lọc
      setProcessedPosts(processedPosts);
      setGetPosts(processedPosts);
    } else if (pageName === "home") {
      setProcessedPosts(posts);
    } else {
      setProcessedPosts([]);
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
