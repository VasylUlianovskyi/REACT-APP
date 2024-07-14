import classNames from "classnames";
import style from ".//NavLinks.module.css";

function NavLink({ navLink: nl, linkIndex, changeActiveLink }) {
  const linkClassName = classNames(style.navLink, {
    [style.activeNavLink]: nl.isActive,
  });

  const linkClickHandler = () => {
    changeActiveLink(linkIndex);
  };

  return (
    <li>
      <a onClick={linkClickHandler} className={linkClassName} href={nl.link}>
        <img className={style.navImg} src={nl.icon} /> {nl.menuItem}
      </a>
    </li>
  );
}
export default NavLink;
