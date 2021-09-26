// import moment from "moment";
// import React from "react";
// // import TimeBox from "./TimeBox";

// function TimeBox({ time }) {
//   return time.value === "1" ? (
//     <div>
//       <button
//         className=" btn mt-auto"
//         style={{ backgroundColor: "green", color: "white" }}
//       >
//         {time.timeId}
//       </button>
//     </div>
//   ) : (
//     <div>
//       <button
//         className=" btn mt-auto"
//         style={{ backgroundColor: "red", color: "white" }}
//       >
//         {time.timeId}
//       </button>
//     </div>
//   );
// }

// function DayBox({ dayAndTime }) {
//   const onlyTime = dayAndTime.time;

//   let RenderCard;
//   if (onlyTime) {
//     RenderCard = onlyTime.map((item) => {
//       return (
//         <div>
//           <TimeBox time={item} />
//         </div>
//       );
//     });
//   } else {
//     RenderCard = (
//       <div className="spinner-border text-primary" role="status">
//         <span className="sr-only">Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <th style={{ color: "grey", fontSize: "20px" }}>
//             {moment(dayAndTime.day).format("ddd Do")}
//           </th>
//         </thead>
//         <tbody>
//           <td class="table-primary"> {RenderCard}</td>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DayBox;
