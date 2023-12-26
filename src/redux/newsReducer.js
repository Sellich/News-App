import { createSlice } from "@reduxjs/toolkit";
import { newsAPI } from "../API/NewsAPI";

const newsState = {
  news: [],
  isLoading: true,
  loadingSuccess: false,
  currentPage: 1,
  keyword: null,
  totalCount: null,
  pageSize: 10,
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsState,
  reducers: {
    setNews(state, action) {
      state.news = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setKeyword(state, action) {
      state.keyword = action.payload
    },
    setTotalCount(state, action) {
      state.totalCount = action.payload
    },
    setLoadingSuccess(state, action) {
      state.loadingSuccess = action.payload
    }
  }
});

export const { setNews, setIsLoading, setCurrentPage, setKeyword, setTotalCount, setLoadingSuccess } = newsSlice.actions;

export const getNews = (keyword, currentPage) => async (dispatch) => {
  let response = await newsAPI.getNews(keyword.keyword, currentPage);

  dispatch(setIsLoading(true));
  dispatch(setCurrentPage(currentPage));
  dispatch(setTotalCount(response.data.totalResults));
  dispatch(setNews(response.data.articles));
  dispatch(setIsLoading(false));
  dispatch(setLoadingSuccess(true));
};

export default newsSlice.reducer;
