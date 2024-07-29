import { useEffect } from "react";
import {
  NavLink,
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  Outlet,
} from "react-router-dom";
import styles from "./App.module.sass";

const linkStyle = ({ isActive }) =>
  isActive ? { border: "1px solid purple" } : {};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/partners/*" element={<PartnersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function BasePage() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

function PartnersPage() {
  return (
    <div>
      <h2>Partners</h2>
      <nav className={styles.container}>
        <NavLink to="partner1" style={linkStyle}>
          Partner1
        </NavLink>
        <NavLink to="partner2" style={linkStyle}>
          Partner2
        </NavLink>
      </nav>
      <Routes>
        <Route path="partner1" element={<div>Partner1</div>} />
        <Route path="partner2" element={<div>Partner2</div>} />
      </Routes>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul className={styles.container}>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/partners" style={linkStyle}>
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => navigate("/"), 2000);
    return () => clearTimeout(id);
  });

  return (
    <div>
      404 This page is not exists yet{" "}
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
