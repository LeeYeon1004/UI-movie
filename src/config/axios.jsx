import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const get = async (path) => {
  const response = await request.get(path);
  return response.data;
};

export default request;
