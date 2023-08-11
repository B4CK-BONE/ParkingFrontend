import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { API_URL } from '../../config';
import { useSelector } from 'react-redux';

function ListPage(props) {
    const [ParkingList, setParkingList] = useState([]);
    const userinfos = useSelector((state) => state.user);
    let position2 = [
        {
            bottom: '56vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            direction: 'a',
            endDate: '08-10',
            endTime: '21:52',
            car: '12가1234',
            slot: 1,
            use: true,
        },
        {
            bottom: '50vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 2,
            use: false,
        },
        {
            bottom: '44vh',
            right: '70%',
            height: '5vh',
            width: '20vw',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 3,
            use: false,
        },
        {
            bottom: '56vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 4,
            use: false,
        },
        {
            bottom: '50vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 5,
            use: false,
        },
        {
            bottom: '44vh',
            right: '12%',
            height: '5vh',
            width: '20vw',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 6,
            use: false,
        },
        {
            bottom: '40vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 7,
            use: false,
        },
        {
            bottom: '51vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 8,
            use: false,
        },
        {
            bottom: '51vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 9,
            use: false,
        },
        {
            bottom: '40vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 10,
            use: false,
        },
        {
            bottom: '28vh',
            right: '40%',
            height: '10vh',
            width: '5vh',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 11,
            use: false,
        },
        {
            bottom: '28vh',
            right: '55%',
            height: '10vh',
            width: '5vh',
            direction: 'a',
            endDate: null,
            endTime: null,
            car: null,
            slot: 12,
            use: false,
        },
    ];

    useEffect(() => {
        let body = {
            userIdx: 1,
        };
        const config = {
            headers: {
                // Authorization: `Bearer ${userinfos?.isSuccess?.accessToken}`,
            },
            withCredentials: true,
        };
        Axios.get(`${API_URL}parking`, body, config)
            .then((response) => {
                // 요청이 성공한 경우의 처리
                console.log(response.data);
                setParkingList(response.data);
            })

            .catch((error) => {
                // 요청이 실패한 경우의 처리
                console.error(error);
            });
    }, []);
    return (
        <div ref={props.ref} className="wrap loaded">
            {position2.map(
                (list, index) =>
                    list.use && (
                        <React.Fragment key={index}>
                            <Ulclass>
                                <Liclass>
                                    <Divclass>
                                        <Divchildclass>
                                            <Imgclass
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0Tvq5VSi_Njmqxzi4ypD2qmrErUPorLQXA&usqp=CAU"
                                                alt="Neil image"
                                            />
                                        </Divchildclass>
                                        <Divchild2class>
                                            <Pclass>{list.slot} 번 사용중</Pclass>
                                            <Pclass2>{list.car}</Pclass2>
                                        </Divchild2class>
                                        <Divchild3class>
                                            {list.endDate.split('-')[0]}월{' '}
                                            {list.endDate.split('-')[1]}일 {list.endTime} 까지 사용
                                            예정
                                        </Divchild3class>
                                    </Divclass>
                                </Liclass>
                            </Ulclass>
                        </React.Fragment>
                    )
            )}
        </div>
    );
}

export default ListPage;

const Ulclass = styled.ul`
    padding-left: 0px;
    margin: auto;
    list-style: none;
    max-width: 28rem; /* max-w-md in Tailwind CSS */
    border-color: #e5e7eb; /* divide-gray-200 in Tailwind CSS */
    &.divide-y > li:not(:last-child) {
        border-bottom-width: 1px;
        border-bottom-color: #e5e7eb; /* divide-gray-200 in Tailwind CSS */
    }
`;

const Liclass = styled.li`
    /* 스크린 크기가 작을 때 */
`;

const Divclass = styled.div`
    border-bottom: 1px solid #d3d3d3;
    display: flex; /* flex in Tailwind CSS */
    align-items: center; /* items-center in Tailwind CSS */
    justify-content: space-between; /* space-x-4 in Tailwind CSS */

    & > div {
        flex: auto; /* flex-1 in Tailwind CSS */
        min-width: 0; /* min-w-0 in Tailwind CSS */
    }

    & > div:last-child {
        display: inline-flex; /* inline-flex in Tailwind CSS */
        align-items: center; /* items-center in Tailwind CSS */
        font-size: 1rem; /* text-base in Tailwind CSS */
        font-weight: 600; /* font-semibold in Tailwind CSS */
        color: #1f2937; /* text-gray-900 in Tailwind CSS */
    }
`;

const Divchildclass = styled.div`
    flex-shrink: 0;
    text-align: center;
`;

const Imgclass = styled.img`
    width: 2rem; /* w-8 in Tailwind CSS */
    height: 2rem; /* h-8 in Tailwind CSS */
    border-radius: 50%; /* rounded-full in Tailwind CSS */
`;

const Divchild2class = styled.div`
    flex: auto; /* flex-1 in Tailwind CSS */
    min-width: 0; /* min-w-0 in Tailwind CSS */
`;

const Pclass = styled.p`
    font-size: 0.875rem; /* text-sm in Tailwind CSS */
    font-weight: 500; /* font-medium in Tailwind CSS */
    color: #1f2937; /* text-gray-900 in Tailwind CSS */
    overflow: hidden; /* truncate in Tailwind CSS */
    text-overflow: ellipsis; /* truncate in Tailwind CSS */
    white-space: nowrap; /* truncate in Tailwind CSS */
    margin: 10px;
`;

const Pclass2 = styled.p`
    font-size: 0.875rem; /* text-sm in Tailwind CSS */
    color: #6b7280; /* text-gray-500 in Tailwind CSS */
    overflow: hidden; /* truncate in Tailwind CSS */
    text-overflow: ellipsis; /* truncate in Tailwind CSS */
    white-space: nowrap; /* truncate in Tailwind CSS */
    margin: 10px;
`;

const Divchild3class = styled.div`
    display: inline-flex; /* inline-flex in Tailwind CSS */
    align-items: center; /* items-center in Tailwind CSS */
    font-size: 1.125rem; /* text-base in Tailwind CSS */
    font-weight: 600; /* font-semibold in Tailwind CSS */
    color: #1f2937; /* text-gray-900 in Tailwind CSS */
`;