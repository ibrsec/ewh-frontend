import { fetchContactSetSearch } from "@/lib/features/contactSlice";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

 

const SearchBoxContacts = () => {
    const[searchInput , setSearchInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContactSetSearch(searchInput));
    },[searchInput])
  return (
    <form
      className=" max-w-md mx-auto mt-10 "
       
    >
       

      <div className="mb-5 flex items-center gap-3 ">
        <label htmlFor="email">Search:</label> 
        <input
          type="text"
          id="searchInput"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="searchInput"
          placeholder="Search with fullName here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} 
        /> 
      </div>
 
    </form>
  )
}

export default SearchBoxContacts