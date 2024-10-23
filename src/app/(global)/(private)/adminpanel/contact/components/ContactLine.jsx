// "use client";
import { SiSololearn } from "react-icons/si";

const ContactLine = ({
  contact,
  setChoosedContact,
  setDeleteModalOpen, 
}) => {
  return ( 
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th
            scope="row"
            class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm sx:text-md"
          >
            {contact?.fullName}
          </th>
          <td class="px-2 py-4 text-xs sx:text-sm">
            {contact?.email}
          </td>
          <td class="px-2 py-4 text-xs sx:text-sm">
            {contact?.phone}
          </td>
          <td class="px-2 py-4 text-xs sx:text-sm">
            {new Date(contact?.createdAt).toLocaleString("tr-TR")}
          </td>
          <td class="px-2 py-4 text-xs sx:text-sm">
            Mesaj
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
  );
};

export default ContactLine;