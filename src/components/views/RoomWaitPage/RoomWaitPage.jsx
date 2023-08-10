import React,{useEffect} from 'react'
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from "../../config";

export default function RoomWaitPage() {
	const location = useLocation();
	const navigate = useNavigate();
	
	useEffect(()=>{
		
  		const params = new URLSearchParams(location.search);
  		const paramValue = params.get('roomId');
		axios
        .get(`${API_URL}room/${paramValue}`, {
          withCredentials: true,
        }) //
        .then((response) => {
          // 요청이 성공한 경우의 처리
			if(response.data.isSuccess){
				console.log(response.data);
         		navigate("/");
			}else{
				alert(response.data.message);
				navigate(`/roomwait?roomId=${paramValue}`);
			}
          
        })
        .catch((error) => {
          // 요청이 실패한 경우의 처리
          console.error(error);
        });
	},[])
  return (
    <Container className="loading_KOR">
		<MainText id= "maint">ParKING</MainText>
        <SubText>관리자 승인 대기 중입니다...</SubText>
        <LoadingContainer>
			<br/>
			
            <img src="https://blog.kakaocdn.net/dn/DulBu/btsqKEd1OL0/OksSKwtQszeyHwxurzDdY1/img.gif" style={{ width: '150px', height: 'auto'}} />
			<br/>		  
            <BottomText>LOADING</BottomText>
        </LoadingContainer>
        
    </Container>
  )
}

const Container = styled.div`
  margin-left:auto;
  margin-right:auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  flex-direction: column;
  position:relative;
  /*font-family: '';
   */
  @media (min-width: 800px) {
    width: 600px;
    height: 100vh;
    
  }
`;

const MainText=styled.h1`
   color: #452B75;
   font-size:50px;
   font-weight:bolder;
   /*font-family: '';
   */
   @media (min-width: 800px) {
    font-size:60px;
  }
`;
const SubText=styled.h3`
   color:#452B75;
   font-size:25px;
   font-weight:bolder;
   @media (min-width: 800px) {
    font-size:15px;
  }
`;
const LoadingContainer=styled.div`
    flex-direction:column;
    position:relative;
    top:35px;
    justify-content:flex-end;
    align-items:center;
    display:flex;
`;

const BottomText=styled.h1`
   color:#452B75;
   font-size:20px;
   font-weight:bolder;
   /*font-family: '';
   */
  @media (min-width: 800px) {
    font-size:40px;
  }
`;