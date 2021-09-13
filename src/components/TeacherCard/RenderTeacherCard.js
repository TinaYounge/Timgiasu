import React, { useEffect, useState } from "react";
import { Card, Carousel, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../redux/AllTeachers/GetAllTeacherAction";
import TeacherCard from "./TeacherCard";
function RenderTeacherCard({ page, limit }) {
  console.log("limt", page);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeachers(page.page, page.limit));
  }, [dispatch, page.page, page.limit]);
  const allTeacherInfo = useSelector((state) => state.allTeachers);
  let RenderCard;
  if (allTeacherInfo) {
    RenderCard = allTeacherInfo.user.map((item) => {
      return (
        <div className="">
          <TeacherCard teacherInfo={item} />
        </div>
      );
    });
  } else {
    RenderCard = (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    );
  }

  return <div className="card-group">{RenderCard}</div>;
}

export default RenderTeacherCard;
