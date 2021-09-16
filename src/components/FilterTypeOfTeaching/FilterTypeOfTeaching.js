import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../../redux/AllSubjects/GetAllSubjectAction";

function FilterTypeOfTeaching() {
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState({
    subjectFilter: "",
    // typeOfTeaching: "",
    // city: "",
  });

  return (
    <div className="row">
      <div className="form-group col-md-2 ">
        <label for="inputAddress" className=" col-form-label fw-bold">
          Môn học{" "}
        </label>{" "}
        <input
          id="inputState"
          className="form-control  "
          onChange={(e) =>
            setFilterState({
              ...filterState,
              subjectFilter: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="form-group col-md-2 ">
        <label for="inputAddress" className=" ciol-form-label fw-bold">
          Phương pháp học{" "}
        </label>{" "}
        <select
          id="inputState"
          className="form-control  "
          onChange={(e) =>
            setFilterState({
              ...filterState,
              typeOfTeaching: e.target.value,
            })
          }
        >
          <option selected>Chọn...</option>
          <option>Trực tuyến</option>
          <option>Tại Nhà</option>
          <option>Cả hai</option>
        </select>
      </div>
      <div className="form-group col-md-2 ">
        <label for="inputAddress" className=" col-form-label fw-bold">
          Thành phố/Tỉnh{" "}
        </label>{" "}
        <select
          id="inputState"
          className="form-control  "
          onChange={(e) =>
            setFilterState({
              ...filterState,
              city: e.target.value,
            })
          }
        >
          <option selected>Chọn...</option>
          <option>Hồ Chí Minh</option>
          <option>Hà Nội</option>
          <option>Hải Phòng</option>
        </select>
      </div>
      <div className="form-group col-md-2 ">
        <label for="inputAddress" className=" col-form-label fw-bold">
          Sắp xếp{" "}
        </label>{" "}
        <select id="inputState" className="form-control  ">
          <option selected>Chọn...</option>
          <option>Giá từ thấp tới cao</option>
          <option>Giá từ cao đến thấp</option>
          <option>Giáo viên ưa thích</option>
        </select>
      </div>
      <div className=" col-md-2 ">
        <button
          onClick={() => {
            dispatch(getAllSubjects(filterState));
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FilterTypeOfTeaching;
