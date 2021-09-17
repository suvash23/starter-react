import axios from "axios";

const KEY = "AIzaSyCYSpVhl36fOa8mfu6QsH2-0JrrjnXDJ-4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
