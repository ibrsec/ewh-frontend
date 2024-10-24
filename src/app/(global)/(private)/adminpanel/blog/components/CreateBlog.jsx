"use client";

import SpinnerOne from "@/components/spinner/SpinnerOne";
import { toastWarnNotify } from "@/helpers/toastify";
import useBlogServices from "@/lib/services/useBlogServices"; 
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuilEditor from "./QuilEditor";

const CreateBlog = () => {
  const loading = useSelector((state) => state.team.loading);
  const { createBlogApi } = useBlogServices();
  const [inputs, setInputs] = useState({
    title: "",
    shortDescription: "",
    author: "",
    order: "",
    imageFile: null,
    content : "",
  });
  

const [content, setContent] = useState("");
useEffect(()=>{
  setInputs({...inputs,content:content})
},[content])


  const handleChange = (e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value });
    const { name, value, files } = e.target;
    setInputs({
      ...inputs,
      [name]: files ? files[0] : value, // Dosya seçildiyse `files` kullanılır
    });
  };

  //handling submit login form
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    //check if fields are entered
    if (
      !inputs.title ||
      !inputs.author ||
      !inputs.shortDescription ||
      !inputs.imageFile ||
      !inputs.content ||
      !inputs.order
    ) {
      toastWarnNotify("All fields are required!");
      return;
    }
    // console.log(inputs);

    //length restricts!
    if (inputs.title.length > 150) { 
      toastWarnNotify("title 100 karakteri geçemez!");
      return; 
    }
    if (inputs.author.length > 100) {
      toastWarnNotify("author 100 karakteri geçemez!");
      return;
    }
    if (inputs.shortDescription.length > 350) {
      toastWarnNotify("Description 350 karakteri geçemez!");
      return;
    }

    // const formPayload = new FormData();
    // for (let key in inputs) {
    //   formPayload.append(key, inputs[key]);
    // }

    createBlogApi(inputs);

    //reset input fields
    // setInputs({
    //     title: "",
    //     shortDescription: "",
    //     author: "",
    //     order: "",
    //     imageFile: null,
    //     content : "",
    // });
    // setContent("");
  };
 

  return (
    <form
      className=" w-full rounded-lg shadow-xl border border-dark-red shadow-dark-red pt-4 pb-12 px-5 mt-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8 mt-10 ">
        Create new Blog!
      </h3>

      <div className="mb-5">
        <label htmlFor="title">Blog Title:</label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="title"
          placeholder="Blog title*  - max 150 char length"
          value={inputs.title}
          onChange={handleChange}
        />
        {inputs.title.length >150 && (
          <span className="px-2 text-xs text-red-500">
            Blog Title 150 karakteri geçemez!
          </span>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="author"
          placeholder="Author* - max 100 char length"
          value={inputs.author}
          onChange={handleChange}
        />

        {inputs.author.length > 100 && (
          <span className="px-2 text-xs text-red-500">
            Author 100 karakteri geçemez!
          </span>
        )}
      </div>

      <div className="mb-12">
        <label htmlFor="imageFile">Blog Main Image:</label>
        <input
          type="file"
          id="imageFile"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="imageFile"
          placeholder="Image File*"
          onChange={handleChange}
        />
        <div className="">Image - max 5 MB size limit</div>
        <div className="">
          - cozunurluk (oran olarak yaklasik): 1080-768, 1920- 1080 (cok oneli
          degil onizleme var)(genislik daha buyuk olacak)
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="order">Order:</label>
        <input
          type="number"
          id="order"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="order"
          placeholder="Order* - manual order as number"
          value={inputs.order}
          onChange={handleChange}
        />

        <div className="">Manual order - number - example: 5!</div>
      </div>

      <div className="mb-5">
        <label htmlFor="shortDescription">Short Description:</label>
        <textarea
          type="text"
          id="shortDescription"
          className={
            "bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 min-h-[170px] "
          }
          required={true}
          name="shortDescription"
          placeholder="Blog shortDescription* - max 350 char length"
          value={inputs.shortDescription}
          onChange={handleChange}
        >
          Blog shortDescription max: 350
        </textarea>
        {inputs.shortDescription.length > 350 && (
          <span className="px-2 text-xs text-red-500">
            Blog shortDescription 350 karakteri geçemez!
          </span>
        )}
      </div>

      <label htmlFor="">Blog Content:</label>
      <QuilEditor content={content} setContent={setContent}/>

      <button
        type="submit"
        className="primary-button-main w-full mt-8 text-lg"
        disabled={loading}
      >
        {loading ? <SpinnerOne /> : "Submit"}
      </button>
    </form>
  );
};

export default CreateBlog;
