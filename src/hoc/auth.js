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

        console.log(location.pathname);
        useEffect(() => {
            dispatch(auth(userinfos?.accessToken))
                .then((response) => {
                    console.log(response.payload);
                    if (!response.payload.isSuccess) {
                        if (option && location.pathname !== '/login') {
                            navigate('/login', { replace: true });
                        } else {
                            console.log('검증');
                        }
                    } else {
                        //로그인한 상태
                        if (response.payload.result.role < 0) {
                            if (location.pathname !== '/inputname') {
                                navigate('/inputname', { replace: true });
                            } else {
                                console.log('검증');
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
                                }else{
									
								}  
                            } else if (adminRoute === 2 && response.payload.result.role >= 0) {
                                navigate('/roomstart', { replace: true });
                            } else if (adminRoute === 1) {
                                if (
                                    response.payload.result.roomIdx === 0 &&
                                    response.payload.result.role === 0
                                ) {
                                    navigate('/roomstart', { replace: true });
                                }else if (
                                    response.payload.result.roomIdx > 0 &&
                                    response.payload.result.role === 0
                                ) {
                                    navigate('/roomwait', { replace: true });
                                }
                            } else {
                                if (option === false) {
                                    console.log('여기입니다');
                                    navigate('/', { replace: true });
                                }
                            }
                        }
                    }
                })
                .catch((error) => {
                    // 요청이 실패한 경우의 처리
                    console.error('error');
                });
        }, []);

        return <SpecificComponent />;
    }
    return AuthenticationCheck;
}