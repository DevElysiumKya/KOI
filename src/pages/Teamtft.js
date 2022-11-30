import "./Teamtft.css";
import imgREVEN from "../img/tft/Reven.jpg";
import imgPengu from "../img/tft/pengu.png";
import SvgTwitch from "../img/social/SvgTwitch.js";
import SvgTwitter from "../img/social/SvgTwitter.js";
import SvgYoutube from "../img/social/SvgYoutube.js";
import SvgInstagram from "../img/social/SvgInstagram.js";
export default function Teamtft() {
    return (
    <div className="root-contain-tft"> 
      <div className="flex-tft">
        <img className="reven-photo" srcSet={imgREVEN} />
        <div className="container-tft">
          <svg
              className="svgtft-REVEN"
              width="255"
              height="75"
              version="1.1"
              viewBox="0 0 510 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m447.7 81.814-1.23 3.19-1.22-3.19h-1.25v4.5h0.81v-3.51l1.34 3.51h0.61l1.34-3.51v3.51h0.9v-4.5zm-8.26 0v0.71h1.38v3.79h0.87v-3.79h1.37v-0.71zm-294.02 0.01h-14.15l3 7.25-24.61 54.88h16.61l2.16-5.27 24-4.56 4.23 9.83h16.6zm-10.9 42.11h-0.08l6.66-16.25 6 13.86zm103.79-118.68v62.13h-15.89v-31.62l-13.92 16.53h-1.16l-13.84-16.53v31.62h-16v-62.13h9.33l21.17 26.72 21.64-26.72zm266.69 0-6.52 14.55h-20.18v59.1l-16.3 2.91v-62h-20.94l2.94 7.26v40.31h-16.27v-25.59l-20.94 4v21.59h-16.24v-62.13h16.24v26.31l20.94-4v-22.31zm-216.71 76.56v14.56h-18.53v47.58h-16.32v-47.58h-15.53l-6.53-14.56zm-26.11-62v9.78h24.45l-6.37 14.21h-18.08v23.58h-16.18v-62.13h42.27v14.56zm-116.47-14.56h-14.15l3 7.26-24.64 54.87h16.62l2.16-5.31 24-4.56 4.3 9.87h16.6zm-10.89 42.11h-0.08l6.66-16.24 5.95 13.85zm-52.82-27.55v9.78h24.46l-6.46 14.21h-18v9h26.12l-6.58 14.58h-35.75v-41.07l2.92-6.5h-20.71v62l-16.32-3v-59h-20.15l-6.53-14.56h103.07v14.56zm300.12 17.89v29.68l-13.83-2.43c-5.18 2.94-10.35 4.12-17.52 4.12-18.25 0-31.19-13.2-31.19-32s12.94-32 31.19-32c15.62 0 25.93 8.53 29.69 21.53h-16.75a14.39 14.39 0 0 0-12.32-6.11c-9.13 0-15.24 6.55-15.24 16.57s6.11 16.56 15.24 16.56c6.73 0 14.79-4 14.79-15.95h15.95zm-149.6 84.13c-2.8 14-13.2 23.21-30.34 23.09-18.29-0.13-31.24-13.22-31.24-32 0-18.78 12.95-32 31.24-32 15.79 0 26.17 8.7 29.85 21.92h-16.66c-2.63-4.09-7.05-6.48-12.57-6.48-9.15 0-15.27 6.57-15.27 16.6s6.12 16.6 15.27 16.6c6.1 0 10.82-2.9 13.31-7.65zm-109.82-40.02-6.52 14.56h-15.54v47.58h-16.32v-47.58h-18.53v-14.56zm293.2 23.88c18 4.5 26.31 7.81 26.31 19.36s-7.78 19.87-27.65 19.87c-20.06 0-27.78-10.32-27.78-23.09h15.72c0 6.07 4 9.65 12.06 9.65 6.19 0 10.61-2.23 10.61-5.5 0-3-4.95-4.37-12-6.27-16.93-4.54-24.65-8.57-24.65-20 0-9.13 6.09-18.9 26.07-18.9s25.66 9.77 25.66 20.33h-15.65c0-3.91-2.35-7-10-7s-9.3 2.9-9.3 5.33c0 3.1 3.63 4.42 10.64 6.17m-34.77 16.19c-2.8 14-13.21 23.21-30.34 23.09-18.29-0.13-31.25-13.22-31.25-32 0-18.78 13-32 31.25-32 15.79 0 26.16 8.7 29.85 21.92h-16.68c-2.64-4.09-7-6.48-12.58-6.48-9.14 0-15.26 6.57-15.26 16.6s6.12 16.6 15.26 16.6c6.1 0 10.83-2.9 13.31-7.65zm-85.17-116.58h16.24v62.13h-16.24zm0 76.57h16.24v62.13h-16.24z"
                fill="currentColor"
              />
            </svg>
           <h3 className="tft-title">REVEN - EL ECONOMISTA</h3>
           <div className="socialmedia-tft">
                    <div className="footer-item tft-center"><a className="footer-link" href="https://www.twitch.tv/ReventXz"
                    target="_blank"><SvgTwitch/> ReventXz</a></div>
                    <div className="footer-item tft-center"><a className="footer-link" href="https://twitter.com/Reventxz"
                    target="_blank"><SvgTwitter/> @Reventxz</a></div>
                    <div className="footer-item tft-center"><a className="footer-link" href="https://www.instagram.com/revenpedruski/"
                    target="_blank"><SvgInstagram/> revenpedruski</a></div>
                    <div className="footer-item tft-center"><a className="footer-link" href="https://www.youtube.com/LoLReven"
                    target="_blank"><SvgYoutube/> Reven</a></div>
        </div>
                    <a className="perfil-tft" href="https://lolchess.gg/profile/euw/elekoinomista" target="_blank">
                     <img className="img-Pengu" srcSet={imgPengu} /><strong>Ver Perfil EKOINOMISTA</strong></a>
           </div>
      </div>
    </div> 
    );
  }