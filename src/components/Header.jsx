import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSongs } from "../store/actions/actionSpotify";

export default function Header() {
   const [searchText, setSearchText] = useState('')
   const dispatch = useDispatch()


   const searchBox = (e) => {
      const { value } = e.target
      setSearchText(value)
   }

   const searchingSongs = (e) => {
      e.preventDefault()
      dispatch(searchSongs(searchText))
   }

   return (
      <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
         <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">

            <div className="flex flex-wrap justify-between lg:flex-nowrap">
               <div className="flex flex-col w-full gap-4 lg:flex-row md:flex-col p-7">
                  <div className="relative lg:max-w-[410px] w-full">
                     <input placeholder="Search" onChange={searchBox} name='search' value={searchText} className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600  lg:max-w-[410px] w-full leading-4" />
                     <svg className="absolute pointer-events-none top-3 right-5 " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <button onClick={searchingSongs} className="bg-indigo-700  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-indigo-600">Search</button>
               </div>
            </div>

         </div>
         <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">

            <div className="lg:ml-6 flex items-center">
               <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:bg-green-600 hover:bg-green-600 duration-150 justify-center items-center">Spotify Login</button>
            </div>
         </div>
      </div>
   );
}
