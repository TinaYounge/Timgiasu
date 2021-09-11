import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateInfoExUser } from "../../redux/User/RegisterAction";
import TeacherPriceInput from "../TeacherPriceInput/TeacherPriceInput";
import UploadPic from "../UploadPic/UploadPic";

function ExperienceInfo({ id }) {
  const dispatch = useDispatch();

  const [userUpdateExInfo, setUserUpdateExInfo] = useState({
    company: "",
    typeOfTeaching: 2,
    phoneNumber: "",
    teachingPrice: [],
    timeTable: [],
    highestCertificate: "",
    certificate: [],
    bankCard: "",
    universityGotCert: "",
  });

  return (
    <div>
      <h2>Kinh nghiệm dạy học</h2>
      <div className="row  ">
        <div className="form-group col-md-6">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Bằng cấp cao nhất{" "}
          </label>{" "}
          <select id="inputState" className="form-control  ">
            <option
              selected
              onChange={(e) =>
                setUserUpdateExInfo({
                  ...userUpdateExInfo,
                  highestCertificate: e.target.value,
                })
              }
            >
              Chọn...
            </option>
            <option>Cao đẳng</option>
            <option>Đại học</option>
            <option>Thạc sĩ</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Trường{" "}
          </label>{" "}
          <input
            type="tel"
            className="form-control"
            id="inputAddress"
            placeholder="Ví dụ: Trường ĐH sư phạm Hà Nội"
            onChange={(e) =>
              setUserUpdateExInfo({
                ...userUpdateExInfo,
                universityGotCert: e.target.value,
              })
            }
          />{" "}
        </div>
      </div>
      <div className="row  ">
        <div className="form-group col-md-6">
          <label for="inputAddress" className=" col-form-label fw-bold">
            Bằng cấp lĩnh vực{" "}
          </label>{" "}
          <select id="inputState" className="form-control  ">
            <option selected>Chọn...</option>
            <option>Toán</option>
            <option>Văn</option>
            <option>Lý</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label for="inputPhone" className=" col-form-label fw-bold">
            Giấy chứng nhận{" "}
          </label>{" "}
          <UploadPic />
        </div>
      </div>
      <br />
      <Button onClick={() => dispatch(UpdateInfoExUser(userUpdateExInfo, id))}>
        test
      </Button>
      <TeacherPriceInput />
    </div>
  );
}

export default ExperienceInfo;
