import { Fragment } from "react";
import Body from "./components/Body";
import MainText from "./components/MainText";

const Blog = () => {
  return (
    <main className="pt-[100px] xl:px-myself md:px-[100px]">
      <MainText />
      <Body />
    </main>
  );
};

export default Blog;
