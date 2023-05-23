import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0f29b837c3c0467999d7a77d0322aa31",
  },
});
 