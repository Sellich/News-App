import c from "./Rocket.module.scss";

const Rocket = (props) => {
  return (
    <div className={c.wrapper}>
      <div className={c.left}>
        <img src={props.img} className={c.img} />
      </div>
      <div className={c.right}>
        <div className={c.name}>
          {props.name}
        </div>
        <div className={c.info}>
          <div className={c.height}>
            Height: {props.height.meters + ' m'}
          </div>
          <div className={c.diametr}>
            Diameter: {props.diameter.meters + ' m'}
          </div>
          <div className={c.weight}>
            Mass: {props.mass + " kg"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rocket;
