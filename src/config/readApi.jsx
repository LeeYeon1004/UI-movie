import * as request from "./axios.jsx";

const readApi = () => {
  // call API

  return request.get(`movies`);
};
export default readApi;
