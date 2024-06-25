import axios from "axios";
import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  //   const [menu, setMenu] = useState(true);
  const [page, setPage] = useState(1);
  const getMenuList = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      // console.log(res.data.data);
      return res;
    } catch (error) {
      console.log(error.response);
    }
  };

  const handlePageApi = (currentPage) => {
    console.log(currentPage);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <MenuContext.Provider
      value={{ getMenuList, handlePageApi, handleNextPage, handlePrevPage }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuContextProvider };
