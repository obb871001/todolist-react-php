import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GETblogList } from "../../api/GETapis";
import { StoreBlogList } from "../../redux/action/ACTION";
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
