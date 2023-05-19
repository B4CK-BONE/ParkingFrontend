import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import styled from "styled-components";

function QrPage() {
  const [Src, setSrc] = useState("");

  let qrUrl = [
    {
      QRcodeUrl: "https://www.youtube.com/watch?v=bVGGsVt2t6o",
    },
  ];

  useEffect(() => {
    QRCode.toDataURL(qrUrl[0].QRcodeUrl).then((data) => {
      setSrc(data);
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
          alt={qrUrl[0].QRcodeUrl}
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
