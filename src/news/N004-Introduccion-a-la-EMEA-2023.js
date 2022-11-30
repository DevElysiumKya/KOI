import "./Nc.css";
import "./N004.css";
import imgportada_new from "../img/news/N004.png";
import imgN4KOI from "../img/news/N004-KOI.jpg";
export default function EsN004() {
    return (
    <div className="notice-contain">
        <img className="imgportada-new" srcSet={imgportada_new} />
        <div className="portada_new_title">Introducción a la EMEA 2023</div>
        <div className="portada_new_date">NOVIEMBRE 19, 2022</div>
        <div className="contain_new">
        <p>
        Riot Games ha revelado hoy nuevos planes para League of Legends Esports (LoL Esports) en Europa y Oriente Medio y África (EMEA), marcando el inicio de la segunda década de su existencia y un nuevo y emocionante capítulo en su historia. Los planes incluyen cambios clave en el League of Legends EMEA Championship (LEC) y la fusión de Europa, Turquía, CIS y Oriente Medio y África (MENA) para convertirse en una única región competitiva: EMEA.
        </p>
        <p>
        Con estos cambios en el ecosistema, LoL Esports aspira a convertirse en el futuro de los esports en EMEA y a mejorar el nivel de la competición en la región. Ofrecerá a más jugadores de todos los rincones de la región un camino hacia la EMEA Masters (EM) y la oportunidad de mostrar su talento a los equipos de la LEC. También ofrecerá a los aficionados de toda la EMEA mayores oportunidades de ver la competición de élite y tratará de unir a los aficionados de toda la EMEA a través de su amor por el deporte.
        </p>
        <p className="title-p"><strong>Cambios en la LEC</strong></p>
        <ul>
        <li className="lista-p">
        El LEC pasará a llamarse League of Legends EMEA Championships y experimentará una emocionante revisión de la temporada, con cambios en el formato de la competición y la introducción de las finales de temporada del LEC
        </li>
        <li className="lista-p">
        La competición se desarrollará en tres etapas: Invierno, Primavera y Verano, donde el Split de Invierno y el Split de Primavera tendrán lugar antes del MSI, y el Split de Verano y las Finales de la Temporada LEC tendrán lugar después del MSI y antes del Campeonato Mundial de League of Legends.
        </li>
        <li className="lista-p">
        Cada split comenzará con una competición de ida y vuelta al mejor de uno. A continuación, se celebrará una fase de grupos al mejor de tres y con doble eliminación, en la que participarán los ocho mejores equipos, antes de concluir con una fase de playoffs al mejor de cinco, con cuatro equipos y con doble eliminación.
        </li>
        <li className="lista-p">
        La temporada culminará con las finales de la temporada de la LEC, en las que participarán los seis mejores equipos de toda la temporada -los ganadores de los partidos se clasificarán automáticamente- y los mejores equipos de la competición se clasificarán para el Mundial. Las finales de la temporada de la LEC también contarán con un evento de exhibición en el último fin de semana de la competición.
        </li>
        </ul>
        <div className="youtube_flex">
        <iframe className="youtube_frame" src="https://www.youtube.com/embed/NAMwJNzbkNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        <img className="youtube_frame" srcSet={imgN4KOI} />
        </div>
        <p className="title-p"><strong>Ecosistema EMEA y Ligas Regionales</strong></p>
        <ul>
        <li className="lista-p">
        Europa se fusionará con Turquía, la CEI y MENA para convertirse en EMEA; una región competitiva única y unida para LoL Esports que creará un ecosistema de esports de varios niveles que establece el nivel de excelencia en la competición y el entretenimiento
        </li>
        <li className="lista-p">
        La unificación de la región hará que la TCL (Türkiye Championship League) y la AL (Arabian League, antes Intel Arabian Cup) se unan al recién renombrado circuito ERL (EMEA Regional League)
        </li>
        <li className="lista-p">
        EU Masters pasará a ser EMEA Masters (EM), una competición verdaderamente panregional, que dará a más equipos de la nueva región unificada la oportunidad de clasificarse y participar en el torneo y ofrecerá a los jugadores la oportunidad de mostrar su talento.
        </li>
        <li className="lista-p">
        Los cambios significan que todos los jugadores con estatus de residencia en Europa, Turquía, la CEI y MENA podrán competir libremente en la LEC y no estarán sujetos a la Política de Movimientos Interregionales, ofreciendo a los aspirantes a profesionales de la región más vías para llegar a la cima de la liga profesional más importante de EMEA: la LEC.
        </li>
        <li className="lista-p">
        La LCL permanecerá suspendida hasta nuevo aviso. Riot continuará supervisando el panorama y evaluará la posibilidad de incluir la liga en el ecosistema ampliado de la ERL en una fecha posterior
        </li>
        </ul>
        <div className="line"></div>
        <a href="https://esportsbureau.com/riot-games-anuncia-los-cambios-para-league-of-legends-esports-en-emea/" target="_blank" className="new-source">Fuente: https://esportsbureau.com/riot-games-anuncia-los-cambios-para-league-of-legends-esports-en-emea/</a>
        </div>
    </div> 
    );
}