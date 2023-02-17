import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";

// Quill.register("modules/fontSize", FontSize);

const theme = {
  toolbar: {
    color: "#fff",
  },
};

const QuillText = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const toolbarOptions = [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ size: ["small", false, "large", "huge"] }], // 新增 size 選項
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
      ];

      Quill.register(Quill.import("formats/size"), true); // 引入 size 格式
      const editor = new Quill(editorRef.current, {
        theme: "snow",
        modules: { toolbar: toolbarOptions },
      });
      editor.on("text-change", (delta, oldDelta, source) => {
        const html = editorRef.current.querySelector(".ql-editor").innerHTML;
        console.log("HTML:", html);
      });
    }
  }, [editorRef]);

  return (
    <div>
      <div ref={editorRef} style={{ height: "400px" }} />
    </div>
  );
};

export default QuillText;
