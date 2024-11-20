import { GET_USER, ADD_USER_LIKE } from "../actions/user.action";

// const initialState = { user: "tawounfouet"}
const initialState = {};

// export default function userReducer(state = initialState, action) {
//       // switch
//     switch (action.type) {
//         case GET_USER:
//             return action.payload;
//         default:
//             return state
//     }
    
// }

export const userReducer = (state=initialState, action) => {
    // Logique du réducteur ici
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case ADD_USER_LIKE:
            return {
                ...state,
                likes: action.payload.likes,
            };

        default:
            return state
    }
};