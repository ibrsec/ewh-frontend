"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { MdOutlineEditCalendar } from "react-icons/md";

import { toastWarnNotify } from "@/helpers/toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SpinnerOne from "@/components/spinner/SpinnerOne";
import useBlogServices from "@/lib/services/useBlogServices";
import QuilEditEditor from "./QuilEditEditor";

const BlogEditModal = ({ open, setOpen, choosedBlog }) => {
  const { getOneBlogApi } = useBlogServices();
  const askedblog = useSelector((state) => state.blog.blog);
  useEffect(() => {
    if (open) {
      getOneBlogApi(choosedBlog?._id);
    }
  }, [open]);

  const { updateBlog } = useBlogServices();
  const loading = useSelector((state) => state.blog.loading);

  console.log("choosedBlog", choosedBlog);
  const [inputs, setInputs] = useState({
    title: choosedBlog?.title || "",
    author: choosedBlog?.author || "",
    shortDescription: choosedBlog?.shortDescription || "",
    order: choosedBlog?.order || "",
    content: askedblog?.content || "",
    imageFile: null,
  });
  useEffect(() => {
    setInputs({
      title: choosedBlog?.title || "",
      author: choosedBlog?.author || "",
      shortDescription: choosedBlog?.shortDescription || "",
      order: choosedBlog?.order || "",
      content: askedblog?.content || "",
      imageFile: null,
    });
    setContent(askedblog?.content);
    console.log("choosedBlog", choosedBlog);
  }, [choosedBlog, open, askedblog]);

  const [content, setContent] = useState(askedblog?.content);
  useEffect(() => {
    setInputs({ ...inputs, content: content });
  }, [content]);

  const handleChange = (e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value });
    const { name, value, files } = e.target;
    setInputs({
      ...inputs,
      [name]: files ? files[0] : value, // Dosya seçildiyse `files` kullanılır
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
    //check if fields are entered
    if (
      !inputs.title ||
      !inputs.author ||
      !inputs.shortDescription ||
      !inputs.content ||
      !inputs.order
    ) {
      toastWarnNotify("All fields are required - except imageFile!");
      return;
    }

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

    updateBlog(choosedBlog?._id, inputs);

    //reset input fields

    setContent("");

    setInputs({
      title: "",
      shortDescription: "",
      author: "",
      order: "",
      imageFile: null,
      content: "",
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center  ">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95  border border-dark-red shadow-dark-red"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4   ">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-transparent sm:mx-0 sm:h-10 sm:w-10 ">
                  <MdOutlineEditCalendar
                    className="text-dark-red"
                    size="45px"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold  leading-6 text-dark-red"
                  >
                    Update {choosedBlog?.title} blog
                  </DialogTitle>
                  <div className="mt-2">
                    <form
                      className="my-5 flex  justify-center flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-5">
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
                        {inputs.title.length > 150 && (
                          <span className="px-2 text-xs text-red-500">
                            Blog Title 150 karakteri geçemez!
                          </span>
                        )}
                      </div>
                      <div className="mb-5">
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
                        <input
                          type="file"
                          id="imageFile"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
                          required={false}
                          name="imageFile"
                          placeholder="Image File*"
                          onChange={handleChange}
                        />
                        <div className="">Image - max 5 MB size limit</div>
                        <div className="">
                          Image is not required for update!
                        </div>
                      </div>

                      <div className="mb-5">
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

                        <div className="">
                          Manual order - number - example: 5!
                        </div>
                      </div>

                      <div className="mb-5">
                        <textarea
                          type="text"
                          id="shortDescription"
                          className={
                            "bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 min-h-[170px] "
                          }
                          required={true}
                          name="description"
                          placeholder="Short Description* - max 350 char length"
                          value={inputs.shortDescription}
                          onChange={handleChange}
                        >
                          Short Description max: 350
                        </textarea>
                        {inputs.shortDescription.length > 350 && (
                          <span className="px-2 text-xs text-red-500">
                            Short Description 350 karakteri geçemez!
                          </span>
                        )}
                      </div>

                      <div className="w-full">
                        <QuilEditEditor
                          content={content}
                          setContent={setContent}
                        />
                      </div>

                      <div className="mt-3 w-9/12 flex items-center gap-2">
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => setOpen(false)}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red active:bg-orange hover:text-gray-100 active:text-gray-100 sm:mt-0 sm:w-auto transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          className="text-white bg-dark-red hover:bg-red active:bg-orange transition-all py-2 px-16 w-full text-sm font-semibold rounded-lg"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? <SpinnerOne /> : "Update"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default BlogEditModal;
