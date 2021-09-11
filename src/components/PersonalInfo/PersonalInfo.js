import React, { useState } from "react";
import UploadPic from "../UploadPic/UploadPic";
import Daypicker from "../Daypicker/Daypicker";
import { useDispatch } from "react-redux";
import Button from "@restart/ui/esm/Button";
import { UpdateInfoUser } from "../../redux/User/RegisterAction";

function PersonalInfo({ singleUserInfoCombine }) {
  const id = singleUserInfoCombine[1];

  const dispatch = useDispatch();

  const [userUpdateInfo, setUserUpdateInfo] = useState({
    fullname: "",
    profilePicture: "",
    followers: [],
    desc: "",
    city: "",
    district: "",
    sex: "",
    company: "",
    typeOfTeaching: 2,
    phoneNumber: "",
    teachingPrice: [],
    timeTable: [],
    certificate: [],
    bankCard: "",
  });
  return (
    <div>
      {" "}
      <h2>Giới thiệu bản thân</h2>
      <br />
      <div className="group col-md-12 row">
        <label className="col-sm-2 col-form-label fw-bold ">
          Họ và tên đầy đủ
        </label>
        <div className="col-sm-10">
          <input
            type="tel"
            className="form-control "
            placeholder="Ví dụ: Nguyễn Minh Nguyệt"
            onChange={(e) =>
              setUserUpdateInfo({
                ...userUpdateInfo,
                fullname: e.target.value,
              })
            }
          />
        </div>
      </div>
      <br />
      <div className="group col-md-12 row">
        <label for="inputAddress" className="col-sm-2 col-form-label fw-bold">
          Cập nhật ảnh đại diện{" "}
        </label>
        <div className="col-sm-4">
          <UploadPic id={id} />
        </div>
      </div>
      <div className="group col-md-12 ">
        <div className="row  ">
          <div className=" col-md-6">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Quận/Huyện{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: Quận 10"
              onChange={(e) =>
                setUserUpdateInfo({
                  ...userUpdateInfo,
                  district: e.target.value,
                })
              }
            />{" "}
          </div>
          <div className=" col-md-6">
            <label for="inputPhone" className=" col-form-label fw-bold">
              Thành phố/Tỉnh{" "}
            </label>{" "}
            <input
              type="tel"
              className="form-control"
              id="inputAddress"
              placeholder="Ví dụ: Hồ Chí Minh"
              onChange={(e) =>
                setUserUpdateInfo({
                  ...userUpdateInfo,
                  city: e.target.value,
                })
              }
            />{" "}
          </div>
        </div>
      </div>
      <br />
      <div className="group col-md-12 row">
        <label for="inputAddress" className="col-sm-2 col-form-label fw-bold">
          Giới tính{" "}
        </label>
        <div className="col-sm-10">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Nam
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Nữ
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3">
              Khác{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="row  ">
        <div className="form-group col-md-3">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Ngày sinh
          </label>{" "}
          <Daypicker />{" "}
        </div>
        <div className="form-group col-md-4">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Số điện thoại{" "}
          </label>{" "}
          <input
            type="tel"
            className="form-control"
            id="inputAddress"
            placeholder="Ví dụ: 0945372834"
            onChange={(e) =>
              setUserUpdateInfo({
                ...userUpdateInfo,
                phoneNumber: e.target.value,
              })
            }
          />{" "}
        </div>
        <div className="form-group col-md-4">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Giới tính{" "}
          </label>{" "}
          <select id="inputState" className="form-control  ">
            <option
              selected
              onChange={(e) =>
                setUserUpdateInfo({
                  ...userUpdateInfo,
                  sex: e.target.value,
                })
              }
            >
              Chọn...
            </option>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </select>
        </div>
        <br />
        <div className="form-group col-md-12">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Giới thiệu ngắn về bản thân{" "}
          </label>{" "}
          <form className="mb-4">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Xin chào! Mình là Minh Nguyêt! Mình có 5 năm kinh nghiệm..."
              onChange={(e) =>
                setUserUpdateInfo({
                  ...userUpdateInfo,
                  desc: e.target.value,
                })
              }
            ></textarea>
          </form>
        </div>
        <div className="   col-md-4">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Phương pháp dạy/ học{" "}
          </label>{" "}
          <select
            id="inputState"
            className="form-control  "
            onChange={(e) =>
              setUserUpdateInfo({
                ...userUpdateInfo,
                typeOfTeaching: e.target.value,
              })
            }
          >
            <option selected>Chọn...</option>
            <option>Trực tuyến</option>
            <option>Tại nhà</option>
            <option>Cả hai</option>
          </select>
        </div>
        <br />
      </div>
      <Button onClick={() => dispatch(UpdateInfoUser(userUpdateInfo, id))}>
        test
      </Button>
    </div>
  );
}

export default PersonalInfo;
