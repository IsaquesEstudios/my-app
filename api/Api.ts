import axios from "axios";

const development = "http://localhost:3333";
const production = "https://main-form.herokuapp.com";

const Api = axios.create({
  baseURL: development,
});

export { Api };
