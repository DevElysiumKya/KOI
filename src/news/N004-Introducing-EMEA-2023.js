import "./Nc.css";
import "./N004.css";
import imgportada_new from "../img/news/N004.png";
import imgN4KOI from "../img/news/N004-KOI.jpg";
export default function EnN004() {
    return (
    <div className="notice-contain">
        <img className="imgportada-new" srcSet={imgportada_new} />
        <div className="portada_new_title">Introducing: EMEA 2023</div>
        <div className="portada_new_date">NOVEMBER 19, 2022</div>
        <div className="contain_new">
        <p>
        Riot Games and the LEC have announced they are expanding LoL’s esports ecosystem in Europe, converting the region to EMEA (Europe, Middle East, and Africa). Europe will merge with Turkey, CIS, and MENA to become EMEA, a single and united competitive region for LoL Esports.
        </p>
        <p>
        With these ecosystem changes, LoL Esports aims to become the future of esports in EMEA and raise the level of competition in the region. It will offer more players from all corners of the region a path to the EMEA Masters (EM) and the chance to showcase their talents to LEC teams. It will also offer fans across the EMEA greater opportunities to watch elite competition and seek to unite fans across the EMEA through their love of the sport.
        </p>
        <p className="title-p"><strong>Changes in the LEC</strong></p>
        <ul>
        <li className="lista-p">
        The LEC will be renamed the League of Legends EMEA Championships and will undergo an exciting season overhaul, with changes to the competition format and the introduction of LEC Season Finals.
        </li>
        <li className="lista-p">
        The competition will take place in three stages: Winter, Spring and Summer, with the Winter Split and Spring Split taking place before MSI, and the Summer Split and LEC Season Finals taking place after MSI and before MSI. League of Legends World Championship.
        </li>
        <li className="lista-p">
        Each split will begin with a best-of-one roundtrip competition. This will be followed by a best-of-three, double-elimination group stage featuring the top eight teams, before concluding with a best-of-five, four-team, double-elimination playoff stage.
        </li>
        <li className="lista-p">
        The season will culminate in the LEC Season Finals, featuring the top six teams from the entire season - match winners will automatically qualify - and the best teams in the competition will qualify for the World Cup. The LEC season finals will also feature an exhibition event on the final weekend of the competition.
        </li>
        </ul>
        <div className="youtube_flex">
        <iframe className="youtube_frame" src="https://www.youtube.com/embed/NAMwJNzbkNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        <img className="youtube_frame" srcSet={imgN4KOI} />
        </div>
        <p className="title-p"><strong>EMEA Ecosystem and Regional Leagues</strong></p>
        <ul>
        <li className="lista-p">
        Europe will merge with Turkey, the CIS and MENA to become EMEA; a single, united competitive region for LoL Esports that will create a multi-tiered esports ecosystem that sets the bar for excellence in competition and entertainment
        </li>
        <li className="lista-p">
        The unification of the region will see the TCL (Türkiye Championship League) and AL (Arabian League, formerly Intel Arabian Cup) join the newly renamed ERL (EMEA Regional League) circuit.
        </li>
        <li className="lista-p">
        EU Masters will become EMEA Masters (EM), a truly pan-regional competition, giving more teams from the newly unified region the chance to qualify and participate in the tournament and giving players the chance to showcase their talent.
        </li>
        <li className="lista-p">
        The changes mean that all players with residency status in Europe, Turkey, the CIS and MENA will be able to compete freely in the LEC and will not be subject to the Inter-Regional Movement Policy, giving aspiring professionals from the region more avenues to reach to the top of EMEA's biggest professional league: the LEC.
        </li>
        <li className="lista-p">
        The LCL will remain suspended until further notice. Riot will continue to monitor the landscape and will evaluate the possibility of including the league in the expanded ERL ecosystem at a later date.
        </li>
        </ul>
        <div className="line"></div>
        <a href="https://esportsbureau.com/riot-games-anuncia-los-cambios-para-league-of-legends-esports-en-emea/" target="_blank" className="new-source">Source: https://esportsbureau.com/riot-games-anuncia-los-cambios-para-league-of-legends-esports-en-emea/</a>
        </div>
    </div> 
    );
}