import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HTMLIcon from "../../../images/timelineIcon/HTML5.png";
import CSSIcon from "../../../images/timelineIcon/CSS3.png";
import JSIcon from "../../../images/timelineIcon/Javascript.png";
import JQIcon from "../../../images/timelineIcon/Jquery.png";
import DevelopIcon from "../../../images/timelineIcon/Develop.png";
import HelmetIcon from "../../../images/timelineIcon/Helmet.png";
import ReactIcon from "../../../images/timelineIcon/REACT.png";
import ReduxIcon from "../../../images/timelineIcon/REDUX.png";
import TailwindIcon from "../../../images/timelineIcon/TAILWIND.png";
import GitIcon from "../../../images/timelineIcon/Git.png";
import CodeIcon from "../../../images/timelineIcon/code.png";
import PHPIcon from "../../../images/timelineIcon/PHP.png";
import GOIcon from "../../../images/timelineIcon/Golang.png";
import FutureIcon from "../../../images/timelineIcon/Future.png";
import NextjsIcon from "../../../images/timelineIcon/Nextjs.png";
import AWSIcon from "../../../images/timelineIcon/AWS.png";

const imageStyle = "w-[40px] object-fit mr-[10px]";
const Skill = [
  {
    Title: "開啟我的程式之路！",
    Time: "2021/06 - NOW",
    secondTitle: false,
    MainIcon: DevelopIcon,
    InnerContent: (
      <>
        <section className="flex items-center">
          <img src={HTMLIcon} className={imageStyle} />
          <img src={CSSIcon} className={imageStyle} />
          <img src={JSIcon} className={imageStyle} />
        </section>
        <p className="text-sm">
          每天持之以恆的學習，從在網路上查看HTML標籤的各式功能、css的排版教學、如何用js做出網頁互動，期許自己也能成為一位厲害的開發者，並且回饋給社會以及身邊的人！
        </p>
      </>
    ),
  },
  {
    Title: "開始接觸JQuery,方便抓取DOM元素",
    Time: "2021/07 - 2021/11",
    secondTitle: "配合公司使用語言",
    MainIcon: JQIcon,
    InnerContent: (
      <section>
        <p className="text-sm">
          學習到基本的function功能，以及抓取DOM元素。
          JQuery抓元素比起javascript還方便，讓我在學習上比較輕鬆也不太容易遇到貧頸。
        </p>
      </section>
    ),
  },
  {
    Title: "成為男人(草莓)的四個月！",
    Time: "2021/11 - 2022/02",
    secondTitle: "該怎麼克服軍中的無聊呢？",
    MainIcon: HelmetIcon,
    InnerContent: (
      <section>
        <p className="text-sm">
          當兵的四個月讓我中斷了程式碼的學習，雖然在軍中有閱讀前端框架的相關書籍，但沒有實作讓我對於框架應用有看沒有懂，雖說很無聊，但這四個月確認我確立了人生方向以及變得更加成熟了！
        </p>
      </section>
    ),
  },
  {
    Title: "退伍了？還不快找回打程式碼的手感啊？",
    Time: "2022/03 - 2022/05",
    secondTitle: "回公司開始正式參與公司專案",
    MainIcon: CodeIcon,
    InnerContent: (
      <section>
        <p className="text-sm">
          這兩個月是我程式碼的邏輯蛻變最大時期，當兵時期看不懂的react框架書籍，這期間可能對於JQuery應用上比較熟悉，所以對於框架的邏輯應用在腦中開始慢慢萌芽了！
        </p>
      </section>
    ),
  },
  {
    Title: "開始在公司應用前端框架，實現前後端分離",
    Time: "2022/06 - NOW",
    secondTitle: "因為專案的需求，主動學習使用React.js！",
    MainIcon: ReactIcon,
    InnerContent: (
      <>
        <section className="flex items-center">
          <img src={ReactIcon} className={imageStyle} />
          <img src={ReduxIcon} className={imageStyle} />
          <img src={TailwindIcon} className={imageStyle} />
          <img src={GitIcon} className={imageStyle} />
        </section>
        <p className="text-sm">
          這對於我是個大膽的挑戰，因為我開始專案時我對於React.js框架並不熟悉，且公司主要使用的框架是JQuery，但這段開發的契機卻是讓我的前端實現了大突破。
          這段時間我獨自開發web前台、後台、串接API，對於套件(Ant
          Design)使用也有一定的經驗，串接API的過程讓我對後端萌生了興趣。
          <br />
          也因為自己開始在公司建立Github的版控習慣，讓我自己對於解決衝突以及流程更加熟悉，讓開發效率更上一層樓！
          <br />
          心中決定在過年後開始學習後端語言！目標成為全端工程師。
        </p>
      </>
    ),
  },
  {
    Title: "學習後端！開始嘗試獨立開發",
    Time: "2023/02 - NOW",
    secondTitle: "期許自己成為更厲害的開發者",
    MainIcon: PHPIcon,
    InnerContent: (
      <>
        <p className="text-sm">
          在剛開始寫網站時，我就期許自己也能寫出一個網站，前後端都是由自己寫出來的，也許是這股想法埋在心裡很久了，在過年的這段期間決定年後開始自己學習後端。這個網站也是我的第一份作品，我希望給自己的第一份作品是我當初心中想實現的目標！
        </p>
      </>
    ),
  },
  {
    Title: "學習後端！開始接觸後端語言以及資料庫並且嘗試獨立開發",
    Time: "2023/02 - NOW",
    secondTitle: "期許自己成為更厲害的開發者",
    MainIcon: PHPIcon,
    InnerContent: (
      <>
        <p className="text-sm">
          在剛開始寫網站時，我就期許自己也能寫出一個網站，前後端都是由自己寫出來的，也許是這股想法埋在心裡很久了，在過年的這段期間決定年後開始自己學習後端。這個網站也是我的第一份作品，我希望給自己的第一份作品是我當初心中想實現的目標！
        </p>
      </>
    ),
  },
  {
    Title: "未來展望",
    Time: "NOW >>>>>>>",
    secondTitle: "",
    MainIcon: FutureIcon,
    InnerContent: (
      <>
        <section className="flex items-center">
          <img src={GOIcon} className={imageStyle} />
          <img src={NextjsIcon} className={imageStyle} />
          <img src={AWSIcon} className={imageStyle} />
        </section>

        <p className="text-sm">
          這段話告訴五年後的我(30歲)：加油！程式開發是沒有盡頭的，持續學習。
        </p>
      </>
    ),
  },
];

const Timeline = () => {
  return (
    <VerticalTimeline>
      {Skill.map((Description, key) => {
        return (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                key % 2 === 0 ? "rgb(33, 150, 243)" : "rgb(255 176 0)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight:
                key % 2 === 0
                  ? "7px solid  rgb(33, 150, 243)"
                  : "7px solid rgb(255 176 0)",
            }}
            date={Description.Time}
            iconStyle={{
              background:
                key % 2 === 0 ? "rgb(33, 150, 243)" : "rgb(255 176 0)",
              color: "#fff",
            }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  className="max-w-[40px] w-full object-fit"
                  src={Description.MainIcon}
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title mb-[10px]">
              {Description.Title}
            </h3>
            {Description.InnerContent}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
