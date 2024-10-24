// "use client";
import { SiSololearn } from "react-icons/si";

const EmailLine = ({
  email,
  setChoosedEmail,
  setDeleteModalOpen,
  setEditModalOpen,
  index,
}) => {
  return ( 
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <td class="px-2 py-4 text-xs sx:text-sm">
            {index+1}
          </td>
          <th
            scope="row"
            class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm sx:text-md"
          >
            {email?.email}
          </th>
          <td class="px-2 py-4 text-xs sx:text-sm">
            {new Date(email?.createdAt).toLocaleString("tr-TR")}
          </td>
          <td class="px-2 py-4 text-xs sx:text-sm">
            {new Date(email?.updatedAt).toLocaleString("tr-TR")}
          </td>
          <td class="px-2 py-4 text-xs sx:text-sm flex items-center gap-2">
          <button
            className="  text-blue-600   hover:underline"
            onClick={() => {
              setChoosedEmail(email);
              setEditModalOpen(true);
            }}
          >
            Edit
          </button>
          <button
            className="  text-red-600 hover:underline"
            onClick={() => {
              setChoosedEmail(email);
              setDeleteModalOpen(true);
            }}
          >
            Delete
          </button>
          </td>
        </tr> 
  );
};

export default EmailLine;
