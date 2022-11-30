import { NavLink } from "react-router-dom";
import "./HomeKOI-style.css";
import imgHomeKoi from "../img/normal/HomeKoi.jpg";
import Svgpartners from "../cmp/Svgpartners.js";
import TeamsEn from "./TeamsEn.js";
import kelme from "../img/home/KELME-LOGO.png";
import camiseta from "../img/home/KELME.jpg";
export default function HomeKOIEn() {
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
        <h4 className="Home-section-title">NEWS</h4>
      </div> 
      <div className="contain-news">
        <div className="new-first">
          <div className="news-left">          
          <NavLink to="/en/news/Introducing-EMEA-2023">
          <div className="news-overflow">
          <div className="contain_new_0">
          </div><div className="news-view-more">Read New</div>
          </div>
            <h5 className="Home-date-0">NOVEMBER 19, 2022</h5>
            <div className="Home-title-0">Introducing EMEA 2023</div>
            </NavLink>
        </div>
        <NavLink className="more-news" to="/es/news/">VIEW MORE NEWS</NavLink>
        </div>
        <div className="news-right">
        <div className="news-right-item">          
          <NavLink to="/en/news/KOI-draft-in-Superliga">
          <div className="news-overflow-right">
          <div className="contain_new_1">
          </div><div className="news-view-more-right">Read New</div>
          </div>
            <h5 className="Home-date-0">NOVEMBER 17, 2022</h5>
            <div className="Home-title-0">KOI Draft in Superliga</div>
            </NavLink>
        </div>
        <div className="news-right-item">          
          <NavLink to="/en/news/KOI-y-ROGUE-join-forces">
          <div className="news-overflow-right">
          <div className="contain_new_2">
          </div><div className="news-view-more-right">Read New</div>
          </div>
            <h5 className="Home-date-0">OCTOBER 6, 2022</h5>
            <div className="Home-title-0">KOI and ROGUE join forces</div>
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
            <div className="shop-title">SUPPORT OUR TEAM</div>
            <div className="shop-subtitle">KOI Official Technical T-shirt</div>
            <div className="shop-info">The first shirt in the history of the Ibai Llanos and Gerard Piqué team. Made of top quality polyester to ensure maximum comfort, breathability and lightness. </div>
            <div className="contain-shop">
              <a className="more-news" href="https://kelme.com/es/7211-koi" target="_blank">BUY RIGHT NOW!</a>
            </div>
        </div>
        <div className="new-first">
            <img className="camiseta" width="100%" srcSet={camiseta} />
        </div>
      </div>
      <TeamsEn/>
          </div>
  );
}
