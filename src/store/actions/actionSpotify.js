import axios from "axios";
import { GET_SONGS, IS_ERROR } from "./actionType";


export function getAllSongs() {
   return async (dispatch) => {
      function onSuccess(success) {
         dispatch({ type: GET_SONGS, payload: success });
         return success;
      }
      function onError(error) {
         dispatch({ type: IS_ERROR, error });
         return error;
      }

      try {
         const res = await axios(`https://api.spotify.com/v1/search?q=english&type=track%2Cplaylist&market=ES&limit=30&offset=5`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + 'BQBeLJXn_XqqJuxyqntlbOByhW-CdjFlAiXmQzN2QfBN9V-T0cbWs6CcVD6dqqrZNo0CI9kwLl1FVRGjsqvDxC98Toc7ZbqNrbPN80H46hrUsHC_avHOrfD1pU6sY6G1dX9YXZP_hEGH5mwVyddnEbAC-i6MhuwDlVKt0HrnKBe567LRN87FsQkzajZvtC-wzu4SCVrWwAi_IMBbfy_6uXozF2pEdSsIevQWfO_fVsPNig' }
         })
         const songs = res.data.tracks.items
         return onSuccess(songs);
      } catch (error) {
         return onError(error);
      }
   }
}
export function searchSongs(searchText) {
   return async (dispatch) => {
      if (searchText === '') searchText = 'English'
      const args = searchText ? searchText : "English"
      function onSuccess(success) {
         dispatch({ type: GET_SONGS, payload: success });
         return success;
      }
      function onError(error) {
         dispatch({ type: IS_ERROR, error });
         return error;
      }

      try {
         const res = await axios(`https://api.spotify.com/v1/search?q=${args}&type=track%2Cplaylist&market=ES&limit=30&offset=5`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + 'BQBeLJXn_XqqJuxyqntlbOByhW-CdjFlAiXmQzN2QfBN9V-T0cbWs6CcVD6dqqrZNo0CI9kwLl1FVRGjsqvDxC98Toc7ZbqNrbPN80H46hrUsHC_avHOrfD1pU6sY6G1dX9YXZP_hEGH5mwVyddnEbAC-i6MhuwDlVKt0HrnKBe567LRN87FsQkzajZvtC-wzu4SCVrWwAi_IMBbfy_6uXozF2pEdSsIevQWfO_fVsPNig' }
         })
         const songs = res.data.tracks.items
         return onSuccess(songs);
      } catch (error) {
         return onError(error);
      }
   }
}
