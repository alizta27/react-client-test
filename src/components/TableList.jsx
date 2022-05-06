import { useEffect, useState } from "react";
import Header from "./Header";
import CardList from "./CardList";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../store/actions/actionSpotify";

export default function TableList() {
   const dispatch = useDispatch()
   console.log('RENDERING');

   const { songs } = useSelector((state) => state.spotifyReducer)
   useEffect(() => {
      dispatch(getAllSongs())

   }, [dispatch]);
   return (
      <div className="py-0">
         <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
            <Header></Header>
            <CardList songs={songs}></CardList>
         </div>
      </div>
   );
};
