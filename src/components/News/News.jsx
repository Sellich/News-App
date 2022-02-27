
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Paginator from "../../helpers/paginator/Paginator"
import { getNews } from "../../redux/newsReducer"
import { selectGetIsLoading, selectGetKeyword, selectGetNews, selectLoadingSuccess, selectPaginator } from "../../redux/newsSelectors"
import New from "./New/New"
import SearchForm from "./SearchForm/SearchForm"
import c from "./News.module.scss"

const News = () => {
   const keyword = {
      keyword: useSelector(selectGetKeyword)
   }
   const dispatch = useDispatch()
   const news = useSelector(selectGetNews).map((item) => <New key={item.content} title={item.title} description={item.description} img={item.urlToImage} />)
   const loadingSuccess = useSelector(selectLoadingSuccess)
   const paginator = useSelector(selectPaginator)
   const onPageChange = (currentPage) => dispatch(getNews(keyword, currentPage))
   return (
      <div>
         <div className={c.searchForm}>
            <SearchForm />
         </div>
         <div>
            {!loadingSuccess ? <div className={c.choose}> CHOOSE A TOPIC THAT INTERESTS YOU </div> : news}
         </div>
         <div className={c.paginator}>
            <Paginator paginator={paginator} onPageChange={onPageChange} />
         </div>
      </div>
   )
}

export default News