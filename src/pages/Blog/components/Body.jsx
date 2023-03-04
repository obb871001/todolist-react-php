import { useNavigate } from "react-router";
import TESTBG from "../../../images/blogbackground/testbg.jpg";
import StartBackground from "../../../components/StarBackground/StarBackground";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const cardStyle =
  "h-[450px] bg-[#242424] border border-[#313131] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-gray-700";

const BlogCard = ({
  imageSrc,
  blogTitle,
  blogContent,
  blogUser,
  blogTime,
  blogUid,
}) => {
  const navigate = useNavigate();
  return (
    <section
      className={cardStyle}
      onClick={() => {
        navigate(`/blog/${blogTitle}?id=${blogUid}`);
      }}
    >
      <img
        className="h-[200px] w-full object-cover"
        src={`http://localhost/MyProject1/func${imageSrc}`}
      />
      <article className="p-2">
        <div className="items-center mb-[10px]">
          <p className="text-2xl font-semibold">{blogTitle}</p>
          <p className="text-xs">
            (筆者:{blogUser})<span>{blogTime}</span>
          </p>
        </div>
        <p
          className="text-overflow-wrap text-sm"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        ></p>
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
  const blogList = useSelector((state) => state.isBlogList);
  return (
    <main className="grid xl:grid-cols-4 md:grid-cols-3 gap-4">
      {blogList.map((blog) => {
        return (
          <Fragment key={blog.title}>
            <BlogCard
              blogContent={blog.content}
              blogTitle={blog.title}
              imageSrc={blog.image}
              blogUser={blog.userName}
              blogTime={blog.updated_at}
              blogUid={blog.uid}
            />
          </Fragment>
        );
      })}
      {sessionStorage.getItem("sess_oauth") && <AddBlog />}
    </main>
  );
};

export default Body;
