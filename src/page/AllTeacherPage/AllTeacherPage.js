import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import FilterTypeOfTeaching from "../../components/FilterTypeOfTeaching/FilterTypeOfTeaching";
import RenderTeacherCard from "../../components/TeacherCard/RenderTeacherCard";

function AllTeacherPage() {
  const [page, setPage] = useState(1);
  let limit = 12;

  const HandleNext = () => {
    setPage(page + 1);
  };
  const HandleBef = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  console.log("pgae", page);
  return (
    <div>
      <div className="py-5 container ">
        <FilterTypeOfTeaching />
        <br />
        <RenderTeacherCard page={{ page, limit }} />
      </div>

      <div className="container ">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev onClick={HandleBef} />
          <Pagination.Item onClick={() => setPage(1)} active={page === 1}>
            {1}
          </Pagination.Item>
          <Pagination.Item onClick={() => setPage(2)} active={page === 2}>
            {2}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item onClick={() => setPage(4)} active={page === 4}>
            {4}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next onClick={HandleNext} />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}

export default AllTeacherPage;
