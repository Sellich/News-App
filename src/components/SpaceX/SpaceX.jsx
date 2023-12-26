import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRockets } from "../../redux/spacexReducer";
import { selectGetRcokets } from "../../redux/spacexSelectors";
import Rocket from "./Rocket/Rocket";

const SpaceX = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets())
  }, []);

  const rockets = useSelector(selectGetRcokets).map((item) =>
    <Rocket key={item.id}
      name={item.name}
      img={item.flickr_images}
      height={item.height}
      diameter={item.diameter}
      mass={item.mass.kg}
    />
  );

  return (
    <div>
      {rockets}
    </div>
  )
}

export default SpaceX;
