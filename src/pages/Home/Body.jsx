import reactIcon from "../../images/icon/react.png";
import phpIcon from "../../images/icon/php.png";
import gitIcon from "../../images/icon/git.svg";
import tailwindCss from "../../images/icon/tailwindcss.png";

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

const Experience = () => {
  return (
    <section>
      <p className="font-bold text-[50px]">Experience</p>
    </section>
  );
};

const Body = () => {
  return (
    <section className="bg-black pt-[100px] h-[100vh] px-myself relative">
      <SkillCard />
      <Experience />
    </section>
  );
};

export default Body;
