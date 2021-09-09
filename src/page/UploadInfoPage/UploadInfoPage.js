import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import UploadInfo from "../../components/UploadInfo/UploadInfo";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";

function UploadInfoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);
  const singleUserInfo = useSelector((state) => state.singleUserInfo.user);
  return (
    <div>
      <UploadInfo singleUserInfoCombine={[singleUserInfo, id]} />
    </div>
  );
}

export default UploadInfoPage;
