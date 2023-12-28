import React, { createContext, useState } from "react";

const MyContext = createContext();

export default function PostState({ children }) {
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [isUpdatePost, setIsUpdatePost] = useState(false);

  return (
    <MyContext.Provider
      value={{ isCreatePost, setIsCreatePost, isUpdatePost, setIsUpdatePost }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext };
