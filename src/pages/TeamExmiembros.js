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
export default function TeamExmiembros() {
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
      
    <script src="./Scp.js" defer></script>
      </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="18"
                height="18"
                fill="#f90"
              >
                <path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z" />
              </svg> Octubre 12
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>
              <li>
              <a
              href="https://www.instagram.com/xicoolol/"
              title="Instagram - XICO"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
              </li>
              <li>
              <a
                  href="https://lolpros.gg/player/xico"
                  title="XICO GG"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1824.62 1824.62" width="22" height="22"><path d="M1752.89 557.17a915.83 915.83 0 00-196.43-290.88c-83.75-83.75-181.29-148.6-289.94-194.55A906.72 906.72 0 00911.37 0a932.32 932.32 0 00-155.64 13v224.87a712.94 712.94 0 01155.64-17c190.63 0 364.25 77.71 489.45 202.91s202.91 297.88 202.91 488.5a688.33 688.33 0 01-40.58 233.47c-96 266.71-351.49 458-650.84 458a689.18 689.18 0 01-156.58-18.44v226a917 917 0 00156.58 13.38c123.11 0 242.61-24.13 355.15-71.73a911 911 0 00557.16-840.58c0-123.18-24.13-242.67-71.73-355.21z" fill="currentColor"/><path d="M1233.15 591.47c-82.2-82.19-195.68-133.1-320.84-133.1a451.14 451.14 0 00-233.47 64.78c-131.69 79.31-220.07 223.53-220.46 388.06v792.68l.43.25a912.88 912.88 0 00220 90.35v-232.4l.11-166.9h-.11v-249.41l.42-.42h-.15l.15-233v-1.1c.6-128 104.9-232 233-232a233.31 233.31 0 01233 233c0 128.51-104.54 233-233 233h-156.5v220.9h156.58c165 0 309.68-88.48 389.17-220.48a451.23 451.23 0 0064.78-233.47c0-125.05-50.91-238.54-133.11-320.74z" fill="#eee"/><path d="M380.68 1145.78h-120C235 1071.2 220.9 993.38 220.9 912.31c0-299.35 191.23-555.68 457.94-651.65V30.13A913.64 913.64 0 0030 1145.36l.12.42a913.1 913.1 0 0090.59 220.48h260z" fill="currentColor"/></svg>
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
  );
};
