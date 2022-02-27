import c from "./New.module.scss"

const New = (props) => {
   return (
      <div className={c.new}>
         <div className={c.left}>
            <img src={props.img} alt="img" className={c.img} />
         </div>
         <div className={c.right}>
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

export default New;