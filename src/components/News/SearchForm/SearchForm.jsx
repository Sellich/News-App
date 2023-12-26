import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { getNews, setKeyword } from "../../../redux/newsReducer"
import c from "./SearchForm.module.scss"
import lupa from "../../../common/search.png"

const SearchForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (keyword, currentPage) => {
    dispatch(setKeyword(keyword.keyword));
    dispatch(getNews(keyword, currentPage = 1));
  };

  return (
    <div className={c.searchForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
        <div>
          <input {...register('keyword')} autocomplete="off" className={c.input} />
        </div>
        <div className={c.lupa_wrapper}>
          <input type="image" src={lupa} className={c.lupa} />
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
