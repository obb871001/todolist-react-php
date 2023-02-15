import TESTBG from "../../../images/blogbackground/testbg.jpg";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router";

const BackToBlog = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center mb-[30px]">
      <ReplyIcon
        className="cursor-pointer "
        onClick={() => {
          navigate("/blog");
        }}
        fontSize="large"
      />
    </section>
  );
};

const BlogInner = () => {
  return (
    <main className="pt-[100px] xl:px-myself md:px-[100px]">
      <BackToBlog />
      <section className="w-[60%]">
        <img
          className="h-[300px] w-full object-fit rounded mb-[20px]"
          src={TESTBG}
        />
        <section>
          <p className="text-[40px] font-semibold">Title</p>
          <p className="text-[14px] mb-[30px]">Date: 20/11/11 10:20:30</p>
          <p className="text-[16px]">
            ContentContentContentContentContentContentContentContentContentContentContentContent
          </p>
        </section>
      </section>
    </main>
  );
};

export default BlogInner;
