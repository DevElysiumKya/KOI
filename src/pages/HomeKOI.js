import { NavLink } from "react-router-dom";
import "./HomeKOI-style.css";
import Teams from "./Teams.js";
import imgHomeKoi from "../img/normal/HomeKoi.jpg";
import Svgpartners from "../cmp/Svgpartners.js";
import kelme from "../img/home/KELME-LOGO.png";
import camiseta from "../img/home/KELME.jpg";
export default function HomeKOI() {
  return (
    <div className="Home-portada">
      <div className="HomeKoi">
      <img className="imgHomeKoi" srcSet={imgHomeKoi} />
      </div>
      <div className="precontain-partners">
      </div>
      <div className="contain-partners">
        <Svgpartners />
      </div>
      <div className="Home-div-title">
        <h4 className="Home-section-title">NOTICIAS</h4>
      </div> 
      <div className="contain-news">
        <div className="new-first">
          <div className="news-left">          
          <NavLink to="/es/news/Introduccion-a-la-EMEA-2023">
          <div className="news-overflow">
          <div className="contain_new_0">
          </div><div className="news-view-more">Leer Noticia</div>
          </div>
            <h5 className="Home-date-0">NOVIEMBRE 19, 2022</h5>
            <div className="Home-title-0">Introducción a la EMEA 2023</div>
            </NavLink>
        </div>
        <NavLink className="more-news" to="/es/news/">VÉR MAS NOTICIAS</NavLink>
        </div>
        <div className="news-right">
        <div className="news-right-item">          
          <NavLink to="/es/news/Refuerzos-para-la-Superliga">
          <div className="news-overflow-right">
          <div className="contain_new_1">
          </div><div className="news-view-more-right">Leer Noticia</div>
          </div>
            <h5 className="Home-date-0">NOVIEMBRE 17, 2022</h5>
            <div className="Home-title-0">Refuerzos para la Superliga</div>
            </NavLink>
        </div>
        <div className="news-right-item">          
          <NavLink to="/es/news/KOI-y-ROGUE-unen-fuerza">
          <div className="news-overflow-right">
          <div className="contain_new_2">
          </div><div className="news-view-more-right">Leer Noticia</div>
          </div>
            <h5 className="Home-date-0">OCTUBRE 6, 2022</h5>
            <div className="Home-title-0">KOI y ROGUE unen fuerzas</div>
            </NavLink>
        </div>
        </div>
      </div>
      <div className="contain-shop">
        <div className="news-right kelme-shop">
            <img className="kelme" srcSet={kelme} />
        </div>
        <div className="new-first"></div>
        </div>
      <div className="contain-shop">
        <div className="news-right">
            <div className="shop-title">APOYA A NUESTRO EQUIPO</div>
            <div className="shop-subtitle">Camiseta Técnica Oficial de KOI</div>
            <div className="shop-info">La primera camiseta de la historia del equipo de Ibai Llanos y Gerard Piqué. Fabricada en poliéster de primera calidad para garantizar la máxima comodidad, transpiración y ligereza. </div>
            <div className="contain-shop">
              <a className="more-news" href="https://kelme.com/es/7211-koi" target="_blank">COMPRAR AHORA</a>
            </div>
        </div>
        <div className="new-first">
            <img className="camiseta" width="100%" srcSet={camiseta} />
        </div>
      </div>
      <Teams/>
          </div>
  );
}
