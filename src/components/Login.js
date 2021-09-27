import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Ahsan Mumtaz",
              age: 21,
              email: "ahsanmumtaz008976@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}
