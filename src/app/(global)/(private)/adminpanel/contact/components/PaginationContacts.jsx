import { fetchContactSetPage } from "@/lib/features/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const PaginationContacts = () => {
  const pagination = useSelector((state) => state.contact.pagination);
  const dispatch = useDispatch();
  console.log("pagination", pagination, new Date());

  return (<>
  <div className="flex flex-col items-center mt-16">
  <p className="inline-flex my-1">Page:{pagination?.page}</p>
      {/* Help text */}
      <span className="text-sm text-gray-700  ">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">
          {(pagination?.page - 1) * pagination?.limit + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 ">
          {pagination?.page * pagination?.limit < pagination?.totalRecords
            ? pagination?.page * pagination?.limit
            : pagination?.totalRecords}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 ">
          {pagination?.totalRecords}
        </span>{" "}
        Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex mt-2  ">
        <button
          className={"primary-button-main   " + (!pagination?.pages?.previous && " bg-black hover:bg-black"  )}
          disabled={!pagination?.pages?.previous}
          onClick={() => {
            if (pagination?.pages?.previous)
              dispatch(fetchContactSetPage(pagination?.page - 1));
          }}
        >
          Prev
        </button>
        <button
          className={"primary-button-main   " + (!pagination?.pages?.next && " bg-black hover:bg-black"  )}
          disabled={!pagination?.pages?.next}
          onClick={() => {
            if (pagination?.pages?.next)
              dispatch(fetchContactSetPage(pagination?.page + 1));
          }}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default PaginationContacts;
