import imgTeamLolKoi from "../img/normal/TeamLolKoi.png";
import imgTeamLolBG from "../img/normal/TeamLolKoi.jpg";
import imgLolLogo from "../img/normal/LolLogo.png";
import imgKOI_SLT from "../img/normal/KOI_SLT.png";
import imgKOI_XICO from "../img/normal/KOI_XICO.png";
import imgKOI_WhiteKnight from "../img/normal/KOI_WhiteKnight.png";
import imgKOI_KOI_Koldo from "../img/normal/KOI_Koldo.png";
import imgKOI_KOI_Rafitta from "../img/normal/KOI_Rafitta.png";
import imgKOI_Seaz from "../img/normal/KOI_SEAZ.png";
import imgKOI_Plasma from "../img/normal/KOI_Plasma.png";
import imgKOI_Arvindir from "../img/normal/KOI_Arvindir.png";
import imgKOI_Aziado from "../img/normal/KOI_Aziado.png";
import imgPortugal from "../img/normal/Flag_of_Portugal.svg";
import imgSpain from "../img/normal/Flag_of_Spain.svg";
import imgAustria from "../img/normal/Flag_of_Austria.svg";
import imgGermany from "../img/normal/Flag_of_Germany.svg";
import SvgTwitch from "../img/social/SvgTwitch.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import SvgYoutube from "../img/social/SvgYoutube.js";
import SvgTiktok from "../img/social/SvgTiktok.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
import SvgLolpro from "../img/social/SvgLolpro.js";
import svgBirthday from "../img/social/svgBirthday.svg";
import koititle from "../img/normal/SOMOSKOI.png";
import "./Teamlol-style.css";
import "./Scp.js";
export default function Teamlol() {
  return (
    <div className="teams-contain-over">
      <div className="portada-overflow">
        <div className="degradado"></div>
      <div id="KoiBG" className="imgTeamBG">
        <img
        srcSet={imgTeamLolBG}
        width="120%"
        height="140%"/>
      </div>
      <img
        className="imgTeamLolKoi"
        srcSet={imgTeamLolKoi}
        width="100%"
        height="auto"
      />
      <div className="TeamTitle-portada">
        <img
          id="Koiportada"
          className="imgTitleLogo"
          srcSet={imgLolLogo}
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
              srcSet={imgKOI_XICO}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">XICO</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 26 26" width="24" height="24"><path opacity=".5" fill="#785a28" fill-rule="evenodd" d="M30 12.968l-4.008 4L26 26h-9l-4 4h17zM16.979 8L21 4H4v16.977L8 17V8h8.981z"/><path class="active" fill="#c8aa6e" d="M25 4L4 25v5h5L30 9V4h-5z"/></svg> MID
            </div>
            <div className="player-name">Francisco J. Cruz Antunes</div>
            <div className="player-flag">
            <img
              srcSet={imgPortugal}
              width="18"
              height="auto"
            /> PORTUGAL
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} width="18" height="18"/> Octubre 12
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://www.twitter.com/Xicoolol"
                  title="Twitter - XICO"
                  target="_blank"
                >
                  <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/xicoolol/"
              title="Instagram - XICO"
              target="_blank"
            >
              <SvgInstagram/>
            </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/xico"
                  title="XICO GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_SLT}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">SLT</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4 4 26 26"
                width="24"
                height="24"
              >
                <path
                  opacity=".5"
                  fill="#785a28"
                  fill-rule="evenodd"
                  d="M21 14h-7v7h7v-7zm5-3v15H11.014l-4 4H30V7.016z"
                />
                <path
                  class="active"
                  fill="#c8aa6e"
                  d="M4 4l.003 24.045L9 23V9h14l5.045-4.997L4 4z"
                />
              </svg>{" "}
              TOP
            </div>
            <div className="player-name">Enzo Gonzalez</div>
            <div className="player-flag">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <rect width="18" height="12" fill="#ED2939" />
                <rect width="12" height="12" fill="#fff" />
                <rect width="6" height="12" fill="#002395" />
              </svg>{" "}
              FRANCIA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} /> Noviembre 17
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Slt_lol1"
                  title="Twitter - SLT"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/salut-a-tous/"
                  title="SLT GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_WhiteKnight}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">WhiteKnight</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4 4 26 26"
                width="24"
                height="24"
              >
                <path
                  opacity=".5"
                  fill="#785a28"
                  fill-rule="evenodd"
                  d="M21 14h-7v7h7v-7zm5-3v15H11.014l-4 4H30V7.016z"
                />
                <path
                  class="active"
                  fill="#c8aa6e"
                  d="M4 4l.003 24.045L9 23V9h14l5.045-4.997L4 4z"
                />
              </svg>{" "}
              TOP
            </div>
            <div className="player-name">Matti Sormunen</div>
            <div className="player-flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11">
            <rect width="18" height="11" fill="#fff"/>
            <rect width="18" height="3" y="4" fill="#002F6C"/>
            <rect width="3" height="11" x="5" fill="#002F6C"/>
            </svg> FINLANDIA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} /> Febrero 16
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/WhiteKnight108"
                  title="Twitter - WhiteKnight"
                  target="_blank"
                >
                  <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/whiteknightlol/"
              title="Instagram - WhiteKnight"
              target="_blank"
            >
              <SvgInstagram/>
            </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/whiteknight"
                  title="WhiteKnight GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_KOI_Koldo}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Koldo</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 3 26 28" width="24" height="24"><path class="active" fill="#c8aa6e" fill-rule="evenodd" d="M25 3c-2.128 3.3-5.147 6.851-6.966 11.469A42.373 42.373 0 0120 20a27.7 27.7 0 011-3c0-4.977 1.856-8.723 4-14zM13 20c-1.488-4.487-4.76-6.966-9-9 3.868 3.136 4.422 7.52 5 12l3.743 3.312C14.215 27.917 16.527 30.451 17 31c4.555-9.445-3.366-20.8-8-28 2.67 6.573 4.717 10.342 4 17zm8 5a15.271 15.271 0 010 2l4-4c.578-4.48 1.132-8.864 5-12-5.288 2.537-7.866 7.854-9 14z"/></svg> JG
            </div>
            <div className="player-name">Luis Pérez</div>
            <div className="player-flag">
            <img
              srcSet={imgSpain}
              width="18"
              height="auto"
            /> ESPAÑA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} /> Noviembre 7
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Koldo_LoL"
                  title="Twitter - Koldo"
                  target="_blank"
                >
                  <SvgTwitter/>
                </a>
              </li>
              <li>
            <a
              href="https://www.twitch.tv/koldo_lol"
              title="Twitch - Koldo"
              target="_blank"
            >
              <SvgTwitch/>
            </a>
          </li>
              <li>
              <a
              href="https://www.instagram.com/Koldo_lol/"
              title="Instagram - Koldo"
              target="_blank"
            >
              <SvgInstagram/>
            </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/koldo"
                  title="Koldo GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_KOI_Rafitta}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Rafitta</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 26 26" width="24" height="24"><path opacity=".5" fill="#785a28" fill-rule="evenodd" d="M13 20h7v-7h-7v7zM4 4v22.984l3.955-4L8 8h14.986l4-4H4z"/><path class="active" fill="#c8aa6e" d="M29.997 5.955L25 11v14H11l-5.045 4.997L30 30l-.003-24.045z"/></svg> ADC
            </div>
            <div className="player-name">Rafa Ayllón Zapata</div>
            <div className="player-flag">
            <img
              srcSet={imgSpain}
              width="18"
              height="auto"
            /> ESPAÑA
            </div>
            <div className="player-birthday">
             <img srcSet={svgBirthday} /> Noviembre 22
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Rafitta_tt"
                  title="Twitter - Rafitta"
                  target="_blank"
                >
                  <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/rafitta_8/"
              title="Instagram - Rafitta"
              target="_blank"
            >
              <SvgInstagram/>
            </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/rafitta"
                  title="Rafitta GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_Seaz}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Seaz</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 3 34 28"
                width="24"
                height="24"
              >
                <path class="active" fill="#c8aa6e" fill-rule="evenodd" d="M26 13c3.535 0 8-4 8-4H23l-3 3 2 7 5-2-3-4h2zm-4-8l-1.173-2h-7.765L12 5l5 6zm-5 9l-1-1-3 15 4 3 4-3-3-15zm-6-5H0s4.465 4 8 4h2l-3 4 5 2 2-7z"/>
              </svg> SUP
            </div>
            <div className="player-name">Daniel Binderhofer</div>
            <div className="player-flag">
            <img
              srcSet={imgAustria}
              width="18"
              height="auto"
            /> AUSTRIA
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} /> Diciembre 17
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/seazlol"
                  title="Twitter - Seaz"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/seaz/"
                  title="Seaz GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_Plasma}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Plasma</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 3 34 28"
                width="24"
                height="24"
              >
                <path class="active" fill="#c8aa6e" fill-rule="evenodd" d="M26 13c3.535 0 8-4 8-4H23l-3 3 2 7 5-2-3-4h2zm-4-8l-1.173-2h-7.765L12 5l5 6zm-5 9l-1-1-3 15 4 3 4-3-3-15zm-6-5H0s4.465 4 8 4h2l-3 4 5 2 2-7z"/>
              </svg> SUP
            </div>
            <div className="player-name">Pedro Simões Ribeiro</div>
            <div className="player-flag">
            <img
              srcSet={imgPortugal}
              width="18"
              height="auto"
            /> PORTUGAL
            </div>
            <div className="player-birthday">
            <img srcSet={svgBirthday} /> Junio 28
            </div>
          </div>
          <div className="navbar-links player-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/PlasmaLemon"
                  title="Twitter - Plasma"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/plasma-lemon"
                  title="Plasma GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
              srcSet={imgKOI_Arvindir}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Arvindir</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
              HEAD COACH
            </div>
            <div className="player-name">Danusch Fischer</div>
            <div className="player-flag">
            <img
              srcSet={imgGermany}
              width="18"
              height="auto"
            /> ALEMANIA
            </div>
            <div className="player-birthday">

            </div>
          </div>
          <div className="navbar-links player-social coach-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/Arvindir_lol"
                  title="Twitter - Arvindir"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
                  href="https://www.instagram.com/arvindirlol/"
                  title="Instagram - Arvindir"
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
              srcSet={imgKOI_Aziado}
              width="100%"
              height="auto"
            />
          </div>
          <div className="predownside">
            <div className="player-nick">Aziado</div>
          </div>
          <div className="player-downside">
          <div className="player-left">
            <div className="player-lane">
            Assist Coach
            </div>
            <div className="player-name">Tiago Rodrigues</div>
            <div className="player-flag">
            <img
              srcSet={imgPortugal}
              width="18"
              height="auto"
            /> PORTUGAL
            </div>
            <div className="player-birthday">

            </div>
          </div>
          <div className="navbar-links player-social coach-social">
            <ul>
              <li>
                <a
                  href="https://twitter.com/AziadoLoL"
                  title="Twitter - Aziado"
                  target="_blank"
                >
                 <SvgTwitter/>
                </a>
              </li>
              <li>
              <a
                  href="hhttps://www.instagram.com/aziadolol/"
                  title="Instagram - Aziado"
                  target="_blank"
                >
                  <SvgInstagram/>
                </a>
              </li><li>
              <a
                  href="https://lolpros.gg/player/aziado"
                  title="Aziado GG"
                  target="_blank"
                >
                  <SvgLolpro/>
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
};
