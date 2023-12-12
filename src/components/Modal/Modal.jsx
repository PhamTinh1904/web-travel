import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ isOpen, handleClose, body }) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    // Update the local state when the prop changes
    setOpen(isOpen);
    console.log(open);
  }, [isOpen]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          </div>
        </Box>
      </Modal>
    </div>
  );
}
