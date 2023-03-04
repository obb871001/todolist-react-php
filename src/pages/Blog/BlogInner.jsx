import { useState, useEffect, Fragment } from "react";
import TESTBG from "../../images/blogbackground/testbg.jpg";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router";
import DogeIcon from "../../images/blogChat/doge.jpeg";
import { Button, createStyles, Stack, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SendIcon from "@mui/icons-material/Send";
import useParam from "../../hooks/useParam";
import { useFindTarget } from "../../hooks/useFindTarget";
import { useDispatch, useSelector } from "react-redux";
import { POSTBlogMessage } from "../../api/POSTapi";
import { errorConfig, successConfig } from "../../utils/alert/AlertConfig";
import { useSnackbar } from "notistack";
import { GETblogList } from "../../api/GETapis";
import { StoreBlogList } from "../../redux/action/ACTION";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SettingsIcon from "@mui/icons-material/Settings";
import { DELETEBlogMessage } from "../../api/DELETEapis";
import { EDITBlogMessage } from "../../api/PUTapis";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import QuillText from "./components/QuillText";
const iconStyle = `mx-[2px] text-sm text-[#434242] cursor-pointer group-hover:text-[#918f8f] transition duration-300 hover:!text-[#fff]`;

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

const InputMessage = ({ userInfo }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const GETUID = useParam("id");
  const handleUploadMessage = () => {
    POSTBlogMessage({ message: message, uid: GETUID, userId: userInfo.uid })
      .then((res) => {
        const Ok = res.data.code === "Ok";
        if (Ok) {
          setLoading(true);

          setTimeout(() => {
            GETblogList().then((res) => {
              dispatch(StoreBlogList(res.data.blog_list));
            });
            setMessage("");
            setLoading(false);
            enqueueSnackbar(res.data.message, successConfig);
          }, 2000);
        } else {
          enqueueSnackbar(res.data.message, errorConfig);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="standard-basic"
        variant="outlined"
        color="white"
        value={message}
        autoFocus={true}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
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
      <Button
        loading
        disabled={!message || loading}
        variant="contained"
        onClick={handleUploadMessage}
        endIcon={loading ? <CircularProgress /> : <SendIcon />}
      >
        Send
      </Button>
    </Stack>
  );
};

const BlogMessage = ({
  msg,
  KEY,
  userInfo,
  GETUID,
  setSelectedIndex,
  selectedIndex,
}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [storeMessage, setStoreMessage] = useState("");

  const handleEditMessage = (message) => {
    setStoreMessage(message);
  };

  const handleDeleteMessage = (INDEX) => {
    DELETEBlogMessage({ index: INDEX, uid: GETUID })
      .then((res) => {
        const Ok = res.data.code === "Ok";
        if (Ok) {
          setLoading(true);

          setTimeout(() => {
            GETblogList().then((res) => {
              dispatch(StoreBlogList(res.data.blog_list));
            });
            setLoading(false);
            enqueueSnackbar(res.data.message, successConfig);
          }, 2000);
        } else {
          enqueueSnackbar(res.data.message, errorConfig);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div
      className={`flex items-start justify-between mb-[20px] group ${
        sessionStorage.getItem("sess_oauth") && "cursor-pointer"
      }`}
    >
      <section className="flex items-center">
        <img
          src={DogeIcon}
          className="w-[60px] h-[60px] object-fit rounded-full mr-[5px]"
        />
        <p className="mr-[5px] min-w-[85px]">{msg.userName}說：</p>
        {selectedIndex === KEY ? (
          <>
            <TextField
              id="standard-basic"
              variant="outlined"
              color="white"
              autoFocus
              onChange={(e) => setStoreMessage(e.target.value)}
              value={storeMessage}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  EDITBlogMessage({
                    index: KEY,
                    uid: GETUID,
                    msg: storeMessage,
                  })
                    .then((res) => {
                      const Ok = res.data.code === "Ok";
                      if (Ok) {
                        setLoading(true);

                        setTimeout(() => {
                          GETblogList().then((res) => {
                            dispatch(StoreBlogList(res.data.blog_list));
                          });
                          setLoading(false);
                          enqueueSnackbar(res.data.message, successConfig);
                          setSelectedIndex(-1);
                        }, 2000);
                      } else {
                        enqueueSnackbar(res.data.message, errorConfig);
                      }
                    })
                    .then((err) => console.log(err));
                }
              }}
              onBlur={() => {
                setSelectedIndex(-1);
              }}
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
          </>
        ) : (
          <p>{msg.msg}</p>
        )}
      </section>
      {userInfo.uid === msg.userId && (
        <section className="flex">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <SettingsIcon
                className={iconStyle}
                onClick={() => {
                  setSelectedIndex(KEY);
                  handleEditMessage(msg.msg);
                }}
              />
              <DeleteForeverIcon
                className={iconStyle}
                onClick={() => handleDeleteMessage(KEY)}
              />
            </>
          )}
        </section>
      )}
    </div>
  );
};

const BlogInner = () => {
  const [editKey, setEditKey] = useState();
  const GETUID = useParam("id");
  const blogList = useSelector((state) => state.isBlogList);
  const userInfo = useSelector((state) => state.isMemberInfo);
  const blogDetail = useFindTarget(blogList, "uid", GETUID);
  const decodedString = blogDetail?.message_list;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [quillText, setQuillText] = useState();
  const [editBlog, setEditBlog] = useState(false);

  useEffect(() => {
    setQuillText(blogDetail?.content);
  }, [blogDetail?.content]);
  const handleClick = (index) => {
    console.log(selectedIndex);
    setSelectedIndex(index);
  };
  return (
    <main className="pt-[100px] xl:px-myself md:px-[100px]">
      <BackToBlog />
      <section className="flex w-full">
        <section className="w-[60%] pr-[10px]">
          <img
            className="h-[300px] w-full object-fit rounded mb-[20px]"
            src={`http://localhost/MyProject1/func${blogDetail?.image}`}
          />
          <section>
            <div className="flex justify-between">
              <p className="text-[40px] font-semibold">{blogDetail?.title}</p>
              <DriveFileRenameOutlineIcon
                onClick={() => setEditBlog(!editBlog)}
                className="text-white !text-3xl hover:scale-110 transition duration-300 cursor-pointer "
              />
            </div>
            <p className="text-[14px] mb-[30px]">
              Edited By: {blogDetail?.userNAme} Date: {blogDetail?.updated_at}
            </p>
            {editBlog ? (
              <Fragment>
                <QuillText setQuillText={setQuillText} quillText={quillText} />
                <Button color="primary">修改文章</Button>
              </Fragment>
            ) : (
              <p
                className="text-[16px]"
                dangerouslySetInnerHTML={{ __html: blogDetail?.content }}
              ></p>
            )}
          </section>
        </section>
        <section className="w-[40%] pl-[10px]">
          <section className="mb-[10px]">
            <p className="text-[32px]">留言板</p>
            <div className="border-b-2 border-dotted border-gray-200"></div>
          </section>
          <section className="pt-[20px]">
            {decodedString?.map((msg, key) => {
              return (
                <BlogMessage
                  KEY={key}
                  userInfo={userInfo}
                  GETUID={GETUID}
                  msg={msg}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={(key) => handleClick(key)}
                />
              );
            })}
          </section>
          <InputMessage userInfo={userInfo} />
        </section>
      </section>
    </main>
  );
};

export default BlogInner;
