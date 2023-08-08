/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response.payload.isAuth);
        // if (!response.payload.isAuth) {
        //   if (option) {
        //     navigate("/roomstart", { replace: true });
        //   }
        // } else {
        //   //로그인한 상태
        //   if (adminRoute && !response.payload.isAdmin) {
        //     navigate("/", { replace: true });
        //   } else {
        //     if (option === false) {
        //       navigate("/", { replace: true });
        //     }
        //   }
        // }
      });
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
