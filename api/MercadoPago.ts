import Axios from "axios";

const development = "http://localhost:3333";
const production = "https://main-form.herokuapp.com"

const Api = Axios.create({
  baseURL: development,
});

export { Api };
