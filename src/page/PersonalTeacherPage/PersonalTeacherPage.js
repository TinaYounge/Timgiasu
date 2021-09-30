// import React, { useEffect, useState } from "react";
// import { Offcanvas, Spinner } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";
// import Introduction from "../../components/Introduction/Introduction";
// import NotifyClass from "../../components/NotifyClass/NotifyClass";
// import CartDidSell from "../../components/CartDidSell/CartDidSell";
// import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";
// import TableFoAcceptClass from "../../components/TableToBookClass/TableFoAcceptClass";

// function Example() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <div
//         className="btn-grad "
//         style={{ padding: "5px" }}
//         onClick={handleShow}
//       >
//         Khóa học đã bán
//       </div>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Khóa học đã bán</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <CartDidSell />
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// function PersonalTeacherPage() {
//   const { id } = useParams();
//   console.log("hahah", id);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getSingleUser(id));
//   }, [dispatch, id]);
//   const singleTeacherInfo1 = useSelector((state) => state.singleUserInfo.user);
//   const singleTeacherInfo = singleTeacherInfo1;

//   return singleTeacherInfo[id] ? (
//     <div>
//       <div>
//         <div className="py-5 body-height teacherBg">
//           <div className=" px-5 my-5">
//             <div className="row gx-5">
//               <div className="col-lg-2 ">
//                 <PersonalTeacherPage
//                   singleTeacherInfoAll={{
//                     singleTeacherInfo: singleTeacherInfo[id],
//                     id,
//                   }}
//                 />
//                 <Example />
//               </div>
//               <div className="col-lg-6 ">
//                 <Introduction singleTeacherInfo={singleTeacherInfo[id]} />
//                 <TableFoAcceptClass />
//               </div>
//               <div className="col-lg-4 ">
//                 <NotifyClass />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div style={{ minHeight: "80vh" }}>
//       <br />
//       <center>
//         <Spinner animation="border" variant="primary" />
//         <Spinner animation="border" variant="secondary" />

//         <Spinner animation="border" variant="success" />
//         <Spinner animation="border" variant="danger" />
//         <Spinner animation="border" variant="warning" />
//         <Spinner animation="border" variant="info" />
//         <Spinner animation="border" variant="light" />
//         <Spinner animation="border" variant="dark" />
//         <Spinner animation="grow" variant="primary" />
//         <Spinner animation="grow" variant="secondary" />
//         <Spinner animation="grow" variant="success" />
//         <Spinner animation="grow" variant="danger" />
//         <Spinner animation="grow" variant="warning" />
//         <Spinner animation="grow" variant="info" />
//         <Spinner animation="grow" variant="light" />
//         <Spinner animation="grow" variant="dark" />
//       </center>
//     </div>
//   );
// }

// export default PersonalTeacherPage;
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
              <div className="col-lg-2  ">
                <div className="box" style={{ padding: "5px" }}>
                  <Profile
                    singleTeacherInfoAll={{
                      singleTeacherInfo: singleTeacherInfo[id],
                      id,
                    }}
                  />
                  <Example />
                </div>
              </div>
              <div className="col-lg-6 box ">
                <div className="">
                  <article>
                    <header className="mb-4 ">
                      <h1 className="fw-bolder mb-1 mt-2">
                        Xin chào {singleTeacherInfo[id].fullname}!
                      </h1>
                    </header>
                    <section className="mb-3"></section>
                  </article>
                </div>{" "}
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
    <div>Loading...</div>
  );
}

export default PersonalTeacherPage;
