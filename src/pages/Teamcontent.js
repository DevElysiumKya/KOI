import imgBarbeQ from "../img/creators/BarbeQ.jpg";
import imgAnder from "../img/creators/Ander.jpg";
import imgKnekro from "../img/creators/Knekro.jpg";
import imgCarola from "../img/creators/Carola.jpg";
import imgAxozer from "../img/creators/Axozer.jpg";
import imgKarchez from "../img/creators/Karchez.jpg";
import imgAmph from "../img/creators/Amph.jpg";
import imgJuanGuarnizo from "../img/creators/JuanGuarnizo.jpg";
import imgRiobo from "../img/creators/Riobo.jpg";
import imgSusyroxx from "../img/creators/Susyroxx.jpg";
import imgLakshartNia from "../img/creators/LakshartNia.jpg";
import imgMayichi from "../img/creators/Mayichi.jpg";
import imgElisawaves from "../img/creators/Elisawaves.jpg";
import imgPandarina from "../img/creators/Pandarina.jpg";
import imgKOI_Plasma from "../img/normal/KOI_Plasma.png";
import imgKOI_Arvindir from "../img/normal/KOI_Arvindir.png";
import imgKOI_Aziado from "../img/normal/KOI_Aziado.png";
import imgGalicia from "../img/normal/Flag_of_Galicia.png";
import imgSpain from "../img/normal/Flag_of_Spain.svg";
import imgColombia from "../img/normal/Flag_of_Colombia.svg";
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
export default function Teamcontent() {
    return (
      <div className="teams-contain-over">
        <div className="players-container">
          <h3 className="players-container-title">
              <img className="koi-title" srcSet={koititle} />
          </h3>
          <div className="playerbox">
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgBarbeQ}
                width="330px"
                height="270px"
              />
            </div>
            <div className="predownside">
              <div className="player-nick"> Barbe q</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
              Director de Contenido
              </div>
              <div className="player-name">Ernesto Folch Casanoves</div>
              <div className="player-flag">
              <img srcSet={svgBirthday} width="18" height="18"/> Diciembre 30 <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/ernesbarbeq"
                    title="Twitch - BarbeQ"
                    target="_blank"
                  >
                    <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.twitter.com/barbesito"
                    title="Twitter - BarbeQ"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/barbeq"
                    title="Youtube - BarbeQ"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                href="https://instagram.com/barbesito"
                title="Instagram - BarbeQ"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgAnder}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Ander</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Ander Cortés</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Julio 25
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
              <li>
                <a
                    href="https://www.twitch.tv/tvandeR"
                    title="Twitch - Ander"
                    target="_blank"
                  >
                    <SvgTwitch/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/andercortes"
                    title="Twitter - Ander"
                    target="_blank"
                  >
                   <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@AnderCortes/"
                    title="Youtube - Ander"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/andercortes5/"
                    title="Instagram - Ander"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgKarchez}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Karchez</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">José Carlos Sánchez</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Agosto 4
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/karchez"
                    title="Twitch - Karchez"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/Karchezzz"
                    title="Twitter - Karchez"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/c/karchez"
                    title="Youtube - Karchez"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/karchezz/"
                    title="Instagram - Karchez"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgKnekro}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">KNeKro</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Sergio García</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Mayo 23
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/knekro"
                    title="Twitch - KNeKro"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/KNekro"
                    title="Twitter - KNeKro"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/user/KNekroGamer"
                    title="Youtube - KNeKro"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/knekro_/?hl=es"
                    title="Instagram - KNeKro"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgCarola}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Carola</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Viene de Reddit</div>
              <div className="player-flag">
              <img
                srcSet={imgGalicia}
                width="18"
                height="auto"
              /> GALICIA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Junio 6
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/carola"
                    title="Twitch - Carola"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/TheCarolos"
                    title="Twitter - Carola"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@carola2183"
                    title="Youtube - Carola"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/thecarolos/"
                    title="Instagram - Carola"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgLakshartNia}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Lakshart Nia</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Nira Isabel</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Octubre 31
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/lakshartnia"
                    title="Twitch - Lakshart Nia"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/LakshartNia"
                    title="Twitter - Lakshart Nia"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/user/LakshartNia"
                    title="Youtube - Lakshart Nia"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/lakshartniayt/"
                    title="Instagram - Lakshart Nia"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgAmph}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Amph</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Anay González</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Octubre 26
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/Amph"
                    title="Twitch - Amph"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/VisualsAmph"
                    title="Twitter - Amph"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@amph"
                    title="Youtube - Amph"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/visualsamph/"
                    title="Instagram - Amph"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgJuanGuarnizo}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">JuanSGuarnizo</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Juan Sebastián Guarnizo</div>
              <div className="player-flag">
              <img
                srcSet={imgColombia}
                width="18"
                height="auto"
              /> COLOMBIA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Enero 11
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/juansguarnizo"
                    title="Twitch - JuanSGuarnizo"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/JuanSGuarnizo"
                    title="Twitter - JuanSGuarnizo"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@JuanSGuarnizo/"
                    title="Youtube - JuanSGuarnizo"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/juansguarnizo/"
                    title="Instagram - JuanSGuanizo"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgRiobo}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Rioboo</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Jose Riobó</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Mayo 14
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/rioboo"
                    title="Twitch - Rioboo"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/rioboo/"
                    title="Twitter - Rioboo"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/c/rioboo"
                    title="Youtube - Rioboo"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/rioboooooo/"
                    title="Instagram - Rioboo"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgSusyroxx}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Suzyroxx</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Susana Roxxana</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Septiembre 16
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/suzyroxx"
                    title="Twitch - Suzyroxx"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/Suzyroxx"
                    title="Twitter - Suzyroxx"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@Suzyroxx/featured"
                    title="Youtube - Suzyroxx"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/suzyroxx/"
                    title="Instagram - Suzyroxx"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgMayichi}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Mayichi</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Maite Carrillo</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Noviembre 13
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/mayichi"
                    title="Twitch - Mayichi"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/Mayichii/"
                    title="Twitter - Mayichi"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@Mayichi/"
                    title="Youtube - Mayichi"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/mayichiii/"
                    title="Instagram - Mayichi"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgElisawaves}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Elisa Waves</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Elisa Peña</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> ??
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/elisawaves"
                    title="Twitch - Elisa Waves"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/elisawavesrp"
                    title="Twitter - Elisa Waves"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@ElisaWavesRoleplay/"
                    title="Youtube - Elisa Waves"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/elisawaves/"
                    title="Instagram - Elisa Waves"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgPandarina}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">Pandarina</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">Marina Barba</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Enero 26
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/ipandarina"
                    title="Twitch - Pandarina"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/iPandarina"
                    title="Twitter - Pandarina"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/channel/UCZY6UTmr_OcUd7P4XuQka6w"
                    title="Youtube - Pandarina"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/ipandarina/"
                    title="Instagram - Pandarina"
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
            <div className="player-rightcc">
              <img
                className="imgPlayercc"
                srcSet={imgAxozer}
                width="100%"
                height="auto"
              />
            </div>
            <div className="predownside">
              <div className="player-nick">aXoZer</div>
            </div>
            <div className="player-downside">
            <div className="player-left">
              <div className="player-lane">
                Content Creator
              </div>
              <div className="player-name">???????</div>
              <div className="player-flag">
              <img
                srcSet={imgSpain}
                width="18"
                height="auto"
              /> ESPAÑA
              </div>
              <div className="player-birthday">
              <img srcSet={svgBirthday} /> Diciembre 18
              </div>
            </div>
            <div className="navbar-links player-social">
              <ul>
                <li>
                  <a
                    href="https://www.twitch.tv/axozer/"
                    title="Twitch - aXoZer"
                    target="_blank"
                  >
                   <SvgTwitch/>
                  </a>
                </li>
                <li>
                <a
                    href="https://twitter.com/aXoZerr"
                    title="Twitter - aXoZer"
                    target="_blank"
                  >
                    <SvgTwitter/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/@aXoZer"
                    title="Youtube - aXoZer"
                    target="_blank"
                  >
                    <SvgYoutube/>
                  </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/axozerr/"
                    title="Instagram - aXoZer"
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
    )
    ;
  }