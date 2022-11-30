import { NavLink } from "react-router-dom";
import "./News.css";
export default function NewsEn() {
    return (<div className="root-route-news">
      
      <div className="contain-head">
      <div className="header-news">
          LASTEST NEWS
      </div>
      </div>
      <div className="contain-flex-news">
      <div className="news-center">
      <div className="news-center-item">          
          <NavLink to="/en/news/Introducing-EMEA-2023">
          <div className="news-overflow-center">
          <div className="contain_n new_04">
          </div><div className="news-view-more-center">Read New</div>
          </div>
            <h5 className="new-date-0">NOVEMBER 19, 2022</h5>
            <div className="new-title-0">Introducing EMEA 2023</div>
            </NavLink>
        </div>
      </div>
      <div className="news-center">
      <div className="news-center-item">          
          <NavLink to="/en/news/KOI-draft-in-Superliga">
          <div className="news-overflow-center">
          <div className="contain_n new_03">
          </div><div className="news-view-more-center">Read New</div>
          </div>
            <h5 className="new-date-0">NOVEMBER 17, 2022</h5>
            <div className="new-title-0">KOI Draft in Superliga</div>
            </NavLink>
        </div>
      </div>
      <div className="news-center">
        <div className="news-center-item">          
          <NavLink to="/en/news/KOI-y-ROGUE-join-forces">
          <div className="news-overflow-center">
          <div className="contain_n new_02">
          </div><div className="news-view-more-center">Read New</div>
          </div>
            <h5 className="new-date-0">OCTOBER 6, 2022</h5>
            <div className="new-title-0">KOI and ROGUE join forces</div>
            </NavLink>
        </div>
      </div>
      <div className="news-center">
        <div className="news-center-item">          
          <NavLink to="/en/news/Accepted-into-Valorant-partnership-program">
          <div className="news-overflow-center">
          <div className="contain_n new_01">
          </div><div className="news-view-more-center">Read New</div>
          </div>
            <h5 className="new-date-0">SEPTEMBER 19, 2022</h5>
            <div className="new-title-0">Accepted into Valorant partnership program</div>
            </NavLink>
        </div>
      </div>
      </div>

    </div> 
    );
  }