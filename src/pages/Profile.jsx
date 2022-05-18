import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/userSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const handleSignout = (event) => {
    event.preventDefault();
    dispatch(remove());
  };
  return (
    <div>
      <Typography variant="h3">Profile</Typography>
      <Button onClick={handleSignout}>Đăng xuất</Button>
    </div>
  );
};

export default Profile;
