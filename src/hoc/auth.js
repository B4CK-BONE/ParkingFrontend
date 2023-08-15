/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const userinfos = useSelector((state) => state.user);
        const location = useLocation();

        useEffect(() => {
            dispatch(auth(userinfos?.accessToken))
                .then((response) => {
                    if (!response.payload.isSuccess) {
                        if (option && location.pathname !== '/login') {
                            navigate('/login', { replace: true });
                        } else {
                        }
                    } else {
                        if (response.payload.result.role < 0) {
                            if (location.pathname !== '/inputname') {
                                navigate('/inputname', { replace: true });
                            } else {
                            }
                        } else {
                            if (adminRoute === 3 && response.payload.result.role !== 2) {
                                navigate('/', { replace: true });
                            } else if (adminRoute === 5) {
                                if (
                                    response.payload.result.role === 0 &&
                                    response.payload.result.roomIdx > 0
                                ) {
                                    navigate('/roomwait', { replace: true });
                                } else if (
                                    response.payload.result.role === 1 &&
                                    response.payload.result.roomIdx > 0
                                ) {
                                    navigate('/', { replace: true });
                                } else if (
                                    response.payload.result.role === 2 &&
                                    response.payload.result.roomIdx > 0
                                ) {
                                    navigate('/', { replace: true });
                                }
                            } else if (adminRoute === 4) {
                                if (
                                    response.payload.result.role === 2 &&
                                    response.payload.result.roomIdx > 0
                                ) {
                                    navigate('/', { replace: true });
                                } else if (
                                    response.payload.result.role === 1 &&
                                    response.payload.result.roomIdx > 0
                                ) {
                                    navigate('/', { replace: true });
                                } else {
                                }
                            } else if (adminRoute === 2 && response.payload.result.role >= 0) {
                                navigate('/roomstart', { replace: true });
                            } else if (adminRoute === 1) {
                                if (
                                    response.payload.result.roomIdx === 0 &&
                                    response.payload.result.role === 0
                                ) {
                                    navigate('/roomstart', { replace: true });
                                } else if (
                                    response.payload.result.roomIdx > 0 &&
                                    response.payload.result.role === 0
                                ) {
                                    navigate('/roomwait', { replace: true });
                                }
                            } else {
                                if (option === false) {
									if(response.payload.result.role > -1 && location.pathname !== '/inputname'){
										navigate('/inputname', { replace: true });
									}else if(response.payload.result.role === 0 && location.pathname !== '/roomstart'){
										navigate('/roomstart', { replace: true });
									}else if(response.payload.result.role === 1 && location.pathname !== '/'){
										navigate('/', { replace: true });
									}else if(response.payload.result.role === 2 && location.pathname !== '/'){
										navigate('/', { replace: true });
									}
                                    
                                }
                            }
                        }
                    }
                })
                .catch((error) => {
                    if (location.pathname !== '/login') {
                            navigate('/login', { replace: true });
                        } else {
                        }
                });
        }, []);

        return <SpecificComponent />;
    }
    return AuthenticationCheck;
}