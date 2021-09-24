import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItems from "../../components/CardItems/CardItems";
import Total from "../../components/Total/Total";
import { getSingleOwnUser } from "../../redux/LoginStudent/LoginStudentAction";

function CardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleOwnUser());
  }, [dispatch]);

  const singleStudentInfo = useSelector((state) => state.studentLogin.student);
  return (
    <div>
      <div>
        <div className="py-5 bg-light">
          <div className=" px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-2"></div>
              <div className="col-lg-6">
                <CardItems singleStudentInfo={singleStudentInfo} />
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
