import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
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
        dispatch(UpdateProfileInfoUser(`${urlPicture.data.url}`, id));
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

// class UploadPic extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: " https://dummyimage.com/200x100/a9acd6/ffff",
//     };

//     this.onImageChange = this.onImageChange.bind(this);
//   }

//   onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       this.setState({
//         image: URL.createObjectURL(img),
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <div>
//             <Col xs={12} md={12}>
//               <Image src={this.state.image} className=" img-thumbnail" />
//             </Col>
//             <input
//               type="file"
//               name="myImage"
//               onChange={this.onImageChange}
//               multiple
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default UploadPic;
