import { NavLink } from "react-router-dom";
import "./News.css";
export default function News() {
    return (<div className="root-route-news">
      
      <div className="contain-head">
      <div className="header-news">
          NOTICIAS MAS RECIENTES
      </div>
      </div>
      <div className="contain-flex-news">
      <div className="news-center">
      <div className="news-center-item">          
          <NavLink to="/es/news/Introduccion-a-la-EMEA-2023">
          <div className="news-overflow-center">
          <div className="contain_n new_04">
          </div><div className="news-view-more-center">Leer Noticia</div>
          </div>
            <h5 className="new-date-0">NOVIEMBRE 19, 2022</h5>
            <div className="new-title-0">Introducción a la EMEA 2023</div>
            </NavLink>
        </div>
      </div>
      <div className="news-center">
      <div className="news-center-item">          
          <NavLink to="/es/news/Refuerzos-para-la-Superliga">
          <div className="news-overflow-center">
          <div className="contain_n new_03">
          </div><div className="news-view-more-center">Leer Noticia</div>
          </div>
            <h5 className="new-date-0">NOVIEMBRE 17, 2022</h5>
            <div className="new-title-0">Refuerzos para la Superliga</div>
            </NavLink>
        </div>
      </div>
      <div className="news-center">
        <div className="news-center-item">          
          <NavLink to="/es/news/KOI-y-ROGUE-unen-fuerza">
          <div className="news-overflow-center">
          <div className="contain_n new_02">
          </div><div className="news-view-more-center">Leer Noticia</div>
          </div>
            <h5 className="new-date-0">OCTUBRE 6, 2022</h5>
            <div className="new-title-0">KOI y ROGUE unen fuerzas</div>
            </NavLink>
        </div>
      </div>
      <div className="news-center">
        <div className="news-center-item">          
          <NavLink to="/es/news/Aceptados-en-el-programa-de-asociación-de-Valorant">
          <div className="news-overflow-center">
          <div className="contain_n new_01">
          </div><div className="news-view-more-center">Leer Noticia</div>
          </div>
            <h5 className="new-date-0">SEPTIEMBRE 19, 2022</h5>
            <div className="new-title-0">Aceptados en el programa de asociación de Valorant</div>
            </NavLink>
        </div>
      </div>
      </div>

    </div> 
    );
  }