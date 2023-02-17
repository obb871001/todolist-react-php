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
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
  };

  const handleUpload = () => {
    console.log(selectedFile);
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
        <QuillText />
      </Stack>
      <Button variant="contained" endIcon={<SendIcon />}>
        上傳文章！
      </Button>
    </main>
  );
};

export default CreateBlog;
