"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Spinner from "@/components/spinner/Spinner";
import NoContent from "@/components/noContent/NoContent";
import EmailLine from "./components/ContactLine";
import useContactServices from "@/lib/services/useContactServices";
import ContactDeleteModal from "./components/ContactDeleteModal";
import PaginationContacts from "./components/PaginationContacts";
import SearchBoxContacts from "./components/SearchBoxContacts";

const EmailAdminPage = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [choosedContact, setChoosedContact] = useState({});
  const { getContactsApi } = useContactServices();
  const contacts = useSelector((state) => state.contact.contactInfos);
  const loading = useSelector((state) => state.contact.loading);
  // const page = useSelector((state) => state.contact.page);
  // const search = useSelector((state) => state.contact.search);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

 

  console.log(contacts);
  useEffect(() => {
    let query = "?page=" + page;
    if (searchInput) {
      query += "&search[fullName]=" + searchInput;
    }
    getContactsApi(query);
    // eslint-disable-next-line
  }, [page, searchInput]);

  return (
    <div className="max-w-6xl mx-auto px-2 mb-24">
      {/* trainings list */}
      <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-b-2 pb-5 border-dark-red">
        Iletisim form kayitlari
      </h3>
      <PaginationContacts   setPage={setPage} />
      <SearchBoxContacts
        searchInput={searchInput}
        setSearchInput={ setSearchInput }
        setPage={setPage}
      />
      {loading ? (
        <Spinner />
      ) : contacts?.length === 0 ? (
        <NoContent />
      ) : (
        <div className="border-2 border-dark-red   transition-all duration-1000 rounded-lg pt-7 pb-4 px-5 shadow-md shadow-dark-red mt-10 flex flex-col gap-3 overflow-auto ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-950  ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-2 py-3">
                  #
                </th>
                <th scope="col" className="px-2 py-3">
                  Ad Soyad
                </th>
                <th scope="col" className="px-2 py-3">
                  email
                </th>
                <th scope="col" className="px-2 py-3">
                  telefon
                </th>
                <th scope="col" className="px-2 py-3">
                  created
                </th>
                <th scope="col" className="px-2 py-3">
                  status
                </th>
                <th scope="col" className="px-2 py-3">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact, idx) => (
                <EmailLine
                  key={idx}
                  index={idx}
                  contact={contact}
                  setChoosedContact={setChoosedContact}
                  setDeleteModalOpen={setDeleteModalOpen}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ContactDeleteModal
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        choosedContact={choosedContact}
      />

      <PaginationContacts   setPage={setPage} />
    </div>
  );
};

export default EmailAdminPage;
