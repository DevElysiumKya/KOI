import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./cmp/Navbar";
import NavbarEn from "./cmp/NavbarEn";
import CursorCustom from "./cmp/CursorCustom";
import FooterKOI from "./cmp/FooterKOI";
import FooterKOIEn from "./cmp/FooterKOIEn";
import HomeKOI from "./pages/HomeKOI";
import HomeKOIEn from "./pages/HomeKOI-EN";
import About from "./pages/About";
import AboutEn from "./pages/AboutEn";
import NotFound from "./pages/NotFound";
import Teams from "./pages/Teams";
import TeamsEn from "./pages/TeamsEn";
import Teamlol from "./pages/Teamlol";
import Shop from "./pages/Shop";
import Partners from "./pages/Partners";
import PartnersEn from "./pages/PartnersEn";
import Teamvalorant from "./pages/Teamvalorant";
import Teamtft from "./pages/Teamtft";
import Teamcontent from "./pages/Teamcontent";
import TeamExmiembros from "./pages/TeamExmiembros";
import News from "./pages/News";
import NewsEn from "./pages/NewsEn";
import EsN001 from "./news/N001-Aceptados-en-el-programa-de-asociación-de-Valorant";
import EnN001 from "./news/N001-Accepted-into-Valorant-partnership-program";
import EsN002 from "./news/N002-KOI-y-ROGUE-unen-fuerzas";
import EnN002 from "./news/N002-KOI-y-ROGUE-join-forces";
import EsN003 from "./news/N003-Refuerzos-para-la-Superliga";
import EnN003 from "./news/N003-KOI-draft-in-Superliga";
import EsN004 from "./news/N004-Introduccion-a-la-EMEA-2023";
import EnN004 from "./news/N004-Introducing-EMEA-2023";
export default function App() {
  return (
    <HashRouter>
    <CursorCustom/>
      <Routes>
        <Route path="/es/*" element={<Navbar/>} />
        <Route path="/en/*" element={<NavbarEn/>} />
        <Route path="/*" element={<Navbar/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<HomeKOI/>} />
        <Route path="/es/" element={<HomeKOI/>} />
        <Route path="/en/" element={<HomeKOIEn/>} />
        <Route path="/news" element={<News/>}/>
        <Route path="/es/news" element={<News/>}/>
        <Route path="/en/news" element={<NewsEn/>}/>


        <Route path="/news/Aceptados-en-el-programa-de-asociación-de-Valorant" element={<EsN001/>}/>
        <Route path="/es/news/Aceptados-en-el-programa-de-asociación-de-Valorant" element={<EsN001/>}/>
        <Route path="/en/news/Accepted-into-Valorant-partnership-program" element={<EnN001/>}/>
        <Route path="/news/KOI-y-ROGUE-unen-fuerza" element={<EsN002/>}/>
        <Route path="/es/news/KOI-y-ROGUE-unen-fuerza" element={<EsN002/>}/>
        <Route path="/en/news/KOI-y-ROGUE-join-forces" element={<EnN002/>}/>
        <Route path="/news/Refuerzos-para-la-Superliga" element={<EsN003/>}/>
        <Route path="/es/news/Refuerzos-para-la-Superliga" element={<EsN003/>}/>
        <Route path="/en/news/KOI-draft-in-Superliga" element={<EnN003/>}/>
        <Route path="/news/Introduccion-a-la-EMEA-2023" element={<EsN004/>}/>
        <Route path="/es/news/Introduccion-a-la-EMEA-2023" element={<EsN004/>}/>
        <Route path="/en/news/Introducing-EMEA-2023" element={<EnN004/>}/>

        <Route path="/news/*" element={<Navigate to="/news"/>}/>
        <Route path="/es/news/*" element={<Navigate to="/es/news"/>}/>


        <Route path="/shop" element={<Shop/>}/>
        <Route path="/es/shop" element={<Shop/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/es/teams" element={<Teams/>}/>
        <Route path="/en/teams" element={<TeamsEn/>}/>
        <Route path="/teams/lol" element={<Teamlol/>}/>
        <Route path="/es/teams/lol" element={<Teamlol/>}/>
        <Route path="/en/teams/lol" element={<Teamlol/>}/>
        <Route path="/teams/valorant" element={<Teamvalorant/>}/>
        <Route path="/es/teams/valorant" element={<Teamvalorant/>}/>
        <Route path="/en/teams/valorant" element={<Teamvalorant/>}/>
        <Route path="/teams/tft" element={<Teamtft/>}/>
        <Route path="/es/teams/tft" element={<Teamtft/>}/>
        <Route path="/en/teams/tft" element={<Teamtft/>}/>
        <Route path="/teams/content-creator" element={<Teamcontent/>}/>
        <Route path="/es/teams/content-creator" element={<Teamcontent/>}/>
        <Route path="/en/teams/content-creator" element={<Teamcontent/>}/>
        <Route path="/teams/Exmiembros" element={<TeamExmiembros/>}/>
        <Route path="/es/teams/Exmiembros" element={<TeamExmiembros/>}/>
        <Route path="/teams/*" element={<Navigate to="/teams"/>}/>
        <Route path="/es/teams/*" element={<Navigate to="/es/teams"/>}/>

        

        <Route path="/partners" element={<Partners/>}/>
        <Route path="/es/partners" element={<Partners/>}/>
        <Route path="/en/partners" element={<PartnersEn/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/es/about" element={<About/>}/>
        <Route path="/en/about" element={<AboutEn/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Routes>
        <Route path="/es/*" element={<FooterKOI/>} />
        <Route path="/en/*" element={<FooterKOIEn/>} />
        <Route path="/*" element={<FooterKOI/>} />
      </Routes>
    </HashRouter>
  );
}
