"use client";
import { htmlToDelta } from "@/helpers/htmlToDelta";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
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
      ["image"],
      ["link"],
      ["clean"],
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

export default function QuilEditEditor({ content, setContent }) {
  // const [content, setContent] = useState("");
  // useEffect(()=>{
  //   setInputs({...inputs,content:content})
  // },[content])
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Editor content:", content); // İçeriği loglayarak kontrol
  // };

  const quillRef = useRef(null);

  const loadContentIntoQuill = (html) => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor(); // Quill instance'a eriş
      const delta = editor.clipboard.convert(html); // HTML'den Delta'ya çevir
      editor.setContents(delta, "silent"); // İçeriği yükle
    }
  };

  loadContentIntoQuill(content);


  return (
    <>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
        theme="snow"
      /> 
    </>
  );
}
