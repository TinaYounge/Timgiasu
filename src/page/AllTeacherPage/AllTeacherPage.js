import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FilterTypeOfTeaching from "../../components/FilterTypeOfTeaching/FilterTypeOfTeaching";
import TestCardRender from "../../components/TeacherCard/TestCardRender";

function AllTeacherPage() {
  // const dispatch = useDispatch();

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
  let RenderCard = <div>thu render nhung khong duoc </div>;

  const subjectFilter = useSelector((state) => state.allSubjects.subject);

  if (subjectFilter) {
    RenderCard = subjectFilter.map((item) => {
      const userId = item.userId;

      return (
        <div>
          <TestCardRender userIdOfSubject={userId} />
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="py-5 container ">
      <div className="py-5 container ">
        <FilterTypeOfTeaching />
        <br />
        <div className="card-group">{RenderCard}</div>
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
