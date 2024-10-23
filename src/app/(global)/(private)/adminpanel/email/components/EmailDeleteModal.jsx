import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
  } from "@headlessui/react"; 
   
import { IoMdRemoveCircle } from "react-icons/io"; 
import SpinnerOne from "@/components/spinner/SpinnerOne";
import { useSelector } from "react-redux";
import useTrainingServices from "@/lib/services/useTrainingServices";
import useEmailServices from "@/lib/services/useEmailServices";




   



  
  const EmailDeleteModal = ({ open, setOpen, choosedEmail }) => {
    const {deleteEmail} = useEmailServices();
  
    const loading = useSelector((state) => state.email.loading);
 
   
  
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
  
  
      deleteEmail(choosedEmail?._id);
   
        // if(!loading)
         setOpen(false);
    };
  
    return (
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95  border border-dark-red shadow-dark-red"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-transparent sm:mx-0 sm:h-10 sm:w-10">
                    <IoMdRemoveCircle className="text-dark-red" size="45px" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-semibold  leading-6 text-dark-red"
                    >
                      Are you sure? {choosedEmail?.email} will be deleted!
                    </DialogTitle>
                    <div className="mt-2">
                      <form
                        className="my-5 flex items-center justify-center flex-col gap-4"
                        onSubmit={handleSubmit}
                      >
  
   
  
  
                        <div className="mt-3 w-9/12 flex items-center gap-2">
                          <button
                            type="button"
                            data-autofocus
                            onClick={() => setOpen(false)}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red active:bg-orange hover:text-gray-100 active:text-gray-100 sm:mt-0 sm:w-auto transition-all"
                          >
                            Cancel
                          </button>
                          <button
                            className="text-white bg-dark-red hover:bg-red active:bg-orange transition-all py-2 px-16 w-full text-sm font-semibold rounded-lg"
                            type="submit"
                            disabled={loading}
                          >
                           {loading ? <SpinnerOne /> : "Delete"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  };
  
  export default EmailDeleteModal;
  