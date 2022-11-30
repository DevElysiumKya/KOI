import "./Nc.css";
import "./N003.css";
import imgportada_new from "../img/news/N003.png";
import imgLecker from "../img/news/N003-Lecker.png";
import imgSinmivak from "../img/news/N003-Sinmivak.png";
export default function EnN003() {
    return (
    <div className="notice-contain">
        <img className="imgportada-new" srcSet={imgportada_new} />
        <div className="portada_new_title">KOI draft in Superliga</div>
        <div className="portada_new_date">NOVEMBER 17, 2022</div>
        <div className="contain_new"><p>LEC is already prepared and now it's show time for the teams of the <strong><em>European Regional Leagues </em>(ERL)</strong> to start moving their signings. The <strong>Superliga</strong>, the highest Spanish division of League of Legends, began to make its moves, where some teams already stand out for their speed. One of the most agile seems to be <strong>KOI</strong>, who will have his Academy team in the Superliga. <strong>KOI</strong> would already have two of its reinforcements for the Superliga, thus confirming the changes and the intentions of the Spanish team.</p><p>Jakub Rucki «<strong>Sinmivak</strong>» and Damian Konefał «<strong>Lucker</strong>» from AGO Rogue to reinforce their team. The Polish duo would arrive at <strong>KOI</strong> to set join Luis Peréz  «<strong>Koldo</strong>» and Daniel Binderhofer «<strong>seaz</strong>» who would remain in the team.</p><br/>
        <div className="img_flex">
            <div className="img_flex_item"> 
                <img className="imgLecker" srcSet={imgLecker} />
            </div>
            <div className="img_flex_item">
                <img className="imgSinmivak" srcSet={imgSinmivak} />
            </div>
        </div>
        <p>
        In this way, KOI and Rogue will continue to merge their projects in 2023, uniting players from their academies. Sinmivak and Lucker arrive in the condition of great players and with incredible talent. Both come from getting third place at the EU Masters in the spring and falling into groups in the summer. They have had a great year in the Polish league and with an incredible individual level. Lucker himself has been one of the highest rated shooters in the ERL and Sinmivak more of the same at his position. The toplaner would have even rejected an offer from the Immortals, an LCS team, to continue in Europe with KOI Academy.
        </p><p>
        The last position to be decided within the team would be the midlane. AGO Rogue midlaner Ardian "Nite" Spahiu is expected to not continue in the organization, while KOI midlaner, Francisco José "Xico" Cruz Antunes, besides having contract for 2023, could not be the starting midlaner for next year, as KOI themselves have been looking for teams that could buy him out, such as Rebels Gaming, although no interest has been shown. There have been talks with other midlaners, such as Turkish player Bolulu and the now expected Heretics 2023 midlaner Zwyroo, but no decision has been made yet.
        </p>
        <br/>
        <p><strong>The expected roster for 2023 would be comprised as it follows:</strong></p>
        <p> - Toplane: Jakub "<strong><em>Sinmivak</em></strong>" Rucki</p>
        <p> - Jungle: Luis "<strong><em>Koldo</em></strong>" Pérez</p>
        <p> - Adcarry: Damian "<strong><em>Lucker</em></strong>" Konefał</p>
        <p> - Support: Daniel "<strong><em>seaz</em></strong>" Binderhofer</p>
        <p> - Midlane: Still undecided</p>
        <div className="line"></div>
        <a href="https://blix.gg/news/sources-koldo-lucker-and-seaz-to-join-koi-for-2023-midlane-still-undecided" target="_blank" className="new-source">Source: https://blix.gg/news/sources-koldo-lucker-and-seaz-to-join-koi-for-2023-midlane-still-undecided</a>
        </div>
    </div> 
    );
}