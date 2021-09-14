import React from "react";
import { Col } from "react-bootstrap";
import "./Style.css";
// import cloudApi from "../../App.cloudApi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UpdateProfileInfoUser } from "../../redux/User/RegisterAction";
function UploadPic({ id }) {
  const dispatch = useDispatch();
  const UploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "tim_gia_su");
    axios
      .post("https://api.cloudinary.com/v1_1/dzkwpk3uc/image/upload/", formData)
      .then((urlPicture) => {
        let url = urlPicture.data.url;
        let stringUrl = url.toString();
        let urlPicturea = stringUrl.split("/upload/");
        let final = [
          urlPicturea[0],
          "/upload/w_450,c_scale/",
          urlPicturea[1],
        ].join("");
        dispatch(UpdateProfileInfoUser(final, id));
      });
  };

  return (
    <div>
      <div>
        <div>
          <Col xs={12} md={12}></Col>
          <input type="file" onChange={(e) => UploadImage(e.target.files)} />
        </div>
      </div>
    </div>
  );
}

export default UploadPic;
