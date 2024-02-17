import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:19000/api",
});

API.interceptors.request.use(
  (req) => {
    if (JSON.parse(localStorage.getItem("token"))) {
      req.headers.authorization = `Bearer ${JSON.parse(
        localStorage.getItem("token")
      )}`;
    }

    return req;
  },

  (error) => {
    console.log("Error at api/index.js", error);
  }
);

//AUTH
export const signup = (dataUser) => API.post("/auth/signup", dataUser);
export const signin = (dataUser) => API.post("/auth/signin", dataUser);

//POST
export const getAllPosts = () => API.get(`/post/getallposts`);
export const getOnePost = (postId) => API.get(`/post/getonepost/${postId}`);
// export const stripePayment = (dataPayment) => API.post("/payment", dataPayment);
// export const fetchOnePost = (postId) => API.get(`/posts/${postId}`);
// export const fetchPostsBySearch = (searchQuery) =>
//   API.get(`/search/findbysearch?searchQuery=${searchQuery || "none"}`);
// export const fetchPostsByPagination = (page) =>
//   API.get(`/pagination?page=${page}`);
export const createPost = (dataPost) => API.post("/post/createpost", dataPost);
export const updatePost = (postId, dataPost) =>
  API.patch(`/post/updatepost/${postId}`, dataPost);
export const deletePost = (postId) => API.delete(`/post/deletepost/${postId}`);
export const likePost = (postId) => API.patch(`/post/likepost/${postId}`);
export const commentPost = (dataComment, postId) =>
  API.patch(`/post/commentpost/${postId}`, { dataComment });

//USER
export const getOneUser = (userId) => API.get(`/user/getoneuser/${userId}`);
export const getAllPostsUser = (userId) =>
  API.get(`/post/getallpostsuser/${userId}`);
export const updateUser = (dataUser) => API.patch(`/user/updateuser`, dataUser);
export const friendRequest = (userId) =>
  API.patch(`/user/friendrequest/${userId}`);

//SEARCH
export const searchTerm = (searchTerm) =>
  API.post(`/search/searchterm?q=${searchTerm}`);
export const search = (search) => API.post(`/search?q=${search}`);
