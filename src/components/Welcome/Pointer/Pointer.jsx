import c from "./Pointer.module.scss";

const Pointer = (props) => {
  return (
    <div className={c.pointer}>
      <div className={c.img}>
        <img src={props.arrow} alt="arrow" className={c.arrow} />
      </div>
      <div className={c.title}>
        {props.title}
      </div>
    </div>
  )
}

export default Pointer;
