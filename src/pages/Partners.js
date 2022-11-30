import "./HomeKOI-style.css";
import "./Partners.css";
import SvgArrowgo from "../img/normal/SvgArrowgo.js";
import SvgFacebook from "../img/social/SvgFacebook.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import Svgpartners from "../cmp/Svgpartners.js";
import Finetwork from "../img/partners/0-Finetwork.jpg";
import Disney from "../img/partners/0-Disney.jpg";
import Samsung from "../img/partners/0-Samsung.jpg";
import Cupra from "../img/partners/0-Cupra.jpg";
import Infojobs from "../img/partners/0-Infojobs.jpg";
import Telepizza from "../img/partners/0-Telepizza.jpg";
import Doritos from "../img/partners/0-Doritos.jpg";
import Rockstar from "../img/partners/0-Rockstar.jpg";
import Rogue from "../img/partners/0-Rogue.jpg";
import Kelme from "../img/partners/0-Kelme.jpg";
export default function Partners() {
  return (
    <div className="root-contain-partner">
      <div className="contain-max">
        <div className="contain-partner-title"> NUESTROS SOCIOS</div>
      </div>

      <div className="contain-partners2">
        <Svgpartners />
      </div>
      <div className="contain-max">
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.finetwork.com/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Finetwork} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/finetworkcom/"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/Finetwork"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/finetwork/?hl=es"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">FINETWORK</div><a
                href="https://www.finetwork.com/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
              Finetwork es el operador de telefonía móvil y fibra que ofrece sus
              servicios en todo el territorio nacional y representa la
              alternativa en las telecomunicaciones. 
              <br/>
              Con sede en Elda (Alicante) y Madrid, cuenta ya con más de 850.000 clientes y ha revolucionado el sector ofreciendo la mejor red competitiva de calidad.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.disneyplus.com/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Disney} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/disneyplusla/"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/disneyplusla"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/disneyplusla/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
          <div className="flex-title">
            <div className="partner-title">DISNEY +</div><a
                href="https://www.disneyplus.com/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Disney+ es la plataforma de streaming que ofrece entretenimiento de Disney, Pixar, Marvel, Star Wars y National Geographic. Desde originales exclusivos hasta tus clásicos favoritos, Disney+ te permite disfrutar miles de títulos con la mejor calidad.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.samsung.com/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Samsung} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/SamsungGlobal"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/samsung"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/samsung/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">SAMSUNG</div><a
                href="https://www.samsung.com/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Somos la empresa de tecnología más grande del mundo en ventas anuales pero nos guiamos por una filosofía muy simple: trabajar siempre por un mejor mañana. Esta filosofía nos ha inspirado por más de 70 años. Nuestros productos están siempre diseñados con la mirada puesta en un futuro mejor.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.cupraofficial.es/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Cupra} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/CUPRA.Mex"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/cupra"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/cupra_official/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">CUPRA</div><a
                href="https://www.cupraofficial.es/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Somos una visión contemporánea de la deportividad.
            <br/>
            Nacido en el garaje, evolucionado para la pista, reinventado para las calles.
            <br/>
            Somos más que una marca de coches.
            <br/>
            Somos CUPRA.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://rogue.gg/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Rogue} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/RogueGG/"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/Rogue"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/roguegg/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">ROGUE</div><a
                href="https://rogue.gg/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Somos una organización profesional mundial de deportes electrónicos propiedad de ReKTGlobal con oficinas en Charlotte, Nueva York y Berlín, y equipos que participan en Rainbow Six: Siege, Rocket League y LoL, participando en la League of Legends European Championship (LEC).
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.infojobs.net/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Infojobs} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/InfoJobs/"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/InfoJobs"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/infojobs/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">INFOJOBS</div><a
                href="https://www.infojobs.net/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Somos la plataforma líder en España que ayuda a todas las personas a progresar a lo largo de su vida laboral y a las empresas a encontrar el mejor talento.
            <br/>
            Si buscas talento para tu empresa, en InfoJobs te ayudamos a potenciar tu alcance las mejores herramientas para que encuentres al profesional que necesitas en el menor tiempo posible.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="http://doritos.com/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Doritos} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/DoritosMX"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/doritoses"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://instagram.com/doritos"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">DORITOS</div><a
                href="http://doritos.com/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            DORITOS® no es solo un chip. Es combustible para la disrupción: nuestros sabores encienden la aventura e inspiran la acción. Con cada crisis, nuestro objetivo es redefinir la cultura y apoyar a aquellos que son audazmente ellos mismos.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.telepizza.es/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Telepizza} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/telepizza/"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/telepizza_es"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/telepizza_es/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">TELEPIZZA</div><a
                href="https://www.telepizza.es/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Somos una multinacional española, fundada en 1.987 que en pocos años se convirtió en líder de servicio de comida preparada a domicilio. En 1988 abrimos nuestra primera tienda en Madrid, en aquellos momentos fuimos pioneros en este sector dentro del segmento pizza en España. Y también abriendo tiendas en Polonia, Portugal Y Chile.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://www.rockstargames.com/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Rockstar} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/rockstargames"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/RockstarGames"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/rockstargames/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">ROCKSTAR GAMES</div><a
                href="https://www.rockstargames.com/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            El sello Rockstar Games fue fundado en 1998 con el fin de crear el ocio interactivo más innovador y vanguardista. 
            <br/>Es una filial propiedad de Take-Two Interactive Software, Inc.
            </div>
          </div>
        </div>
        <div className="box-partner-item">
          <div className="partner-left">
            <a className="img-head"
                href="https://kelme.com/"
                target="_blank"
              >
                <img className="imgPartner-item" srcSet={Kelme} />
                <div className="partner-view-more">Visitar Sitio Web</div>
            </a>
            <div className="social-partners">
              <a
                href="https://www.facebook.com/kelmesports/"
                target="_blank"
              >
                <SvgFacebook />
              </a>
              <a
                href="https://twitter.com/kelmesports"
                target="_blank"
              >
                <SvgTwitter />
              </a>
              <a
                href="https://www.instagram.com/kelmesports/"
                target="_blank"
              >
                <SvgInstagram />
              </a>
            </div>
          </div>
          <div className="partner-right">
            <div className="flex-title">
            <div className="partner-title">KELME</div><a
                href="https://kelme.com/"
                target="_blank"
              ><SvgArrowgo/></a></div>
            <div className="partner-info">
            Somos una empresa dedicada a la fabricación y distribución de ropa, calzado y equipamiento deportivo, para los sectores del deporte y la moda, con especial énfasis en los deportes de equipo, en especial el fútbol -soccer- e indoor, además de una dedicación a las tendencias de la moda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
