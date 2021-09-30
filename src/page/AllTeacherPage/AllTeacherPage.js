import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import FilterTypeOfTeaching from "../../components/FilterTypeOfTeaching/FilterTypeOfTeaching";
import TestCardRender from "../../components/TeacherCard/TestCardRender";
import { getAllSubjects } from "../../redux/AllSubjects/GetAllSubjectAction";

function AllTeacherPage() {
  const dispatch = useDispatch();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const [page, setPage] = useState(1);
  let queryFun = query.get("subjectFilter");

  let limit = 14;

  const HandleNext = () => {
    setPage(page + 1);
  };
  const HandleBef = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    if (queryFun) {
      dispatch(
        getAllSubjects({ subjectFilter: queryFun, page: page, limit: limit })
      );
    }
  }, [queryFun, dispatch, page, limit]);
  let RenderCard;
  const subjectFilter = useSelector((state) => state.allSubjects.subject);

  if (subjectFilter) {
    let userIdFilter = [];
    subjectFilter.map((i) => {
      userIdFilter.push(i.userId);
    });
    let uniqueUserId = [...new Set(userIdFilter)];
    RenderCard = uniqueUserId.map((item) => {
      return (
        <div>
          <TestCardRender userIdOfSubject={item} />
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
          <Pagination.Item onClick={() => setPage(3)} active={page === 3}>
            {3}
          </Pagination.Item>
          <Pagination.Item onClick={() => setPage(4)} active={page === 4}>
            {4}
          </Pagination.Item>
          <Pagination.Next onClick={HandleNext} />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}

export default AllTeacherPage;
