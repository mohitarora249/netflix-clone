import axios from "axios";

const request = (() => {
  const options = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };
  const instance = axios.create(options);
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
})();

export default request;
