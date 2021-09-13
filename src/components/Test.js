import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationBasic = () => {
  const [page, setPage] = useState(1);
  // let active = 2;
  let items = [];
  const handleActive = () => {
    setPage(8);
    // active = page;
    console.log("kia", page);
  };

  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item
        // key={number}
        active={number === page}
        onClick={handleActive}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
};

export default PaginationBasic;
