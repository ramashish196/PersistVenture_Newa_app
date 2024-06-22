import React from "react";
const CustomPage = ({ currentPage, totalPages, handlePageClick }) => {
  const renderPageItems = () => {
    const pageItems = [];
    for (let i; i <= totalPages; i++) {
      pageItems.push(
        <Pagination
          key={i}
          active={i == currentPage}
          onClick={() => {
            handlePageClick;
          }}
        >
          {i}
        </Pagination>
      );
    }
    return pageItems;
  };
  return (
    <div className="flex">
      {/* <Pagination>
        <Pagination.Prev />
        {renderPageItems()}
        <Pagination.Next />
      </Pagination> */}
    </div>
  );
};

export default CustomPage;
