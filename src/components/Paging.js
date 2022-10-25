import React from "react";
import Pagination from "react-js-pagination";

function Paging({ page, totalpages, handlePageChange }) {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={totalpages}
      pageRangeDisplayed={10}
      onChange={handlePageChange}
    />
  );
}

export default Paging;
