import { useState, useEffect } from "react";
import { GetGitHub } from "../../api/githubApi";
import Title from "./Components/Title";
import GithubIcon from "../../images/icon/github-mark.png";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import axios from "axios";

const formatTime = (TIME) => {
  const time = dayjs(TIME);
  return time.format("YYYY-MM-DD HH:mm:ss");
};

const GithubCard = () => {
  const [cardList, setCardList] = useState([]);
  const [commitArrays, setCommitArrays] = useState([]);
  useEffect(() => {
    GetGitHub()
      .then((response) => {
        console.log(response.data);
        setCardList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    cardList.forEach((card) => {
      axios
        .get(`https://api.github.com/repos/obb871001/${card.name}/commits`)
        .then((response) => {
          setCommitArrays((prevCommitArrays) => [
            ...prevCommitArrays,
            response.data,
          ]);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, [cardList]);

  return (
    <section className="py-[50px] GitStyle bg-black px-myself relative">
      <div className="flex items-center justify-center mb-[30px]">
        <img src={GithubIcon} className="w-[50px] mr-[5px]" />
        <Title noMargin center t={`My GitHub`} />
      </div>
      <article className="grid grid-cols-3 gap-3">
        {cardList.map((card, index) => {
          return (
            <section
              key={index}
              className="w-[450px] h-[300px] bg-[#24292F] rounded-xl py-[20px] px-[20px]"
            >
              <div className="flex items-center justify-between mb-[10px]">
                <p className="font-semibold text-xl">{card.name}</p>
                <Button
                  onClick={() => {
                    window.open(card.html_url);
                  }}
                  size="small"
                  className="!bg-[#2EA44E] !text-white"
                >
                  View
                </Button>
              </div>
              <p className="text-[#adadad] text-sm mb-[5px]">
                {card.description}
              </p>
              <p className="mb-[10px]">上次更新:{formatTime(card.pushed_at)}</p>
              <section className="bg-[#494949] p-[10px] rounded-xl overflow-y-scroll max-h-[155px]">
                {commitArrays.map((commitArray, index) => (
                  <div key={index}>
                    {commitArray.map((commit) => {
                      return (
                        <div key={commit.sha}>
                          <p className="text-sm">
                            Commit:{" "}
                            <span
                              onClick={() => {
                                window.open(commit.html_url);
                              }}
                              className="bg-[#24292F] text-xs cursor-pointer"
                            >
                              {commit.commit.message}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </section>
            </section>
          );
        })}
      </article>
    </section>
  );
};

export default GithubCard;
