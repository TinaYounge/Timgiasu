import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Introduction from "../../components/Introduction/Introduction";
import NotifyClass from "../../components/NotifyClass/NotifyClass";
import Profile from "../../components/Profile/Profile";
import CartDidSell from "../../components/CartDidSell/CartDidSell";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";
import TableFoAcceptClass from "../../components/TableToBookClass/TableFoAcceptClass";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="btn-grad "
        style={{ padding: "5px" }}
        onClick={handleShow}
      >
        Khóa học đã bán
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Khóa học đã bán</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartDidSell />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function PersonalTeacherPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);
  const singleTeacherInfo1 = useSelector((state) => state.singleUserInfo.user);
  const singleTeacherInfo = singleTeacherInfo1;

  return singleTeacherInfo[id] ? (
    <div>
      <div>
        <div className="py-5 body-height teacherBg">
          <div className=" px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-2 ">
                <Profile
                  singleTeacherInfoAll={{
                    singleTeacherInfo: singleTeacherInfo[id],
                    id,
                  }}
                />
                <Example />
              </div>
              <div className="col-lg-6 ">
                <Introduction singleTeacherInfo={singleTeacherInfo[id]} />
                <TableFoAcceptClass />
              </div>
              <div className="col-lg-4 ">
                <NotifyClass />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>hhahah</div>
  );
}

export default PersonalTeacherPage;
