import { fetchEmailSetSearch } from "@/lib/features/emailSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SearchBoxEmail = ({ searchInput, setSearchInput, setPage }) => {
  // const [searchInput, setSearchInput] = useState("");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchEmailSetSearch(searchInput));
  // }, [searchInput]);
  return (
    <form className=" max-w-md mx-auto mt-10 ">
      <div className="mb-5 flex items-center gap-3 ">
        <label htmlFor="email">Search:</label>
        <input
          type="text"
          id="searchInput"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="searchInput"
          placeholder="Search with email here..."
          value={searchInput}
          onChange={(e) => {
            setPage(1); // reset page when search input changes
            setSearchInput(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default SearchBoxEmail;
