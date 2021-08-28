import { Dropdown, Container } from "react-bootstrap";

import React from "react";

function Filter() {
  return (
    <div>
      <>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true" variant="success">
            Khối học{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose="inside">
          <Dropdown.Toggle id="dropdown-autoclose-inside" variant="success">
            Môn Học{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose="outside">
          <Dropdown.Toggle id="dropdown-autoclose-outside" variant="success">
            On/Off{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2" autoClose={false}>
          <Dropdown.Toggle id="dropdown-autoclose-false" variant="success">
            Địa điểm{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline mx-2" autoClose={false}>
          <Dropdown.Toggle id="dropdown-autoclose-false" variant="success">
            Giá{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline mx-2" autoClose={false}>
          <Dropdown.Toggle id="dropdown-autoclose-false" variant="success">
            Giáo viên yêu thích{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
}

export default Filter;
