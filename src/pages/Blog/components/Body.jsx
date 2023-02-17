import { useNavigate } from "react-router";
import TESTBG from "../../../images/blogbackground/testbg.jpg";
import StartBackground from "../../../components/StarBackground/StarBackground";
import AddBoxIcon from "@mui/icons-material/AddBox";

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

const AddBlog = () => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate("/createblog")}
      className={`${cardStyle} flex items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <AddBoxIcon className="!text-[100px]" />
        <p>新增文章</p>
      </div>
    </section>
  );
};

const Body = () => {
  return (
    <main className="grid xl:grid-cols-4 md:grid-cols-3 gap-4">
      <BlogCard />
      <AddBlog />
    </main>
  );
};

export default Body;
