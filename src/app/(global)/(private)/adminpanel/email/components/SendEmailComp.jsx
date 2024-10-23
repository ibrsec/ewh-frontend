

"use client";
import useEmailServices from "@/lib/services/useEmailServices";
import dynamic from "next/dynamic";
import {   useState } from "react";
// import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }],
      [{ size: ["small", false, "large", "huge"] }],
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

export default function SendEmailComp( ) {
  const [content, setContent] = useState("");
  const {sendMailToEveryOne} = useEmailServices()
   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Editor content:", content); // İçeriği loglayarak kontrol
    sendMailToEveryOne({content}) // Send email to everyone
  };

  return (
    <>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        theme="snow"
      />
      <div className="flex items-center gap-1">

      <button onClick={() => setContent("")} className="primary-button-main mt-10 w-1/2">
          Clear
      </button>
      <button onClick={handleSubmit} className="primary-button-main mt-10 w-1/2">
          Gönder
      </button>
      </div>
      
    </>
  );
}



 