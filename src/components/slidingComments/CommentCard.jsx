import { FaComment } from "react-icons/fa";

const CommentCard = ({slide}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="border border-[#9e9a9a] px-10 pb-12 pt-10 rounded-xl w-5/6 relative shadow-md">
          <p className="text-gray-500 font-medium   text-xs sm:text-sm md:text-md lg:text-lg poppins-font    text-justify ">
          {slide?.content}
          </p>
          <p className="font-semibold text-xs md:text-sm lg:text-md mt-10">{slide?.author}</p>
          <div className="absolute bottom-5 right-12">
            <FaComment className="text-5xl" />
          </div>
        </div>
      </div>
  )
}

export default CommentCard