import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0wIqxkmTvJOj_6CwegTtnrZko4APGkTdNVL7LkjQ8n4",
  },
});
