"use client";
import { capitalize } from "@/helpers/capitalize";
import useBlogServices from "@/lib/services/useBlogServices";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { toastSuccessNotify } from "@/helpers/toastify";
import { formatliTarih } from "@/helpers/formatDate";
import DOMPurify from "dompurify";
import Spinner from "@/components/spinner/Spinner";

const BlogDetailPage = ({ params }) => {
  const { getOneBlogApi } = useBlogServices();
  const blog = useSelector((state) => state.blog.blog);
  const loading = useSelector((state) => state.blog.loading);
  useEffect(() => {
    getOneBlogApi(params?.id);
    // eslint-disable-next-line
  }, []);

  const handleCopyTheUrl = (event) => {
    event.preventDefault(); // Bağlantının varsayılan davranışını engelle
    const urlToCopy = window.location.href;

    // URL'yi kopyalama işlemi
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        toastSuccessNotify("Bağlantı kopyalandı");
      })
      .catch((err) => {
        console.error("Kopyalama hatası:", err);
      });
  };


  const cleanHTML = DOMPurify.sanitize(blog?.content);


  
  if(loading){
    return <div className=" my-20 text-center"><Spinner /></div>
  }

  return (
    <div className=" max-w-6xl mx-auto px-2 mb-16 flex flex-col gap-5 poppins-font">
      <h3 className="text-4xl md:text-5xl my-20 font-bold  ">
        {blog?.title}
      </h3>

      {/* short desc */}
      <p className="text-md md:text-lg indent-8 text-justify my-5">
        {blog?.shortDescription}
      </p>
      <div className="">
        <img
          src={blog?.image?.url}
          alt="blog image"
          className="w-full h-1/2 md:h-2/3 object-cover"
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        {/* share */}
        <div className=" flex flex-col gap-1">
          <span className="">Share:</span>
          <div className=" flex items-center gap-3">
            <Link
              className=" group "
              target="_blank"
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                window.location.href
              }
            >
              <FaFacebook className="text-xl text-[#0766FF] group-hover:opacity-85 transition-all" />
            </Link>
            <Link
              className=" group "
              target="_blank"
              href={"https://x.com/intent/post?url=" + window.location.href}
            >
              <BsTwitterX className="text-xl text-black group-hover:opacity-85 transition-all" />
            </Link>
            <Link
              className=" group "
              target="_blank"
              href={
                "https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=" +
                window.location.href
              }
            >
              <FaLinkedin className="text-xl text-[#0B66C2] group-hover:opacity-85 transition-all" />
            </Link>

            <Link
              className=" group "
              target="_blank"
              href={"https://wa.me/?text=" + window.location.href}
            >
              <FaWhatsapp className="text-xl text-green-500 group-hover:opacity-85 transition-all" />
            </Link>

            <button className=" group " onClick={handleCopyTheUrl}>
              <IoLink className="text-xl text-red group-hover:text-dark-red transition-all transform -rotate-45" />
            </button>
          </div>
        </div>

        {/* author */}
        <div className=" font-semibold text-red flex flex-col  items-end">
          <div className="">{blog?.author}</div>
          <div className="text-gray-500 text-sm">
            {formatliTarih(blog?.createdAt)}
          </div>
        </div>
      </div>
      <div className="text-justify poppins-font mt-20 mb-10" dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </div>
  );
};

export default BlogDetailPage;
