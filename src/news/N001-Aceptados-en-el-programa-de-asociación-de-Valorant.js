import "./Nc.css";
import "./N001.css";
import imgportada_new from "../img/news/N001.png";
import imgVCT from "../img/news/N001-VCT.png";
import imgVCTEMEA from "../img/news/N001-VCTEMEA.png";
export default function EsN001() {
    return (
    <div className="notice-contain">
        <img className="imgportada-new" srcSet={imgportada_new} />
        <div className="portada_new_title">Aceptados en el programa de asociación de Valorant</div>
        <div className="portada_new_date">SEPTIEMBRE 19, 2022</div>
        <div className="contain_new">
        <p>
        El período de aceptación para la asociación VCT EMEA 2023 finalmente ha terminado y se han elegido los diez equipos seleccionados para la franquicia.
        </p>
        <p>
        Nuestra organización ya ingresó a la Escena Valorant a principios de 2022, participando en las Ligas Regionales de VALORANT 2022 España, logrando resultados bastante decentes en la Etapa 1, donde llegamos a Semifinales y perdiendo contra los eventuales ganadores Rebels Gaming. En la Etapa 2, sin embargo, tuvimos resultados bastante malos después de perder a jugadores clave como Joona "H1ber" Parviainen, terminando en el noveno lugar pero evitando la degradación.
        </p>
        <p>
        Se debe tener en cuenta que los equipos que ya participan en las Ligas Regionales de Valorant no podrán presentar otro equipo de la academia además de su equipo principal en VCT EMEA.
        </p>
        <img className="imgVCTEMEA" srcSet={imgVCTEMEA}/>
        <p className="title-p"><strong>VCT - EMEA</strong></p>
        <p><strong>BERLIN</strong></p>
        <p>
        La región de EMEA es vasta y tiene un increíble pedigrí en cuanto a los FPS. Queríamos un balance de equipos cuyo alcance abarcara todo el territorio y cuya emoción atrajera a las mayores audiencias nacionales. En ambos grupos, estas organizaciones representan lo mejor de su categoría en cuanto a participación de los fans, operaciones competitivas y capacidad empresarial. Nuestro objetivo es crear rivalidades locales que atraigan al público a través de partidas de alto nivel y que hagan crecer la afición de VALORANT a largo plazo.
        </p>
        <img className="imgvct" srcSet={imgVCT}/>
        <div className="line"></div>
        <a href="https://valorantesports.com/vct-teams" target="_blank" className="new-source">Fuente: https://valorantesports.com/vct-teams</a>
        <a href="https://blix.gg/news/sources-koi-accepted-into-valorant-partners" target="_blank" className="new-source">Fuente: https://blix.gg/news/sources-koi-accepted-into-valorant-partners</a>
        </div>
    </div> 
    );
}