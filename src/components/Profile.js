import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { name, age, email } = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Age:{age}</p>
      <p>Email:{email}</p>
    </div>
  );
}
