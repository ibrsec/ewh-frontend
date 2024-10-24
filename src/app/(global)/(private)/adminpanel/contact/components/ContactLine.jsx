// "use client";

import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import useContactServices from "@/lib/services/useContactServices";

const ContactLine = ({
  contact,
  setChoosedContact,
  setDeleteModalOpen,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { readStatusChangeApi } = useContactServices();

  return (
    <>
      <tr
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        class={
          " cursor-pointer hover:opacity-75 transition-opacity  " +
          (contact?.status === "new"
            ? " odd:bg-light-orange even:bg-light-orange"
            : " odd:bg-white even:bg-gray-200")
        }
      >
        <td class="px-2 py-4 text-xs sx:text-sm flex items-center gap-2">
          <span>
            {isOpen ? (
              <FaChevronUp size={"16"} />
            ) : (
              <FaChevronDown size={"16"} />
            )}
          </span>
          {index + 1}
        </td>
        <th
          scope="row"
          class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap   text-sm sx:text-md"
        >
          {contact?.fullName}
        </th>
        <td class="px-2 py-4 text-xs sx:text-sm">{contact?.email}</td>
        <td class="px-2 py-4 text-xs sx:text-sm">{contact?.phone}</td>
        <td class="px-2 py-4 text-xs sx:text-sm">
          {new Date(contact?.createdAt).toLocaleString("tr-TR")}
        </td>
        <td
          class={
            "px-2 py-4 text-xs sx:text-sm font-bold " +
            (contact?.status === "new" ? " text-red" : " text-green-600")
          }
        >
          {contact?.status}
        </td>
        <td class="px-2 py-4 text-xs sx:text-sm flex items-center gap-2">
          <button
            className="  text-red-600 hover:underline"
            onClick={() => {
              setChoosedContact(contact);
              setDeleteModalOpen(true);
            }}
          >
            Delete
          </button>
        </td>
      </tr>

      {isOpen && (
        <tr className="border-b border-red pb-2">
          <td colSpan="7" className="bg-gray-100 p-4 b  ">
            <div className="flex flex-col gap-2 border-b border-red pb-2">
              <span className=""><span className="font-bold">id:</span> {contact?._id}</span>
              <span className=""><span className="font-bold">fullName:</span> {contact?.fullName}</span>
              <span className=""><span className="font-bold">email:</span> {contact?.email}</span>
              <span className=""><span className="font-bold">phone:</span> {contact?.phone}</span> 
            </div>
            <div className="font-bold pt-5">Mesaj:</div>
            <div className="pb-4 pt-2">{contact?.message}</div>
            {
              contact?.status === "new"
              &&
              <button
              className="primary-button"
              onClick={() => {
                if (contact?.status === "new") {
                  readStatusChangeApi(contact?._id);
                }
              }}
            >
              Okundu
            </button>
            }
          </td>
        </tr>
      )}
    </>
  );
};

export default ContactLine;
