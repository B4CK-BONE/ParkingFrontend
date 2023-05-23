import Axios from "axios";
import { AUTH_USER } from "./types";
import { useCookies } from "react-cookie";

export function auth() {
  const request = Axios.get(
    "https://backbone-ufribf.run.goorm.site/api/user/auth",
    { withCredentials: true }
  ).then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
