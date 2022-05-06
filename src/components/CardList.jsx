const CardList = ({ songs }) => {

   return (
      <div className="py-8 lg:flex w-full">
         <div className="lg:flex items-center flex-wrap pb-10 justify-center w-full">
            {
               songs && songs.map((el, idx) => {
                  return (
                     <div key={idx} className="lg:w-4/12 lg:mr-7 lg:mb-10 mb-7 bg-white p-6 shadow rounded">
                        <div className="flex items-center">
                           <img src={el.album.images[2].url} alt className="w-12 h-12 rounded-full" />
                           <div className="flex items-start justify-between w-full">
                              <div className="pl-3 w-full">
                                 <p className="text-xl font-medium leading-5 text-gray-800">{el.name}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};
export default CardList;
