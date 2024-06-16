import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const PasswordResetModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        toast.success("Go to email and reset Password");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <p onClick={open} className="text-xs mt-2 text-[#696969] hover:underline">
        <a href="#">Forgot password?</a>
      </p>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-black mb-2"
                  >
                    Reset Your Password
                  </DialogTitle>
                  <form onSubmit={handleSubmit}>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      name="email"
                      placeholder="type your email"
                      className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs"
                    />
                    <div className="mt-4">
                      <Button
                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={close}
                      >
                        Close
                      </Button>
                      <input
                        className="ml-5 cursor-pointer inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        type="submit"
                        value="Submit"
                        onClick={close}
                      />
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PasswordResetModal;
