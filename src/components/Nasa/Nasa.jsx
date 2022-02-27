import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Preloader from "../../helpers/Preloader/Preloader";
import { getAPOD } from "../../redux/nasaReducer";
import { selectAPOD, selectIsLoadingNasa } from "../../redux/nasaSelectors";
import APOD from "./APOD/APOD";
import c from "./Nasa.module.scss"

const Nasa = () => {

   const dispatch = useDispatch()

   const isLoading = useSelector(selectIsLoadingNasa)
   useEffect(() => {
      dispatch(getAPOD())
   }, [])

   const apod = useSelector(selectAPOD)

   return (
      <div>
         {!isLoading ? <APOD img={apod.hdurl} title={apod.title} description={apod.explanation} /> : <Preloader />}
      </div>
   )
}

export default Nasa;