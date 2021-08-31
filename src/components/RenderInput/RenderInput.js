import React from "react";

function RenderInput() {
  return (
    <div>
      <div className="form-group form-floating mb-3 ">
        <select className="form-control">
          <option>...</option>
          <option>Lớp 2</option>
          <option>Lớp 3</option>
        </select>
        <label for="exampleFormControlSelect1">Khối học</label>
      </div>
    </div>
  );
}

export default RenderInput;
