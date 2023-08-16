import up from "../asset/img/up.svg";
import down from "../asset/img/down.svg";
import rank17 from "../asset/img/Rank_Seventeen.png";
import rankEXO from "../asset/img/Rank_EXO.png";
import rankBTS from "../asset/img/Rank_BTS.png";
import fandomEXO from "../asset/img/FandomList_EXO.png";
import fandom17 from "../asset/img/FandomList_Seventeen.png";
import fandomIU from "../asset/img/FandomList_IU.png";
import fandomNJ from "../asset/img/FandomList_NewJeans.png";
import fandomBTS from "../asset/img/FandomList_BTS.png";
import fandomIVE from "../asset/img/FandomList_IVE.png";
import fandom17_1 from "../asset/img/MyFandomList_Seventeen1.png";
import fandom17_2 from "../asset/img/MyFandomList_Seventeen2.png";
import fandom17_3 from "../asset/img/MyFandomList_Seventeen3.png";

const rank = [
  {
    fanclub: "방탄소년단",
    image: rankBTS,
    count: 17432,
    rising: "-",
    ranking: 1,
  },
  {
    fanclub: "세븐틴",
    image: rank17,
    count: 12879,
    rising: (
      <>
        <img src={up} alt="up" />1
      </>
    ),
    ranking: 2,
  },
  {
    fanclub: "엑소",
    image: rankEXO,
    count: 9473,
    rising: (
      <>
        <img src={down} alt="down" />1
      </>
    ),
    ranking: 3,
  },
];

const images = [
  `url(${fandomEXO})`,
  `url(${fandom17_2})`,
  `url(${fandom17})`,
  `url(${fandomIU})`,
  `url(${fandomNJ})`,
  `url(${fandom17_1})`,
  `url(${fandom17_1})`,
  `url(${fandomBTS})`,
  `url(${fandom17_3})`,
  `url(${fandomIVE})`,
  `url(${fandom17_1})`,
];

const list = [
  `url(${fandom17_3})`,
  `url(${fandom17_2})`,
  `url(${fandom17_1})`,
  `url(${fandom17})`,
  `url(${fandom17_1})`,
  `url(${fandom17_1})`,
  `url(${fandom17_1})`,
  `url(${fandom17_1})`,
  `url(${fandom17})`,
  `url(${fandom17_1})`,
  `url(${fandom17_2})`,
  `url(${fandom17_3})`,
  `url(${fandom17_1})`,
  `url(${fandom17_1})`,
];

export { rank, images, list };
