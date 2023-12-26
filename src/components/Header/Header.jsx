import NavButton from "./NavButton/NavButton";
import c from "./Header.module.scss";

const Header = () => {
  return (
    <div className={c.header}>
      <div className={c.news, c.justify_content}>
        <NavButton title="News" link="news" />
      </div>
      <div className={c.nasa, c.justify_content}>
        <NavButton title="Nasa" link="nasa" />
      </div>
      <div className={c.spacex, c.justify_content}>
        <NavButton title="SpaceX" link="spacex" />
      </div>
    </div>
  )
}

export default Header