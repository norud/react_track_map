import axios from "axios";

//ngrok must change all time we run
//74fc35582fe0.ngrok.io
export default axios.create({
  baseURL: "http://74fc35582fe0.ngrok.io",
});
