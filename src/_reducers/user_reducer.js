import { AUTH_USER, REFRESH_TOKEN } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
		  
	case REFRESH_TOKEN:
            return { ...state, isSuccess: action.payload }	  
    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
