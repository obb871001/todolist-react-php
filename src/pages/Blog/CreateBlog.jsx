import { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import QuillText from "./components/QuillText";
import SendIcon from "@mui/icons-material/Send";
import { CreatBlog } from "../../api/apis";
import axios from "axios";
import { API_URL } from "../../constant";
import { useSnackbar } from "notistack";
import { errorConfig, successConfig } from "../../utils/alert/AlertConfig";

const InputConfig = {
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
  width: "30%",
};

const CreateBlog = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState({
    title: "",
    image: {},
    content: "",
    imageName: "",
  });
  const [img, setImg] = useState();
  const { title, image, content, imageName } = data;
  const handleFileInput = (e) => {
    const IMAGE = e.target.files[0];
    setData({ ...data, imageName: e.target.files[0].name });
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(IMAGE);
    reader.onload = function () {
      const base64 = reader.result.split(",")[1];
      setData({ ...data, image: base64 });
      setSelectedFile(base64);
    };
  };

  const handleUpload = () => {
    console.log(data);
    CreatBlog({
      title: title,
      image: selectedFile,
      content: content,
      imageName: imageName,
    })
      .then((res) => {
        const obj = res.data;
        const OK = obj.code === "Ok";
        if (OK) {
          enqueueSnackbar(obj.message, successConfig);
        } else {
          enqueueSnackbar(obj.message, errorConfig);
        }
      })
      .catch((error) => console.log(error));
    // Upload logic goes here
  };
  return (
    <main className="pt-[100px] xl:px-myself md:px-[100px]">
      <DriveFileRenameOutlineIcon
        className="mb-[10px]"
        sx={{ fontSize: "40px" }}
      />
      <Typography variant="h5" gutterBottom>
        <span className="text-red-600">*</span>寫下你的想法或是紀錄生活！
      </Typography>
      <Stack sx={{ marginBottom: "20px" }}>
        <TextField
          sx={InputConfig}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
            console.log(data);
          }}
          id="demo-helper-text-aligned"
          label="標題"
        />
      </Stack>
      <Typography variant="h5" gutterBottom>
        上傳圖片
      </Typography>
      <Stack sx={{ marginBottom: "20px" }}>
        <Input sx={InputConfig} type="file" onChange={handleFileInput} />
      </Stack>
      <Typography variant="h5" gutterBottom>
        文章內容
      </Typography>
      <Stack sx={{ marginBottom: "20px" }}>
        <QuillText setData={setData} data={data} />
      </Stack>
      <Button
        variant="contained"
        onClick={() => {
          handleUpload();
        }}
        endIcon={<SendIcon />}
      >
        上傳文章！
      </Button>
    </main>
  );
};

export default CreateBlog;
