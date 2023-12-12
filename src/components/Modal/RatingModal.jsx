import { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const RatingModal = ({ body, disabled, isOpen }) => {
 
const [showModal, setShowModal] = useState(isOpen)
  

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled]);
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto lg:h-auto">
        {/* Content */}
        <div
          className={`translate duration-300 h-full
      ${showModal ? "translate-y-0" : "translate-y-full"}
      ${showModal ? "opacity-100" : "opacity-0"}
      `}
        >
          <div
            className="
         translate h-full md:h-auto lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
      "
          >
            {/* Header*/}
            <div className="flex items-center p-6 justify-center relative border-b-[1px]">
              <h3 className=" text-lg font-semibold">Đánh giá tour</h3>
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">{body}</div>
            {/* Footer */}
            {/* <div className="relative p-6 flex-auto">
          <div className="flex items-center gap-4 w-full">
            {secondaryAction && secondaryActionLabel && (
              <Button 
              outline
              disabled={disabled} 
              label={secondaryActionLabel}
              onClick={handleSecondaryAction}
              />
            )}
            <Button
              disabled={disabled}
              icon={IoMdClose}
              label={actionLabel}
              onClick={handleSubmit}
            />
          </div>
          {footer}
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
