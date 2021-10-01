import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItems from "../../components/CardItems/CardItems";
import { getSingleOwnUser } from "../../redux/LoginStudent/LoginStudentAction";

function CardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleOwnUser());
  }, [dispatch]);

  const singleStudentInfo = useSelector((state) => state.studentLogin.student);
  return singleStudentInfo._id ? (
    <div>
      <div className="py-5 bg-light bgPink" style={{ minHeight: "80vh" }}>
        <div className=" px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-11">
              <CardItems singleStudentInfo={singleStudentInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>hahahah</div>
  );
}

export default CardPage;
