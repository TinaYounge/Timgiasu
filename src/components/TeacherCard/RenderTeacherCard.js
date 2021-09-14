import React, { useEffect } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/AllTeachers/GetAllTeacherAction";
import TeacherCard from "./TeacherCard";
import "./StyleTeacherCard.css";
function RenderTeacherCard({ page, limit }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeachers(page.page, page.limit));
  }, [dispatch, page.page, page.limit]);
  const allTeacherInfo = useSelector((state) => state.allTeachers);
  let RenderCard;
  if (allTeacherInfo) {
    if ((allTeacherInfo.loading = false)) {
      RenderCard = (
        <div class="card-group">
          <div className="  px-2 mt-2 py-3 res1">
            <div className="card shadow  ">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/268x180/786978/2a2c40&text=Timgiasu"
                />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button className="btn-grad" xs={6} />
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="  px-2 mt-2 py-3  ">
            <div className="card shadow  " style={{ width: "15rem" }}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/268x180/786978/2a2c40&text=Timgiasu"
                />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button className="btn-grad" xs={6} />
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="  px-2 mt-2 py-3  ">
            <div className="card  shadow  " style={{ width: "15rem" }}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/268x180/786978/2a2c40&text=Timgiasu"
                />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button className="btn-grad" xs={6} />
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="  px-2 mt-2 py-3  ">
            <div className="card shadow  " style={{ width: "15rem" }}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/268x180/786978/2a2c40&text=Timgiasu"
                />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button className="btn-grad" xs={6} />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      RenderCard = allTeacherInfo.user.map((item) => {
        return (
          <div className="">
            <TeacherCard teacherInfo={item} />
          </div>
        );
      });
    }
  } else {
    RenderCard = <div>Updating</div>;
  }

  return <div className="card-group">{RenderCard}</div>;
}

export default RenderTeacherCard;
