import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:19000/api",
});

export const getAllPosts = () => API.get("/post/getallposts");
export const getOnePost = (postId) => API.get(`/post/getonepost/${postId}`);
// export const stripePayment = (dataPayment) => API.post("/payment", dataPayment);
// export const fetchOnePost = (postId) => API.get(`/posts/${postId}`);
// export const fetchPostsBySearch = (searchQuery) =>
//   API.get(`/search/findbysearch?searchQuery=${searchQuery || "none"}`);
// export const fetchPostsByPagination = (page) =>
//   API.get(`/pagination?page=${page}`);

export const createPost = (dataPost) => API.post("/post/createpost", dataPost);
// export const updatePost = (postId, infoUpdatePost) =>
//   API.patch(`/posts/${postId}`, infoUpdatePost);
// export const deletePost = (postId) => API.delete(`/posts/${postId}`);
// export const likePost = (postId) => API.patch(`/posts/likepost/${postId}`);
// export const commentPost = (dataComment, postId) =>
//   API.patch(`/posts/commentpost/${postId}`, { dataComment });

export const signup = (dataUser) => API.post("/auth/signup", dataUser);
export const signin = (dataUser) => API.post("/auth/signin", dataUser);
