import { useState } from "react";
import LoginForm from "./components/LoginForm";
import CategItem from "./components/CategItem";

// const NAV_LINK = {
//   icon: "/icons/learn.svg",
//   menuItem: "Навчання",
//   link: "#",
//   hasNotifications: false,
//   isActive: false,
// };

function App() {
  // const [navLink, setNavLink] = useState(NAV_LINK);
  return (
    <>
      <LoginForm />
      {/* <NavLinks /> */}
      {/* <NavLink navLink={navLink} setNavLink={setNavLink} /> */}
      {/* <CategItem /> */}
    </>
  );
}

export default App;

// function NavLink({ navLink, setNavLink }) {
//   const linkStyle = {
//     border: navLink.isActive ? "5px solid blue" : "",
//   };

//   function changeActive() {
//     const navLinkCopy = { ...navLink };
//     navLinkCopy.isActive = !navLinkCopy.isActive;
//     setNavLink(navLinkCopy);
//   }

//   return (
//     <div key={navLink.icon}>
//       <a onClick={changeActive} style={linkStyle} href={navLink.link}>
//         <img src={navLink.icon} /> {navLink.menuItem}
//       </a>
//     </div>
//   );
// }
