import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import reactIcon from "../../images/icon/react.png";
import phpIcon from "../../images/icon/php.png";
import gitIcon from "../../images/icon/git.svg";
import tailwindCss from "../../images/icon/tailwindcss.png";
import Title from "./Components/Title";
import MYSELF from "../../images/myself/MYSELF.jpg";
import { Fragment } from "react";
import { useSnackbar } from "notistack";
import { successConfig } from "../../utils/alert/AlertConfig";
import { motion, useAnimation, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};
const SkillCard = () => {
  const skillList = [
    { name: "React.js", Img: reactIcon, introduce: "Redux,Router,Hooks API" },
    { name: "PHP", Img: phpIcon, introduce: "開發經驗0~1年" },
    { name: "TailwindCss", Img: tailwindCss, introduce: "加速開發速度" },
    { name: "Git", Img: gitIcon, introduce: "使用Git進行版本管控" },
  ];
  return (
    <section className="grid grid-cols-4 w-[1300px] shadow rounded bg-[#2b2b2b] absolute top-[0%] left-[50%] transform-translate-center p-[20px] px-[50px]">
      {skillList.map((skill) => {
        return (
          <div className="w-[250px] shadow bg-[#373737] h-[75px] mx-[25px] p-[10px] rounded flex items-center hover:scale-105 transition duration-300 cursor-pointer">
            <img
              className="w-[80px] h-[60px] object-contain mr-[10px]"
              src={skill.Img}
            />
            <div className="flex flex-col justify-between h-full text-white">
              <p className="font-bold text-[20px]">{skill.name}</p>
              <p className=" text-[12px]">{skill.introduce}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
const Introduce = () => {
  const [copied, setCopied] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleCopy = () => {
    navigator.clipboard.writeText("iiwwpr1@gmail.com");
    enqueueSnackbar("Copy success!", successConfig);
    setCopied(true);
  };
  return (
    <section className="w-1/2">
      <div>
        <p>
          我叫<span className="text-2xl font-semibold">郭尚霖</span>
          ，2021/06畢業於實踐大學資訊模擬與設計系，
          主要是在學習動畫與遊戲方面的，但本身對於系上的教學不太感興趣，畢業後剛好有機會接觸到前端這份工作，也就開始我的程式人生。
        </p>
        <br />
        <p>
          目前是前端工程師，使用React.js、Redux資料統一管理、TailwindCss加速開發、REST
          API，開發方面有獨立開發前後台的經驗，目標是成為全端工程師，目前正在學習後端語言(PHP)，閒暇之餘會開發一些作品。
        </p>
        <br />
        <p>如果有興趣或是想一起開發歡迎聯絡我：Ｄ</p>
        <br />
        <p className="text-xl font-bold">
          email: iiwwpr1@gmail.com{" "}
          <Button
            className="bg-0 !min-w-unset"
            variant="contained"
            size="small"
            color="primary"
            onClick={handleCopy}
          >
            <ContentCopyIcon />
          </Button>
          <br />
          <p
            className="mt-[10px] cursor-pointer"
            onClick={() => window.open("https://github.com/obb871001/")}
          >
            github: https://github.com/obb871001/
          </p>
        </p>
      </div>
    </section>
  );
};

const ProfileImage = () => {
  return (
    <section className="w-1/2 flex items-center justify-center">
      <img src={MYSELF} className="w-[400px] rounded-xl object-fit" />
    </section>
  );
};

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Fragment>
      <article className="bg-black py-[70px] px-myself relative">
        <SkillCard />
        <Title t="About Me" />
        <motion.section
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <section className="flex">
            <Introduce />
            <ProfileImage />
          </section>
        </motion.section>
      </article>
    </Fragment>
  );
};

export default AboutMe;
