import "./Nc.css";
import "./N003.css";
import imgportada_new from "../img/news/N003.png";
import imgLecker from "../img/news/N003-Lecker.png";
import imgSinmivak from "../img/news/N003-Sinmivak.png";
export default function EsN003() {
    return (
    <div className="notice-contain">
        <img className="imgportada-new" srcSet={imgportada_new} />
        <div className="portada_new_title">Refuerzos para la Superliga</div>
        <div className="portada_new_date">NOVIEMBRE 17, 2022</div>
        <div className="contain_new"><p>Con la LEC ya preparada, ahora le toca a los equipos de las <strong><em>European Regional Leagues </em>(ERL)</strong> comenzar a mover sus fichajes. La <strong>Superliga</strong>, la máxima división española de League of Legends comenzó a efectuar sus movimientos, donde algunos equipos ya destacan por su velocidad. Uno de los más ágiles parece ser <strong>KOI</strong>, quien tendrá su equipo academia en la Superliga. <strong>KOI</strong> ya tendría a dos de sus refuerzos para la Superliga, confirmando así los cambios y las intenciones del equipo español.</p><p>Jakub Rucki «<strong>Sinmivak</strong>» y Damian Konefał «<strong>Lucker</strong>» desde AGO Rogue para refozar a su equipo. El dúo de polacos llegarían a <strong>KOI </strong>para unirse a Luis Peréz «<strong>Koldo</strong>» y Daniel Binderhofer «<strong>seaz</strong>» quienes serían los que permanecerán en el equipo.</p><br/>
        <div className="img_flex">
            <div className="img_flex_item"> 
                <img className="imgLecker" srcSet={imgLecker} />
            </div>
            <div className="img_flex_item">
                <img className="imgSinmivak" srcSet={imgSinmivak} />
            </div>
        </div>
        <p>
        De esta manera, KOI y Rogue continuarán fusionando sus proyectos para el 2023, uniendo a jugadores de sus academias. Sinmivak y Lucker llegan en condición de grandes jugadores y con un talento increíble. Ambos vienen de conseguir la tercera posición en el EU Masters de primavera y de caer en grupos en verano. Han tenido un gran año en la liga polaca y con un nivel individual increíble. El propio Lucker ha sido uno de los tiradores mejor valorados de las ERL y Sinmivak más de lo mismo en su posición. El toplaner incluso habría rechazado una oferta de Inmortals, equipo de la LCS, para seguir en Europa junto a KOI Academy.
        </p><p>
        La última posición por decidir dentro del equipo sería la midlane.Se espera que el midlaner de AGO Rogue, Ardian "Nite" Spahiu, no continúe en la organización, mientras que el midlaner de KOI, Francisco José "Xico" Cruz Antunes, además de tener contrato para 2023, no podría ser el midlaner titular para el próximo año, como lo han sido los propios KOI. buscando equipos que puedan comprarlo, como Rebels Gaming, aunque no se ha mostrado interés. Ha habido conversaciones con otros midlaners, como el jugador turco Bolulu y el ahora esperado midlaner de Heretics 2023 Zwyroo, pero aún no se ha tomado una decisión.
        </p>
        <br/>
        <p><strong>La lista esperada para 2023 quedaría compuesta de la siguiente manera:</strong></p>
        <p> - Toplaner: Jakub "<strong><em>Sinmivak</em></strong>" Rucki</p>
        <p> - Jungla: Luis "<strong><em>Koldo</em></strong>" Pérez</p>
        <p> - ADC: Damian "<strong><em>Lucker</em></strong>" Konefał</p>
        <p> - Soporte: Daniel "<strong><em>seaz</em></strong>" Binderhofer</p>
        <p> - Midlaner: Sin Confirmación</p>
        <div className="line"></div>
        <a href="https://blix.gg/news/sources-koldo-lucker-and-seaz-to-join-koi-for-2023-midlane-still-undecided" target="_blank" className="new-source">Fuente: https://blix.gg/news/sources-koldo-lucker-and-seaz-to-join-koi-for-2023-midlane-still-undecided</a>
        </div>
    </div> 
    );
}