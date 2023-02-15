import { useNavigate } from "react-router";
import TESTBG from "../../images/blogbackground/testbg.jpg";
import StartBackground from "./StartBackground";

const cardStyle =
  "h-[450px] bg-[#242424] border border-[#313131] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-gray-700";

const BlogCard = () => {
  const navigate = useNavigate();
  return (
    <section
      className={cardStyle}
      onClick={() => {
        navigate("/blog/123");
      }}
    >
      <img className="h-[200px] w-full " src={TESTBG} />
      <article className="p-2">
        <p className="text-2xl font-semibold mb-[5px]">標題標題標題</p>
        <p className="text-overflow-wrap text-sm">
          內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
          內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
          內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
        </p>
      </article>
    </section>
  );
};

const Body = () => {
  return (
    <main className="grid xl:grid-cols-4 md:grid-cols-3 gap-4">
      <BlogCard />
    </main>
  );
};

export default Body;
