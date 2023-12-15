import React from "react";

import Post from "../post/Post";
import styles from "./posts.module.scss";

export default function Posts() {
  return (
    <div className={`${styles.posts} mt-3`}>
      <Post />
    </div>
  );
}
