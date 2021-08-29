import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import "./Style.css";
class UploadPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <Col xs={12} md={12}>
              <Image src={this.state.image} className=" img-thumbnail" />
            </Col>
            <h5>Cập nhật ảnh đại diện</h5>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default UploadPic;
