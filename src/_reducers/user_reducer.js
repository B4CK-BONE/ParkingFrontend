import { AUTH_USER, ACCESS_TOKEN } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
		  
	case ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }	  
    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
