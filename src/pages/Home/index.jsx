import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { TYPES } from "../../redux/type";

const Home = () => {
  const { login, loginHandler } = useContext(AuthContext);
  const { authReducer } = useSelector((data) => data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: TYPES.LOGOUT,
      payload: false,
    });
  };

  const handleLogin = () => {
    dispatch({
      type: TYPES.LOGIN,
      payload: true,
    });
  };
  // console.log("dari context home", login);
  console.log("data redux", authReducer);
  return (
    <div>
      <h1>Ini halaman Home</h1>
      {/* <button onClick={loginHandler}>Login</button> */}
      {authReducer.isLogin ? <p>anda sudah login</p> : <p>anda belum login</p>}
      <button style={{ padding: 5 }} onClick={handleLogin}>
        Login
      </button>
      <button
        onClick={handleLogout}
        style={{
          padding: 5,
          backgroundColor: "red",
          color: "white",
          border: "none",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
