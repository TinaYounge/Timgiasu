import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";
import Logo from "../../Images/logo.png";
function SmallPic({ userInfo }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(userInfo));
  }, [userInfo, dispatch]);
  const singleUserInfo = useSelector((state) => state.singleUserInfo);
  return singleUserInfo.user[userInfo] ? (
    <div>
      <img
        className="rounded"
        src={singleUserInfo.user[userInfo].profilePicture}
        style={{ width: "90px" }}
        alt="teacher"
      />
    </div>
  ) : (
    <div>
      <img
        className="rounded-circle"
        src={Logo}
        style={{ width: "50px" }}
        alt="teacher"
      />
    </div>
  );
}

export default SmallPic;
