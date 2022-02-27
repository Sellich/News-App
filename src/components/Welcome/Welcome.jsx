import { useSelector } from "react-redux";
import { selectPointer } from "../../redux/welcomeSelectors";
import Pointer from "./Pointer/Pointer";
import arrow from "../../common/up-arrow.png"
import c from "./Welcome.module.scss"

const Welcome = () => {

   const title = useSelector(selectPointer).map((item) => <Pointer title={item} arrow={arrow} />)
   return (
      <div>
         <div className={c.titles}>
            {title}
         </div>
         <div className={c.choice}>
            MAKE YOUR CHOICE
         </div>
      </div>
   )
}

export default Welcome;