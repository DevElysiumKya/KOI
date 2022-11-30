import "./About.css";
import koititle from "../img/normal/SOMOSKOI.png";
import imgFounded from "../img/about/Founded.jpg";
import imgIbai from "../img/about/Ibai.jpg";
import imgPique from "../img/about/Pique.jpg";
export default function About() {
    return (<div className="root-about">
      <div className="container-about">
            <img className="about-title" srcSet={koititle} />
      </div>
      <div className="container-about">
        <div className="about-right">
            <img className="imgfounded" srcSet={imgFounded} />
        </div>
        <div className="about-left">
          <div className="about-founded">¿QUIÉNES SOMOS?</div>
          <p className="about-f-info">
          Somos <strong>KOI</strong>, un equipo español cofundado en diciembre del 2021 por el ex locutor de la LVP <strong>Ibai Llanos</strong> y el jugador del FC Barcelona <strong>Gerard Piqué</strong>.
          <br/>
          KOI esta formado por grandes jugadores no solo con habilidades y actuaciones en el juego, sino también por carácter individual con ganas de superarse cada dia. Estas personalidades únicas de cada jugador armonizan para lograr su mejor desempeño. Así es como <strong>KOI SQUAD</strong> es una de las principales empresas emergentes en la industria de los deportes electronicos.
          </p>
        </div>
      </div>
      <div className="container-about flex-beetween">
        <div className="about-left">
            <img className="imgfounded" srcSet={imgIbai} />
            <div className="about-founded">Ibai Llanos Garatea</div>
            <p className="about-f-info">
            <strong>Ibai</strong> es un revolucionario en el entretenimiento y los deportes electrónicos, pasando a ser streamer en Twitch con más de 12 millones de seguidores.
            <br/>
            Comenzó a castear de manera profesional en 2014 tras su entrada a la LVP de la mano de su compañero y amigo <strong>Ander</strong>, gano 4 <strong>Trasgos de Oro</strong> por <strong>Mejor Caster</strong> entre el 2015 y 2018. EL 5 de febrero de 2020 se unio a <strong>G2 ESPORTS</strong> como creador de contenido, obtuvo dos <strong>Esports Awards</strong> por ser <strong>Streamer del Año</strong> y cuatro premios <strong>Esland</strong>.
            </p>
        </div>
        <div className="about-left">
            <img className="imgfounded" srcSet={imgPique} />
            <div className="about-founded">Gerard Piqué Bernabéu</div>
            <p className="about-f-info">
            <strong>Piqué</strong> es un futbolista profesional y empresario español que juega como defensa en el <strong>F.C. Barcelona</strong> de la Primera División de España.
            <br/>
            Hizo su debut profesional en el <strong>Manchester United</strong> en 2004, siendo también parte del Real Zaragoza y fichado por el <strong>FC Barcelona</strong> el 25 de mayo de 2008, obtuvo la <strong>Medalla de Oro</strong> del 2011. Fue internacional absoluto con la selección española de 2009 a 2018, totalizando 102 partidos y 5 goles, proclamándose <strong>Campeón del Mundo</strong> en 2010 y <strong>Campeón de Europa</strong> en 2012.
            </p>
        </div>
      </div>
    </div> );
  }