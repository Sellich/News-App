import loading from "../../common/loading.gif";
import c from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={c.preloader}>
      <img src={loading} alt="loading" className={c.gif} />
    </div>
  )
};

export default Preloader;
