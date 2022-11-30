import { NavLink } from "react-router-dom";
import imgLOGOFooter from "../img/normal/KOI_Logo.png";
import "./FooterKOI-style.css";
import SvgTwitch from "../img/social/SvgTwitch.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import SvgYoutube from "../img/social/SvgYoutube.js";
import SvgTiktok from "../img/social/SvgTiktok.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
export default function FooterKOIEn() {
    return (
    <footer>
         <div className="footer-contain">
          <div className="footer-left">
               <div className="footer-column LogoFooter">
               <NavLink to="./"><img className="LogoFoot" srcSet={imgLOGOFooter}/></NavLink>
               </div>
               <div className="footer-column">
                    <div className="footer-title">KOI SQUAD</div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/news">News</NavLink></div>
                    <div className="footer-item"><a className="footer-link" href="https://kelme.com/es/7211-koi" target="_blank">Shop</a></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/partners">Partners</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/about">About</NavLink></div>
               </div>
          </div>
          <div className="footer-right">
               <div className="footer-column">
                    <div className="footer-title">COMMUNITY</div>
                    <div className="footer-item"><a className="footer-link" href="https://www.twitch.tv/koi"
                    target="_blank"><SvgTwitch/> Twitch</a></div>
                    <div className="footer-item"><a className="footer-link" href="https://twitter.com/KOI"
                    target="_blank"><SvgTwitter/> Twitter</a></div>
                    <div className="footer-item"><a className="footer-link" href="https://www.instagram.com/squadkoi/"
                    target="_blank"><SvgInstagram/> Instagram</a></div>
                    <div className="footer-item"><a className="footer-link" href="https://www.youtube.com/channel/UCngKrftbtipUKgbKBm94gyg"
                    target="_blank"><SvgYoutube/> Youtube</a></div>
                    <div className="footer-item"><a className="footer-link" href="https://www.tiktok.com/@squadkoi"
                    target="_blank"><SvgTiktok/> Tiktok</a></div>
               </div>
               <div className="footer-column">
                    <div className="footer-title">TEAMS</div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/teams/lol">League of Legends</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/teams/valorant">Valorant</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/teams/tft">TeamFight Tactics</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/en/teams/content-creator">Content Creators</NavLink></div>
               </div>
          </div>   
         </div>
         <div className="contain-pol">
         <div className="footer-pol">
                    <div className="footer-item">Terms of use</div>
                    <div className="footer-item">Privacy Policy</div>
                    <div className="footer-item">Cookies</div>
         </div>
         <div className="footer-copyright">
          COPYRIGHT @ 2022 KOI SQUAD. ALL RIGHTS RESERVED
         </div>

         </div>
    </footer>
    );
  }