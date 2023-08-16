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
  `url(${fandom17})`,
  `url(${fandomIU})`,
  `url(${fandomNJ})`,
  `url(${fandomBTS})`,
  `url(${fandomIVE})`,
];

const list = [
  {
    image: `url(${fandom17})`,
    tag: "조공",
    member: 982,
    title: "세븐틴 조공방",
    decription: "콘서트 조공하실 분 들어오세요~",
  },
  {
    image: `url(${fandom17_1})`,
    tag: "조공",
    member: 32,
    title: "셉틴 서울콘 서포트",
    decription:
      "7월 22일 서울 콘서트 스태프 간식 서포트 하려고 합니다. 최소 금액 제한 없으니 편하게 들어오세요!",
  },
  {
    image: `url(${fandom17_2})`,
    tag: "기부",
    member: 1255,
    title: "일본 진출 기념 기부",
    decription:
      "드디어 일본 진출한 우리 셉틴이들~ 기념으로 기부하려고 합니다! 소액이라도 와서 같이 해요~",
  },
  {
    image: `url(${fandom17_3})`,
    tag: "모임",
    member: 6,
    title: "쿱스 시사회 같이 가요",
    decription:
      "인천 시사회 8/19(토) 오후 7시에 있어요! 쿱스 보러 같이 가실 분~",
  },
  {
    image: `url(${fandom17_3})`,
    tag: "모임",
    member: 6,
    title: "쿱스 시사회 같이 가요",
    decription:
      "인천 시사회 8/19(토) 오후 7시에 있어요! 쿱스 보러 같이 가실 분~",
  },
  {
    image: `url(${fandom17_3})`,
    tag: "모임",
    member: 6,
    title: "쿱스 시사회 같이 가요",
    decription:
      "인천 시사회 8/19(토) 오후 7시에 있어요! 쿱스 보러 같이 가실 분~",
  },
];

export { rank, images, list };
