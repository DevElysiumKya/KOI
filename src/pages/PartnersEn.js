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
export default function PartnersEn() {
  return (
    <div className="root-contain-partner">
      <div className="contain-max">
        <div className="contain-partner-title"> OUR PARTNERS</div>
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
                <div className="partner-view-more">Visit Our Website</div>
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
              Finetwork is the mobile and fiber telephony operator that offers its services throughout the national territory and represents the alternative in telecommunications. 
              <br/>
              With headquarters in Elda (Alicante) and Madrid, it already has more than 850,000 clients and has revolutionized the sector by offering the best quality competitive network.
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
                <div className="partner-view-more">Visit Our Website</div>
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
              Disney+ is the streaming platform that offers entertainment from Disney, Pixar, Marvel, Star Wars and National Geographic. From exclusive originals to your favorite classics, Disney+ lets you enjoy thousands of titles at the highest quality.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            We are the world's largest technology company in annual sales but we are guided by a very simple philosophy: always work for a better tomorrow. This philosophy has inspired us for more than 70 years. Our products are always designed with an eye toward a better future.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            We are a contemporary vision of sportsmanship.
            <br/>
            Born in the garage, evolved for the track, reinvented for the streets.
            <br/>
            We are more than a car brand.
            <br/>
            We are CUPRA.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            We are a global professional esports organization owned by ReKTGlobal with offices in Charlotte, New York, and Berlin, and teams participating in Rainbow Six: Siege, Rocket League, and LoL, participating in the League of Legends European Championship (LEC).
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
                <div className="partner-view-more">Visit Our Website</div>
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
            We are the leading platform in Spain that helps all people to progress throughout their working life and companies to find the best talent.
            <br/>
            If you are looking for talent for your company, at InfoJobs we help you to enhance your reach with the best tools so that you can find the professional you need in the shortest possible time.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            DORITOS® is not just a chip. It's fuel for disruption: our flavors ignite adventure and inspire action. With every crisis, we aim to redefine culture and support those who are boldly themselves.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            We are a Spanish multinational, founded in 1987, which in a few years became a leader in home delivery service. In 1988 we opened our first store in Madrid, at that time we were pioneers in this sector within the pizza segment in Spain. And also opening stores in Poland, Portugal and Chile.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            The Rockstar Games label was founded in 1998 with the aim of creating the most innovative and cutting-edge interactive entertainment. 
            <br/>It is a wholly owned subsidiary of Take-Two Interactive Software, Inc.
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
                <div className="partner-view-more">Visit Our Website</div>
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
            We are a company dedicated to the manufacture and distribution of clothing, footwear and sports equipment, for the sports and fashion sectors, with special emphasis on team sports, especially football -soccer- and indoor, as well as a dedication to fashion trends.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
