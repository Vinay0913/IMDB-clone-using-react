import React from "react";

function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center items-center">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="font-bold mx-2">
        {currentPage} / {totalPages}
      </div>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
