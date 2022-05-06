import { IS_ERROR, GET_SONGS } from "../actions/actionType"

const initialState = {
   error: null,
   songs: []
}

function spotifyReducer(state = { initialState }, action) {
   switch (action.type) {
      case GET_SONGS:
         return {
            ...state,
            songs: action.payload
         }
      case IS_ERROR:
         return {
            ...state,
            error: action.payload
         }
      default:
         return state
   }
}

export default spotifyReducer