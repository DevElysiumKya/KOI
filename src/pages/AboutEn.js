import "./About.css";
import koititle from "../img/normal/SOMOSKOI.png";
import imgFounded from "../img/about/Founded.jpg";
import imgIbai from "../img/about/Ibai.jpg";
import imgPique from "../img/about/Pique.jpg";
export default function AboutEn() {
    return (<div className="root-about">
      <div className="container-about">
            <img className="about-title" srcSet={koititle} />
      </div>
      <div className="container-about">
        <div className="about-right">
            <img className="imgfounded" srcSet={imgFounded} />
        </div>
        <div className="about-left">
          <div className="about-founded">ABOUT US</div>
          <p className="about-f-info">
          We are <strong>KOI</strong>, a Spanish team co-founded in December 2021 by former LVP announcer <strong>Ibai Llanos</strong> and FC Barcelona player <strong>Gerard Piqué</strong>.
          <br/>
          KOI is made up of unstopable players with not just in-game skills and performances, but also individual character. These unique personalities of each player grouped up together harmonize to output their best performance. This is how <strong>KOI SQUAD</strong> is considered to be one of the top rising ventures in the e-sports industry.
          </p>
        </div>
      </div>
      <div className="container-about flex-beetween">
        <div className="about-left">
            <img className="imgfounded" srcSet={imgIbai} />
            <div className="about-founded">Ibai Llanos Garatea</div>
            <p className="about-f-info">
            <strong>Ibai</strong> has been a game changer in entertainment and esports and became a streamer on Twitch with over 12 million followers.
            <br/>
            He began casting professionally in 2014 after joining the LVP at the hands of his partner and friend Ander, he won 4 Trasgos de Oro for Best Caster between 2015 and 2018. On February 5, 2020 he joined G2 ESPORTS as content creator, garnered two Esports Awards for Streamer of the Year and four Esland Awards.
            </p>
        </div>
        <div className="about-left">
            <img className="imgfounded" srcSet={imgPique} />
            <div className="about-founded">Gerard Piqué Bernabéu</div>
            <p className="about-f-info">
            <strong>Piqué</strong>  is a Spanish professional footballer and businessman who plays as a defender for <strong>F.C. Barcelona</strong> of the First Division of Spain.
            <br/>
            He made his professional debut at Manchester United in 2004, also being part of Real Zaragoza and signed by FC Barcelona on May 25, 2008, he obtained the Gold Medal in 2011. He was an absolute international with the Spanish team from 2009 to 2018, totaling 102 games and 5 goals, proclaiming himself World Champion in 2010 and European Champion in 2012.
            </p>
        </div>
      </div>
    </div> );
  }