"use client";
import { useEffect, useState } from "react";
import {   useSelector } from "react-redux";

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
  const page = useSelector((state) => state.contact.page); 
  const search = useSelector((state) => state.contact.search); 
  console.log(contacts);
  useEffect(() => {
    getContactsApi();
    // eslint-disable-next-line 
  }, [page,search]);
 

  return (
    <div className="max-w-6xl mx-auto px-2 mb-24">
       
 

      {/* trainings list */}
      <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-b-2 pb-5 border-dark-red">
        Iletisim form kayitlari
      </h3>
      <PaginationContacts />
      <SearchBoxContacts />
      {loading ? (
        <Spinner />
      ) : contacts?.length === 0 ? (
        <NoContent />
      ) : (
        <div className="border-2 border-dark-red   transition-all duration-1000 rounded-lg pt-7 pb-4 px-5 shadow-md shadow-dark-red mt-10 flex flex-col gap-3 overflow-auto ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-950  ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" class="px-2 py-3">
                  #
                </th>
                <th scope="col" class="px-2 py-3">
                  Ad Soyad
                </th>
                <th scope="col" class="px-2 py-3">
                  email
                </th>
                <th scope="col" class="px-2 py-3">
                  telefon
                </th>
                <th scope="col" class="px-2 py-3">
                  created
                </th>
                <th scope="col" class="px-2 py-3">
                  status
                </th>
                <th scope="col" class="px-2 py-3">
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

      <PaginationContacts />
    </div>
  );
};

export default EmailAdminPage;
