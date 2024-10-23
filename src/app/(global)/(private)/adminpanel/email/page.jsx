"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Spinner from "@/components/spinner/Spinner";
import NoContent from "@/components/noContent/NoContent";
import useEmailServices from "@/lib/services/useEmailServices";
import NewEmail from "./components/NewEmail";
import EmailLine from "./components/EmailLine";
import EmailDeleteModal from "./components/EmailDeleteModal";
import EmailEditModal from "./components/EmailEditModal";
import EmailSendAccordion from "./components/EmailSendAccordion";

const EmailAdminPage = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [choosedEmail, setChoosedEmail] = useState({});
  const { getEmailsApi } = useEmailServices();
  const emails = useSelector((state) => state.email.emails);
  const loading = useSelector((state) => state.email.loading);
  console.log(emails);
  useEffect(() => {
    getEmailsApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 mb-24">
      <div className=" my-14"> 
        <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-b-2 pb-5 border-dark-red">
        Send Email Settings
      </h3>
        <EmailSendAccordion
          title="Accordion Title 1"
          content="This is the content of the first accordion."
        />
      </div>

      {/* yeni ekip uyesi */}
      <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-b-2 pb-5 border-dark-red">
        Create New Email
      </h3>
      <NewEmail />

      {/* trainings list */}
      <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-b-2 pb-5 border-dark-red">
        Kayıtlı Emailler
      </h3>
      {loading ? (
        <Spinner />
      ) : emails?.length === 0 ? (
        <NoContent />
      ) : (
        <div className="border-2 border-dark-red   transition-all duration-1000 rounded-lg pt-7 pb-4 px-5 shadow-md shadow-dark-red mt-10 flex flex-col gap-3 overflow-auto ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-2 py-3">
                  Email
                </th>
                <th scope="col" class="px-2 py-3">
                  created
                </th>
                <th scope="col" class="px-2 py-3">
                  updated
                </th>
                <th scope="col" class="px-2 py-3">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {emails?.map((email, idx) => (
                <EmailLine
                  key={idx}
                  email={email}
                  setChoosedEmail={setChoosedEmail}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setEditModalOpen={setEditModalOpen}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <EmailDeleteModal
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        choosedEmail={choosedEmail}
      />
      <EmailEditModal
        open={editModalOpen}
        setOpen={setEditModalOpen}
        choosedEmail={choosedEmail}
      />
    </div>
  );
};

export default EmailAdminPage;