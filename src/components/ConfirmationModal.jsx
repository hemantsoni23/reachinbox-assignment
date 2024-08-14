import React from "react";

const ConfirmationModal = ({ title, message, onCancel, onConfirm, confirmText, cancelText }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#8484847D] bg-opacity-50 z-100">
      <div className="dark:bg-gradient-to-b dark:from-[#FFFFFE] dark:to-[#FFFFEF] bg-gradient-to-b from-[#141517] to-[#232528] p-8 rounded-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold dark:text-black text-white">{title}</h2>
        <p className="text-sm my-12 px-16 dark:text-black text-white">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="dark:bg-[#E0E0E0] bg-[#25262B] dark:text-black text-white px-16 py-4 rounded-md focus:outline-none"
          >
            {cancelText || 'Cancel'}
          </button>
          <button
            onClick={onConfirm}
            className="bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white px-16 py-4 rounded-md focus:outline-none"
          >
            {confirmText || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
