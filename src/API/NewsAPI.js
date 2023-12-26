import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
});

const key = "1c3df40b52c046cdb2529e1a61691c7a";

export const newsAPI = {
  getNews(keyword, currentPage) {
    return instance.get(`?q=${keyword}&pageSize=10&page=${currentPage}&apiKey=${key}`).then(response => response)
  }
};

