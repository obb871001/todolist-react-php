import TESTBG from "../../images/blogbackground/testbg.jpg";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router";
import DogeIcon from "../../images/blogChat/doge.jpeg";
import { Button, createStyles, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";

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

const InputMessage = () => {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="standard-basic"
        variant="outlined"
        color="white"
        autoFocus={true}
        sx={{
          label: {
            color: "#fff",
          },
          fieldset: {
            borderColor: "#fff",
          },
          input: {
            color: "#fff",
          },
          "&:hover": {
            fieldset: {
              borderColor: "#fff",
            },
          },
          color: "#fff",
          borderRadius: "5px",
          width: "80%",
        }}
        InputProps={{
          placeholder: "留點鹽巴",
        }}
      />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
};

const BlogMessage = () => {
  return (
    <div className="flex items-center mb-[20px] ">
      <img
        src={DogeIcon}
        className="w-[60px] h-[60px] object-fit rounded-full mr-[5px]"
      />
      <p className="mr-[5px]">說：</p>
      <p>
        喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔喔
      </p>
    </div>
  );
};

const BlogInner = () => {
  return (
    <main className="pt-[100px] xl:px-myself md:px-[100px]">
      <BackToBlog />
      <section className="flex w-full">
        <section className="w-[60%] pr-[10px]">
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
        <section className="w-[40%] pl-[10px]">
          <section className="mb-[10px]">
            <p className="text-[32px]">留言板</p>
            <div className="border-b-2 border-dotted border-gray-200"></div>
          </section>
          <section className="pt-[20px]">
            <BlogMessage />
          </section>
          <InputMessage />
        </section>
      </section>
    </main>
  );
};

export default BlogInner;
