import { useState } from "react";
import c from "./Paginator.module.scss";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.paginator.totalCount / props.paginator.pageSize);
  const portionSize = 10;

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  };

  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(1);

  let leftBorder = (portionNumber - 1) * portionSize + 1;
  let rightBorder = portionNumber * portionSize;

  return (
    <div className={c.paginator}>
      <div className={c.left}>{portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }} className={c.btn}> PREV </button>}</div>
      <div className={c.center}>{pages.filter(p => p <= rightBorder && p >= leftBorder).map((p) => {
        return <span key={p} className={p === props.paginator.currentPage ? c.selected : null, c.numberPage}
          onClick={() => props.onPageChange(p)}> {p} </span>
      })}</div>
      <div className={c.right}>{portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }} className={c.btn}> NEXT </button>}</div>
    </div>
  )
}

export default Paginator;
