import { useEffect, useState } from "react";
import React from 'react'
import Loading from "./loading/Loading";

export const AllMenuContext = React.createContext()

export default function Context(props){
    const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState([]);

  async function getAllDatas() {
    setLoading(true)
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
  }
  useEffect(() => {
    getAllDatas();
  }, []);

    return(
        <AllMenuContext.Provider value={menu}>
            {!loading ? props.children: <Loading/>}
        </AllMenuContext.Provider>
    )
}
