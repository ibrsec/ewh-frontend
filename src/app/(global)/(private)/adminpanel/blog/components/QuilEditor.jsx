
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      ["image"],['link'],['clean'],
    ],
    handlers: {
      image: imageHandler,
    },
  },
};

// Custom handler for inserting image URLs
function imageHandler() {
  const url = prompt("Enter the image URL");
  if (url) {
    const quill = this.quill;
    const range = quill.getSelection();
    quill.insertEmbed(range.index, "image", url);
  }
}

export default function QuilEditor({content, setContent}) {
  // const [content, setContent] = useState("");
  // useEffect(()=>{
  //   setInputs({...inputs,content:content})
  // },[content])
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Editor content:", content); // İçeriği loglayarak kontrol
  // };


  return (
    <>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        theme="snow"
      />
      {/* <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
          Gönder  
      </button> */}
    </>
  );
}
