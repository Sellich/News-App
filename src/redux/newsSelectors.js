export const selectGetNews = (state) => {
   return state.news.news
}

export const selectGetIsLoading = (state) => {
   return state.news.isLoading
}

export const selectGetCurrentPage = (state) => {
   return state.news.currentPage
}

export const selectGetKeyword = (state) => {
   return state.news.keyword
}

export const selectPaginator = (state) => {

   const totalCount = state.news.totalCount
   const pageSize = state.news.pageSize
   const currentPage = state.news.currentPage

   return { totalCount, pageSize, currentPage }
}

export const selectLoadingSuccess = (state) => {
   return state.news.loadingSuccess
}