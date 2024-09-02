import React from 'react';
import { MdClose } from 'react-icons/md';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg h-[450px] overflow-y-auto shadow-xl p-6 w-full max-w-md">
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-black font-bold text-2xl hover:text-gray-700">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
