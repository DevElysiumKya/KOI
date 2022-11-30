import { NavLink } from "react-router-dom";
import imgLOGOFooter from "../img/normal/KOI_Logo.png";
import "./FooterKOI-style.css";
import SvgTwitch from "../img/social/SvgTwitch.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import SvgYoutube from "../img/social/SvgYoutube.js";
import SvgTiktok from "../img/social/SvgTiktok.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
export default function FooterKOI() {
    return (
    <footer>
         <div className="footer-contain">
          <div className="footer-left">
               <div className="footer-column LogoFooter">
               <NavLink to="./"><img className="LogoFoot" srcSet={imgLOGOFooter}/></NavLink>
               </div>
               <div className="footer-column">
                    <div className="footer-title">KOI SQUAD</div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/news">Noticias</NavLink></div>
                    <div className="footer-item"><a className="footer-link" href="https://kelme.com/es/7211-koi" target="_blank">Tienda</a></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/partners">Socios</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/about">Sobre nosotros</NavLink></div>
               </div>
          </div>
          <div className="footer-right">
               <div className="footer-column">
                    <div className="footer-title">COMUNIDAD</div>
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
                    <div className="footer-title">EQUIPOS</div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/teams/lol">League of Legends</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/teams/valorant">Valorant</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/teams/tft">TeamFight Tactics</NavLink></div>
                    <div className="footer-item"><NavLink className="footer-link" to="/es/teams/content-creator">Creadores de Contenido</NavLink></div>
               </div>
          </div>   
         </div>
         <div className="contain-pol">
         <div className="footer-pol">
                    <div className="footer-item">Términos y condiciones</div>
                    <div className="footer-item">Politica de Privacidad</div>
                    <div className="footer-item">Cookies</div>
         </div>
         <div className="footer-copyright">
          COPYRIGHT @ 2022 KOI SQUAD. ALL RIGHTS RESERVED
         </div>

         </div>
    </footer>
    );
  }