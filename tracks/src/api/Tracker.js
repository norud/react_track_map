import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//ngrok must change all time we run
//74fc35582fe0.ngrok.io
const instance = axios.create({
  baseURL: "http://030f46018150.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
