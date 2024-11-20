import { combineReducers } from "redux";
import {  userReducer } from './user.reducer'
import {  postReducer } from './post.reducer'
// export default combineReducers({
//     // REDUCERS

// })

const rootReducer = combineReducers({
    // REDUCERS
    userReducer,
    postReducer,
    
  });
  
export default rootReducer;