import React from "react";

function CommentBox() {
  return (
    <div>
      <div
        className=" bg-light "
        style={{ color: "black", border: "solid", borderColor: "#ced4da" }}
      >
        <div className="card-body">
          <form className="mb-4">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Join the discussion and leave a comment!"
            ></textarea>
          </form>
          <div className="d-flex mb-4">
            <div className="flex-shrink-0">
              <img
                className="rounded-circle"
                src="https://i.pinimg.com/564x/61/a2/03/61a2035ca7c1e7a5ee6ead965eafa946.jpg"
                style={{ width: "50px" }}
                alt="..."
              />
            </div>
            <div className="ms-3">
              <div className="fw-bold">Minh Anh</div>
              Cô dạy dễ hiểu, bám sát
            </div>
          </div>
          <div className="d-flex">
            <div className="flex-shrink-0">
              <img
                className="rounded-circle"
                src="https://i.pinimg.com/564x/73/c4/11/73c4110636ce8e4eb0a360ae9d7f5c94.jpg"
                style={{ width: "50px" }}
                alt="..."
              />
            </div>
            <div className="ms-3">
              <div className="fw-bold">Lan Anh</div>
              Hy vọng khi con lên lớp 11 cô vân dạy con
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
