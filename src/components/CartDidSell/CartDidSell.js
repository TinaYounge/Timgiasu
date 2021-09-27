import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleOwnTeacherUser } from "../../redux/SingleUser/GetSingleUserAction";
import SmallPic from "../CardItems/SmallPic";

function CartDidSell() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleOwnTeacherUser());
  }, [dispatch]);
  const teacherState = useSelector((state) => state.singleUserInfo);
  console.log("teacherState", teacherState);
  let RenderCard;
  let total = 0;

  if (teacherState.user[id]) {
    let cartArray = teacherState.user[id].cart;
    RenderCard = cartArray.map((item) => {
      total += item.value;
      return (
        <div className="cartBox row ">
          <div className="col-lg-2">
            <SmallPic userInfo={item.studentId} />
          </div>
          <div className="col-lg-10">
            Môn: {item.subject} - Giá: {item.value}VND
            <div>Số buổi có thể book: {item.classCanBook}</div>
            <div>StudentId: {item.studentId}</div>
          </div>
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="" role="status">
        <span className="sr-only">
          Bạn chưa có lớp, vui lòng chọn giáo viên
        </span>
      </div>
    );
  }

  return (
    <div>
      <h6 style={{ color: "blueviolet" }}>Tổng thu nhập: {total} VND</h6>
      <div>{RenderCard}</div>
    </div>
  );
}

export default CartDidSell;
