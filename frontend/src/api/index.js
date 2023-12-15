import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000/api",
});

export const fetchAllProducts = () => API.get("/product/findproducts");
export const fetchSingleProduct = (productId) =>
  API.get(`/product/findproduct/${productId}`);
export const stripePayment = (dataPayment) => API.post("/payment", dataPayment);
// export const fetchOnePost = (postId) => API.get(`/posts/${postId}`);
// export const fetchPostsBySearch = (searchQuery) =>
//   API.get(`/search/findbysearch?searchQuery=${searchQuery || "none"}`);
// export const fetchPostsByPagination = (page) =>
//   API.get(`/pagination?page=${page}`);

// export const createPost = (newPost) => API.post("/posts", newPost);
// export const updatePost = (postId, infoUpdatePost) =>
//   API.patch(`/posts/${postId}`, infoUpdatePost);
// export const deletePost = (postId) => API.delete(`/posts/${postId}`);
// export const likePost = (postId) => API.patch(`/posts/likepost/${postId}`);
// export const commentPost = (dataComment, postId) =>
//   API.patch(`/posts/commentpost/${postId}`, { dataComment });

export const signUp = (infoUser) => API.post("/auth/signup", infoUser);
export const signIn = (infoUser) => API.post("/auth/signin", infoUser);
