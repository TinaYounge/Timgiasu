import React from "react";
import { useDispatch } from "react-redux";
import { CartUpdate } from "../../redux/Cart/CartAction";
import SmallPic from "./SmallPic";
import "./Style.css";
function CardItems({ singleStudentInfo }) {
  const dispatch = useDispatch();
  let RenderCard;
  let total = 0;
  let totaldot = 0;
  if (singleStudentInfo.cart) {
    RenderCard = singleStudentInfo.cart.map((item) => {
      if (item.paid === "No") {
        total += item.value;
        totaldot = total;
        totaldot = totaldot.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
        let value = item.value;
        value = value.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
        return (
          <div className="cartBox row " style={{ padding: "20px" }}>
            <div className="col-lg-2">
              <SmallPic userInfo={item.userId} />
            </div>
            <div className="col-lg-6">
              <div>Số buổi:{item.idPrice}</div>
              <div>Môn học:{item.subject}</div>
              Sản phẩm :{item._id}
            </div>
            <div className="col-3" style={{ color: "blueviolet" }}>
              Trị giá :{value}
            </div>
            <div className="col">
              <i class="bi bi-trash"></i>
            </div>
            <div></div>
          </div>
        );
      }
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
        <div style={{ fontSize: "30px" }}>Tổng: {totaldot} </div>
        <div
          className="btn-grad btn-lg"
          style={{ cursor: "pointer" }}
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
