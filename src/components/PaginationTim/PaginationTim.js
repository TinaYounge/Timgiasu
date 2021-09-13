import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllTeachers } from "../../redux/AllTeachers/GetAllTeacherAction";
// import queryString from "query-string";

function PaginationTim() {
  // const dispatch = useDispatch();
  // useEffect(
  //   (page) => {
  //     dispatch(getAllTeachers(page));
  //   },
  //   [dispatch]
  // );
  return (
    <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default PaginationTim;
