import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TeacherPriceInput from "../../components/TeacherPriceInput/TeacherPriceInput";
import TeacherTimeInput from "../../components/TeacherTimeInput/TeacherTimeInput";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";
import { UpdateInfoExUser } from "../../redux/User/RegisterAction";

function TeacherUploadClassAndTimePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(
    (id) => {
      dispatch(getSingleUser(id));
    },
    [dispatch, id]
  );
  const singleUserInfo = useSelector((state) => state.singleUserInfo.user);

  return singleUserInfo[id] ? (
    <div>
      <div>
        <div className="py-5">
          <div className=" bg-light   px-4 px-md-5 mb-5 py-5">
            <div className=" px-5 my-5  mb-5">
              <div className=" px-5 my-5">
                <div className="text-center section-separator">
                  <h2 className="fw-bolder">
                    Cập nhật thông tin lớp học và thời gian biểu{" "}
                  </h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Cập nhật đầy đủ để học sinh đánh giá cao bạn{" "}
                  </p>
                </div>
              </div>
              <TeacherPriceInput />
              <br />
              <div className="px-5 my-5 section-separator "></div>
              <TeacherTimeInput singleUserInfo={singleUserInfo} />
              <div className="px-5 my-5 section-separator "></div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    id="gridCheck"
                  />

                  <label className="form-check-label " for="gridCheck">
                    Tôi đồng ý với mọi điều kiện của công ty{" "}
                  </label>
                </div>
              </div>
              <center>
                <Link to={"/PersonalTeacherPage/" + id}>
                  <div className="btn-lg btn-grad" style={{ width: "200px" }}>
                    Tiếp tục
                  </div>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Up loading</div>
  );
}

export default TeacherUploadClassAndTimePage;
