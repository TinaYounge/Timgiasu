import React from "react";

function TimeBox({ time }) {
  return (
    <div>
      <button type="button" class="btn btn-warning">
        {time}
      </button>
    </div>
  );
}

export default TimeBox;
