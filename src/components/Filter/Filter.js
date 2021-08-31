import { Dropdown } from "react-bootstrap";

import React from "react";

function Filter() {
  return (
    <div>
      <>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle variant="success">Khối học </Dropdown.Toggle>
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
