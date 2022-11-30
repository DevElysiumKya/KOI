import "./Nc.css";
import "./N001.css";
import imgportada_new from "../img/news/N001.png";
import imgVCT from "../img/news/N001-VCT.png";
import imgVCTEMEA from "../img/news/N001-VCTEMEA.png";
export default function EnN001() {
    return (
    <div className="notice-contain">
        <img className="imgportada-new" srcSet={imgportada_new} />
        <div className="portada_new_title">Accepted into Valorant partnership program</div>
        <div className="portada_new_date">SEPTEMBER 19, 2022</div>
        <div className="contain_new">
        <p>
        The acceptance period for VCT EMEA 2023 partnership is finally over, and the ten teams selected for franchising have been chosen.
        </p>
        <p>
        Our organization already entered the Valorant Scene at the beginning of 2022, participating in VALORANT Regional Leagues 2022 Spain, achieving pretty decent results in Stage 1, where they reached Semifinals and lost against eventual winners Rebels Gaming. In Stage 2, nevertheless, they had pretty bad results after losing key players such as Joona "H1ber" Parviainen, ending in 9th place but avoiding demotion.
        </p>
        <p>
        Keep in mind that teams already participating in Valorant Regional Leagues will not be allowed to field another academy team as well as their main team in VCT EMEA.
        </p>
        <img className="imgVCTEMEA" srcSet={imgVCTEMEA}/>
        <p className="title-p"><strong>VCT - EMEA</strong></p>
        <p><strong>BERLIN</strong></p>
        <p>
        EMEA is vast and wide and has an incredible FPS pedigree. We wanted a balance of teams whose reach spans the whole territory and those who hyper serve the biggest national audiences. Across both of these groups, these organizations represent the best-in-class in fan engagement, competitive operations, and business acumen. Our goal is to build local rivalries which will draw audiences through high stakes matches while growing VALORANT fandom over the long term.
        </p>
        <img className="imgvct" srcSet={imgVCT}/>
        <div className="line"></div>
        <a href="https://valorantesports.com/vct-teams" target="_blank" className="new-source">Source: https://valorantesports.com/vct-teams</a>
        <a href="https://blix.gg/news/sources-koi-accepted-into-valorant-partners" target="_blank" className="new-source">Source: https://blix.gg/news/sources-koi-accepted-into-valorant-partners</a>
        </div>
    </div> 
    );
}