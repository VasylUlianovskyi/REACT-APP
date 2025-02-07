import { useState } from "react";

import style from ".//NavLinks.module.css";
import NavLink from "./NavLink";

const NAV_LINKS = [
  {
    icon: "/icons/learn.svg",
    menuItem: "Навчання",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/sounds.svg",
    menuItem: "Звуки",
    link: "#",
    hasNotifications: false,
    isActive: true,
  },
  {
    icon: "/icons/practice.svg",
    menuItem: "Практика",
    link: "#",
    hasNotifications: true,
    isActive: false,
  },
  {
    icon: "/icons/resultsBoard.svg",
    menuItem: "Дошки пошани",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/quests.svg",
    menuItem: "Квести",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/store.svg",
    menuItem: "Магазин",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/profile.png",
    menuItem: "Профіль",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/more.svg",
    menuItem: "Більше",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
];

function NavLinks() {
  const [navLinks, setNavLinks] = useState(NAV_LINKS);

  function changeActiveLink(selectedNavLinkIndex) {
    const copyNavLinks = [...navLinks];

    const prevActiveNavLinkIndex = copyNavLinks.findIndex(
      (nlItem) => nlItem.isActive
    );
    copyNavLinks[prevActiveNavLinkIndex].isActive = false;

    copyNavLinks[selectedNavLinkIndex].isActive = true;

    setNavLinks(copyNavLinks);
  }

  const mapNavList = (nl, index) => {
    return (
      <NavLink
        key={nl.icon}
        navLink={nl}
        linkIndex={index}
        changeActiveLink={changeActiveLink}
      />
    );
  };

  return <ul className={style.navList}>{navLinks.map(mapNavList)}</ul>;
}

export default NavLinks;
