import c from "./APOD.module.scss";

const APOD = (props) => {
  return (
    <div className={c.wrapper_apod}>
      <div className={c.apod_img}>
        <img src={props.img} alt="img" className={c.img} />
      </div>
      <div className={c.apod_info}>
        <div className={c.title}>
          {props.title}
        </div>
        <div className={c.description}>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default APOD;