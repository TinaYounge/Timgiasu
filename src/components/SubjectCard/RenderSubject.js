import React from "react";
import SubjectCard from "./SubjectCard";
import Logo from "../../Images/Toan.jpg";

function RenderSubject() {
  const allSubjectsInfo = [
    {
      name: "Toán",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg",
    },
    {
      name: "Lý",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg",
    },

    {
      name: "Hóa",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg",
    },
    {
      name: "Tiếng Anh",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg",
    },
    {
      name: "Văn",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg",
    },
    {
      name: "Hội họa",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-music-2x-v2.jpg",
    },
    {
      name: "Lập trình",
      url: "https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg",
    },
    {
      name: "Tiếng Nhật",
      url: "https://thumbs.dreamstime.com/b/japanese-house-drawing-vector-sketch-traditional-34613403.jpg",
    },
    {
      name: "Piano",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkT3HQ5CWUPwOdh_L0PVIxN5-thuKE1mUq0noM3L3CPmMDablRFLUJx0YhuWsNS9y_rY&usqp=CAU",
    },
    {
      name: "Tiếng Pháp",
      url: "https://image.freepik.com/free-vector/eiffel-tower-paris-france-watercolor-sketch-hand-drawn-illustration_293360-234.jpg",
    },
  ];
  let RenderCard;
  if (allSubjectsInfo) {
    RenderCard = allSubjectsInfo.map((item) => {
      return (
        <div>
          <SubjectCard allSubjectsInfo={item} />
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return <div className="card-group">{RenderCard}</div>;
}

export default RenderSubject;
