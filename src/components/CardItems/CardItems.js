import React from "react";
import { useDispatch } from "react-redux";
import { CartUpdate } from "../../redux/Cart/CartAction";
import SmallPic from "./SmallPic";
import "./Style.css";
function CardItems({ singleStudentInfo }) {
  const dispatch = useDispatch();
  console.log("singe,", singleStudentInfo.cart);
  let RenderCard;
  let total = 0;

  if (singleStudentInfo.cart) {
    RenderCard = singleStudentInfo.cart.map((item) => {
      console.log("object,item", item.userId);
      total += item.value;
      return (
        <div className="cartBox row ">
          <div className="col-lg-2">
            <SmallPic userInfo={item.userId} />
          </div>
          <div className="col-lg-6">
            Sản phẩm :{item._id}
            <div>Số buổi:{item.idPrice}</div>
          </div>
          <div className="col-3" style={{ color: "blueviolet" }}>
            Trị giá :{item.value} VND
          </div>
          <div className="col">
            <i class="bi bi-trash"></i>
          </div>
          <div></div>
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
    <div className="row  ">
      <div className="col-lg-8  "> {RenderCard}</div>
      <div className="col-lg-1  "> </div>
      <div className="col-lg-3 total-box ">
        <div style={{ fontSize: "30px" }}>Tổng: {total} VND </div>
        <div
          className="btn-grad btn-lg"
          onClick={() => {
            dispatch(CartUpdate());
          }}
        >
          Trả tiền{" "}
        </div>
      </div>
    </div>
  );
}

export default CardItems;
