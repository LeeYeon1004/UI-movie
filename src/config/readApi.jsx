import * as request from "./axios.jsx";

const readApi = () => {
  // call API

  return request.get(`movies`);
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
};
export default readApi;
