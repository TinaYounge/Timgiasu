import React from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);

function OverLay() {
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
    </div>
  );
}

export default OverLay;
