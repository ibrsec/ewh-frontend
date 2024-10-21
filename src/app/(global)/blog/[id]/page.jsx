"use client"
import useBlogServices from "@/lib/services/useBlogServices"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

 

const BlogDetailPage = ({ params }) => {
  const {getOneBlogApi} = useBlogServices(); 
  const blog = useSelector(state=> state.blog.blog);
  useEffect(()=> {
    getOneBlogApi(params?.id);
    // eslint-disable-next-line
  },[])
  return (
    <div className="flex flex-col gap-10">
      <span>{blog?._id}</span>
      <span>{blog?.title}</span>
      <span>{blog?.shortDescription}</span>
      <span>{blog?.content}</span>
      <span>{blog?.author}</span>
      <span>{blog?.createdAt}</span>
      <span>{blog?.updatedAt}</span>
    </div>
  )
}

export default BlogDetailPage