import { Fragment, useEffect } from "react";
import { GetGitHub } from "../../api/githubApi";
import Wrapper from "../../components/Wrapper/Wrapper";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import GithubCard from "./GithubCard";
import Main from "./Main";

const Home = () => {
  return (
    <Fragment>
      <Main />
      <AboutMe />
      <Experience />
      <GithubCard />
    </Fragment>
  );
};

export default Home;
