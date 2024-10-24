
import { formatliTarih } from "@/helpers/formatDate";
import Link from "next/link";

 
const AdminBlogCard = ({
  blog,
  setChoosedBlog,
  setDeleteModalOpen,
  setEditModalOpen,
}) => { 
 
  return (
    <div>
      <Link
        href={"/blog/" + blog?._id || ""}
        className={`flex gap-5 flex-col group cursor-pointer relative `}
      >
        <img
          src="/images/hovershapes.png"
          alt=""
          className="absolute w-full h-full z-30   opacity-0 group-hover:opacity-30  group-hover:scale-125 transition-all duration-1000"
        />
        <div className="flex-none  h-[220px] rounded-md overflow-hidden ">
          {/* h-1/3 */}
          <img
            src={blog?.image?.url}
            alt="blog"
            className="w-full h-full object-cover object-top rounded-md group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="bg-gray-500 h-0.5 w-full  "></div>
        <div className="flex-1 flex-col gap-2 flex   ">
          <h3 className="text-2xl  md:text-3xl font-bold poppins-font group-hover:text-yellow transition-colors duration-400">
            {blog?.title}
          </h3>

          <div className="bg-gray-500 h-0.5 w-full   my-3"></div>

          <div className="flex items-center justify-between">
            <span className="poppins-font font-semibold text-dark-red">
              {formatliTarih(blog?.createdAt)}
            </span>
            <span className="poppins-font text-red font-bold">
              {blog?.author}
            </span>
          </div>
          <p className="text-gray-600 group-hover:text-black transition-all duration-400 text-lg poppins-font  ">
            {blog?.shortDescription.slice(0, 150)}...
          </p>
          <div className="text-end pe-6">
            <button className="  text-gray-500 font-semibold   group-hover:text-red transition-all duration-400 geist-font">
              Read More...
            </button>
          </div>
        </div>
      </Link>
      <div className=" text-center text-lg text-red font-semibold my-5">Order: {blog?.order}</div>
      <div className="flex gap-2 px-3 pt-2 pb-3 z-50 mt-20">
        <button
          className="flex-1 primary-button"
          onClick={() => { 
            setChoosedBlog(blog);
            setEditModalOpen(true);
          }}
        >
          Edit
        </button>
        <button
          className="flex-1 primary-button-main"
          onClick={() => {
            setChoosedBlog(blog);
            setDeleteModalOpen(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminBlogCard;
