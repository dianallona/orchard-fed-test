"use client";
import useClickOutside from "@/hooks/useClickOutside";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const Modal = ({ open, onClose, children }) => {
  const ref = useRef(null);
  const isClickedOutside = useClickOutside(ref, open);
  const [isOpen, setIsOpen] = useState(false);

  /** If the user clicks outside the modal, the modal will close */
  useEffect(() => {
    console.log({ isClickedOutside });
    if (!isClickedOutside) return;

    setIsOpen(false);
    onClose?.(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickedOutside]);

  /** If the user passed an open=true object, the modal will show */
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.(false);
  };

  return (
    <div
      className={classNames("relative z-10", {
        hidden: !isOpen,
      })}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center p-0">
          <div
            className="relative flex flex-col transform overflow-hidden"
            ref={ref}
          >
            <button
              className="absolute top-4 rounded-full bg-white/50 p-3 w-6 h-6 flex justify-center items-center right-4 hover:scale-110 transition ease-in-out delay-150 duration-300"
              type="button"
              role="button"
              aria-label="Close"
              title="Close"
              onClick={handleClose}
            >
              <p className="text-xs font-bold text-black">X</p>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
