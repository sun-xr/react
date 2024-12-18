import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>not loggin</div>;
  return <div>Profile:{user.username}</div>;
}

export default Profile;
