"use client";
import React, { useEffect, useState } from "react";
import CreateBlog from "./components/CreateBlog";
import useBlogServices from "@/lib/services/useBlogServices";
import { useSelector } from "react-redux";
import AdminBlogCard from "./components/AdminBlogCard";
import Spinner from "@/components/spinner/Spinner";
import NoContent from "@/components/noContent/NoContent";
import BlogDeleteModal from "./components/BlogDeleteModal";
import BlogEditModal from "./components/BlogEditModal";

const BlogAdminPage = () => {
  const { getBlogsApi } = useBlogServices();
  const blogs = useSelector((state) => state.blog.blogs);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [choosedBlog, setChoosedBlog] = useState({}); 
  const loading = useSelector((state) => state.blog.loading);

  useEffect(() => {
    getBlogsApi();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-2 mb-24">
      <div className=" mb-20">
        <CreateBlog />
      </div>

      {/* blog cards */}
      {loading ? (
          <Spinner />
        ) : blogs?.length === 0 ? (
          <NoContent />
        ) : (
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs?.map((blog, idx) => (
          <AdminBlogCard key={idx} blog={blog} setChoosedBlog={setChoosedBlog}   setDeleteModalOpen={setDeleteModalOpen} 
          setEditModalOpen={setEditModalOpen}
          />
        ))}
      </div>
      )}
      <BlogDeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} choosedBlog={choosedBlog}  />
      <BlogEditModal open={editModalOpen} setOpen={setEditModalOpen} choosedBlog={choosedBlog}  />
    </div>
  );
};

export default BlogAdminPage;
