import imgTeamValorantBG from "../img/normal/TeamValorantKoi.jpg";
import imgTeamValorantKoi from "../img/normal/TeamValorantKoi.png";
import imgValorantLogo from "../img/normal/ValorantLogo.png";
import imgKOI_PHYRN from "../img/valorant/KOI_PHYRN.png";
import imgKOI_Famsii from "../img/valorant/KOI_Famsii.png";
import imgKOI_Sakake from "../img/valorant/KOI_Sakake.png";
import imgKOI_Magnum from "../img/valorant/KOI_Magnum.png";
import imgKOI_neptuNo from "../img/valorant/KOI_neptuNo.png";
import imgKOI_Aska from "../img/valorant/KOI_Aska.png";
import imgKOI_Sikako from "../img/valorant/KOI_Sikako.png";
import imgKOI_tRRini from "../img/valorant/KOI_tRRini.png";
import ValSentinel from "../img/valorant/Sentinel.png";
import ValDuelist from "../img/valorant/Duelist.png";
import ValInitiator from "../img/valorant/Initiator.png";
import imgSpain from "../img/normal/Flag_of_Spain.svg";
import imgSweden from "../img/normal/Flag_of_Austria.svg";
import imgRepCheca from "../img/normal/Flag_of_the_Czech_Republic.svg";
import SvgTwitch from "../img/social/SvgTwitch.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
import svgBirthday from "../img/social/svgBirthday.svg";
import koititle from "../img/normal/SOMOSKOI.png";
import "./Teamlol-style.css";
import "./Scp.js";
export default function Teamvalorant() {
  return (
    <div className="teams-contain-over">
      <div className="portada-overflow">
      <div className="degradado"></div>
      <div id="KoiBG" className="imgTeamBG">
        <img
        srcSet={imgTeamValorantBG}
        width="120%"
        height="140%"/>
      </div>
      <img
        className="imgTeamLolKoi"
        srcSet={imgTeamValorantKoi}
        width="100%"
        height="auto"
      />
      <div className="TeamTitle-portada">
        <img
          id="Koiportada"
          className="imgTitleLogo"
          srcSet={imgValorantLogo}
          width="30%"
          height="auto"
        />
      </div>
      </div>
      <div className="bg-black">
      <div className="players-container">
        <h3 className="players-container-title">
            <img className="koi-title" srcSet={koititle} />
        </h3>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_Famsii}
              width="90%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Famsii</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <img
              srcSet={ValDuelist}
              width="24"
              height="24"
            /> Duelista
            </div>
            <div className="player-name">Ramses Koivukangas</div>
            <div className="player-flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11">
            <rect width="18" height="11" fill="#fff"/>
            <rect width="18" height="3" y="4" fill="#002F6C"/>
            <rect width="3" height="11" x="5" fill="#002F6C"/>
            </svg> FINLANDIA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} width="18" height="18"/> Febrero 14
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Famsii1"
                  title="Twitter - Famsii"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/ramsesk04/"
              title="Instagram - Famsii"
              target="_blank"
              >
                <SvgInstagram/>
              </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_PHYRN}
              width="90%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">PHYRN</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <img
              srcSet={ValSentinel}
              width="24"
              height="24"
            /> Centinela
            </div>
            <div className="player-name">Oskar Palmqvist</div>
            <div className="player-flag">
            <img
              srcSet={imgSweden}
              width="18"
              height="auto"
            /> SUECIA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} width="18" height="18"/> Agosto 16
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/PHYRNess"
                  title="Twitter - PHYRN"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.twitch.tv/PHYRN"
              title="Twitch - PHYRN"
              target="_blank"
              >
                <SvgTwitch/>
              </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_Magnum}
              width="90%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Magnum</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <img
              srcSet={ValSentinel}
              width="24"
              height="24"
            /> Centinela
            </div>
            <div className="player-name">Martin Penkovv</div>
            <div className="player-flag">
            <img
              srcSet={imgRepCheca}
              width="18"
              height="auto"
            /> REPÚBLICA CHECA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} width="18" height="18"/> Agosto 9
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/just_magnum"
                  title="Twitter - Magnum"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/justmagnum_/"
              title="Twitch - Magnum"
              target="_blank"
              >
                <SvgInstagram/>
              </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_neptuNo}
              width="90%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">neptuNo</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <img
              srcSet={ValSentinel}
              width="24"
              height="24"
            /> Centinela
            </div>
            <div className="player-name">Alberto González</div>
            <div className="player-flag">
            <img
              srcSet={imgSpain}
              width="18"
              height="auto"
            /> ESPAÑA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} width="18" height="18"/> Febrero 12
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Neptuno"
                  title="Twitter - neptuNo"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/neptuno/"
              title="Instagram - neptuNo"
              target="_blank"
              >
                <SvgInstagram/>
              </a>
              </li>
              <li>
              <a
              href="https://www.twitch.tv/neptuno/"
              title="Twitch - neptuNo"
              target="_blank"
              >
                <SvgTwitch/>
              </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_Sakake}
              width="90%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Sacake</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <img
              srcSet={ValInitiator}
              width="24"
              height="24"
            /> Iniciador
            </div>
            <div className="player-name">Ladislav Sachr</div>
            <div className="player-flag">
            <img
              srcSet={imgRepCheca}
              width="18"
              height="auto"
            /> REPÚBLICA CHECA
            </div>
            <div className="player-birthday">

            </div>
          </div>
          <div className="navbar-links player-social coach-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/SacakeVAL"
                  title="Twitter - Sacake"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/SacakeVAL/"
              title="Instagram - Sacake"
              target="_blank"
              >
                <SvgInstagram/>
              </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-black">
      <div className="players-container">
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_Aska}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Aska</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              HEAD COACH
            </div>
            <div className="player-name">Antonio Lozano</div>
            <div className="player-flag">
            <img
              srcSet={imgSpain}
              width="18"
              height="auto"
            /> ESPAÑA
            </div>
            <div className="player-birthday">

            </div>
          </div>
          <div className="navbar-links player-social coach-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Askattw"
                  title="Twitter - Arvindir"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_Sikako}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Sikako</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              Assist Coach
            </div>
            <div className="player-name">Sergio Rodríguez</div>
            <div className="player-flag">
            <img
              srcSet={imgSpain}
              width="18"
              height="auto"
            /> ESPAÑA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} width="18" height="18"/> Diciembre 25
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/sikak0"
                  title="Twitter - Sikako"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
                  href="https://www.instagram.com/sikak0/"
                  title="Instagram - Sikako"
                  target="_blank"
                >
                  <SvgInstagram/>
                </a>
              </li>
              <li>
              <a
                  href="https://www.twitch.tv/sikak0"
                  title="Twitch - Sikako"
                  target="_blank"
                >
                  <SvgTwitch/>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="playerbox">
          <div className="player-right">
            <img
              className="imgPlayer"
              srcSet={imgKOI_tRRini}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">tRRini</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              Manager
            </div>
            <div className="player-name">Alberto Royo</div>
            <div className="player-flag">
            <img
              srcSet={imgSpain}
              width="18"
              height="auto"
            /> ESPAÑA
            </div>
            <div className="player-birthday">

            </div>
          </div>
          <div className="navbar-links player-social coach-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/albert_royo"
                  title="Twitter - tRRini"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
