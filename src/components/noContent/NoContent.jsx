 
import { MdOutlineNoAdultContent } from "react-icons/md";

const NoContent = () => {
  return (
    <div className="my-10 ">
        <p className="text-center text-dark-red font-bold text-5xl  flex items-center justify-center gap-5 ">
            <MdOutlineNoAdultContent className="text-6xl" />
            <span>No content</span>
            </p>
    </div>
  )
}

export default NoContent