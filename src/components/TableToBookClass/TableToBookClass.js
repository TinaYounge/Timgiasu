import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../redux/Cart/CartAction";
import SmallPic from "../CardItems/SmallPic";
import ModalTim from "../Modal/Modal";

function TableToBookClass() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);
  const cartState = useSelector((state) => state.cart);

  let RenderCard;
  if (cartState.cart[0]) {
    let cartArray = cartState.cart;

    RenderCard = cartArray.map((item) => {
      return (
        <div className="cartBox row ">
          <div className="col-lg-3">
            <SmallPic userInfo={item.userId} />
          </div>
          <div className="col-lg-5">
            Môn: {item.subject}
            <div>Số buổi có thể book: {item.classCanBook}</div>
          </div>
          <div className="col-3" style={{ color: "blueviolet" }}>
            <ModalTim singleTeacherInfo={item.userId} />
          </div>
          <div className="col">
            <i class="bi bi-calendar-check"></i>{" "}
          </div>
          <div></div>
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

  return <div>{RenderCard}</div>;
}

export default TableToBookClass;
