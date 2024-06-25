import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MenuContext } from "../../context/MenuContext";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TYPES } from "../../redux/type";

const Menu = () => {
  const dispatch = useDispatch();
  const { menuReducer } = useSelector((data) => data);
  const [menuReduxs, setMenuReduxs] = useState([]);
  const { login, loginHandler } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);
  const { getMenuList, handleNextPage, handlePrevPage } =
    useContext(MenuContext);
  // console.log("dari context menu", login);
  const getDataMenuList = async () => {
    const data = await getMenuList();
    setMenu(data.data.data);
  };

  const getDataMenuMudo = async () => {
    try {
      const res = await axios.get("https://api.mudoapi.tech/menus");
      console.log("menu mudo", res.data.data.Data);
      dispatch({
        type: TYPES.GET_MENU,
        payload: res.data.data.Data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // getDataMenuList();
    getDataMenuMudo();
    // setMenuReduxs(menuRedux.data.data);
  }, [handlePrevPage, handleNextPage]);
  // console.log("data menu", menu);
  // console.log("menu redux", menuRedux.data.data);
  console.log("menu reducer", menuReducer.menu);
  return (
    <div>
      <h1>Ini halaman Menu</h1>
      {/* {menuReducer.data.data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))} */}
      {menuReducer.menu.map((item) => (
        <div key={item.id} className="card">
          <img style={{ width: 150 }} src={item.imageUrl}></img>
          <h4>{item.priceFormatted}</h4>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      <button onClick={handlePrevPage}>prev</button>
      <button onClick={handleNextPage}>next</button>
      {/* <button onClick={getMenuList}>tombols</button> */}
    </div>
  );
};

export default Menu;
