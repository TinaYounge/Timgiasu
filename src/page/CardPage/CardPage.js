import React from "react";
import CardItems from "../../components/CardItems/CardItems";
import Total from "../../components/Total/Total";

function CardPage() {
  return (
    <div>
      <div>
        <div className="py-5 bg-light">
          <div className=" px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-2"></div>
              <div className="col-lg-6">
                <CardItems />
              </div>
              <div className="col-lg-4">
                <Total />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
