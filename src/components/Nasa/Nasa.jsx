import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Preloader from "../../helpers/Preloader/Preloader";
import { getAPOD } from "../../redux/nasaReducer";
import { selectAPOD, selectIsLoadingNasa } from "../../redux/nasaSelectors";
import APOD from "./APOD/APOD";

const Nasa = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingNasa);
  const apod = useSelector(selectAPOD)

  useEffect(() => {
    dispatch(getAPOD())
  }, []);

  return (
    <div>
      {!isLoading ? <APOD img={apod.hdurl} title={apod.title} description={apod.explanation} /> : <Preloader />}
    </div>
  )
}

export default Nasa;
