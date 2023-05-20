import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import styled from "styled-components";
import Axios from "axios";
import { useCookies } from 'react-cookie';

function QrPage() {
  const [Src, setSrc] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['id']);

  let qrUrl = [
    {
      QRcodeUrl: "https://www.youtube.com/watch?v=bVGGsVt2t6o",
    },
  ];

  useEffect(() => {
     const token = cookies.id; // 쿠키에서 id 를 꺼내기
    Axios.get(`https://backbone-ufribf.run.goorm.site/getroom?id=${token}`, {
      withCredentials: true,
    })
      .then((response) => {
        // 요청이 성공한 경우의 처리
        console.log(response.data);
        QRCode.toDataURL(`https://backbone-xpiar.run.goorm.site/roomjoin?roomkey=${response.data}`).then((data) => {
          setSrc(data);
        });
      })
      .catch((error) => {
        // 요청이 실패한 경우의 처리
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcYaxSE%2FbtsfdaHthmR%2F1f2rjzIEmZbuy8EfSEHyok%2Fimg.png"
          alt="QrcodeImg"
          style={{
            width: "80px",
            height: "80px",
            margin: "30px 0px 10px 10px",
          }}
        />
        <QrcodeH3>QR코드로 방을 입장할 수 있습니다.</QrcodeH3>
        <QrcodeChildDiv>앱 상단바 &gt; QR코드 스캔 </QrcodeChildDiv>
      </div>
      <QrcodeDiv>
        <img
          src={Src}
          alt={1}
          width={"200px"}
          style={{
            marginTop: "100px",
            marginBottom: "200px",
            border: "4px solid #452b75",
          }}
        />
      </QrcodeDiv>
    </div>
  );
}

export default QrPage;

const QrcodeDiv = styled.div`
  background-color: #ffffff;
  text-align: center;
  min-height: calc(80vh - 80px);
`;

const QrcodeH3 = styled.h3`
  margin: 0px 30px 8px 30px;
`;

const QrcodeChildDiv = styled.div`
  margin: 0px 30px 30px 30px;
  color: #495057;
  font-size: small;
`;
