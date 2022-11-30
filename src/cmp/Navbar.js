import { NavLink } from "react-router-dom";
import "./Navbar.css";
import koilogo from "../img/normal/logo-koi.svg";
import SvgTwitch from "../img/social/SvgTwitch.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import SvgYoutube from "../img/social/SvgYoutube.js";
import SvgTiktok from "../img/social/SvgTiktok.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-responsive"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
      <NavLink className="nav-logo" to="/es/">
        <img className="nav-koi" srcSet={koilogo} />
        <h1> SOMOS KOI!</h1>
      </NavLink>
      <div className="navbar-links">
        <ul>
          <li>
            <a
              href="https://www.twitch.tv/koi"
              title="Twitch - KOI"
              target="_blank"
            >
              <SvgTwitch/>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/KOI"
              title="Twitter - KOI"
              target="_blank"
            >
            <SvgTwitter/>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCngKrftbtipUKgbKBm94gyg"
              title="Youtube - KOI"
              target="_blank"
            >
            <SvgYoutube/>            
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@squadkoi"
              title="Tiktok - KOI"
              target="_blank"
            >
            <SvgTiktok/>                
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/squadkoi/"
              title="Instagram - KOI"
              target="_blank"
            >
            <SvgInstagram/>            
            </a>
          </li>
        </ul>
        <ul className="nav-space">
          <ul className="nav-list">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              to="/es/news"
            >
              <span className="hid1050"> NOTICIAS</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              to="/es/teams"
            >
              <span className="hid1050"> EQUIPOS</span>
            </NavLink>
          </li>
          <li>
            <a
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              href="https://kelme.com/es/7211-koi" target="_blank"
            >
              <span className="hid1050"> TIENDA</span>
            </a>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              to="/es/partners"
            >
              <span className="hid1050"> SOCIOS</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              to="/es/about"
            >
              <span className="hid1050"> SOBRE KOI</span>
            </NavLink>
          </li>
          </ul>
          <ul className="nav-language">
          <li>
          <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              to="/es" title="Cambiar a Español"
            >
              <span className="hid1050"> ES </span>
            </NavLink>
          </li>
          <li><div className="footer-item">/</div></li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-not-active"
              }
              to="/en" title="Change to English"
            >
              <span className="hid1050"> EN </span>
            </NavLink>
          </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}
