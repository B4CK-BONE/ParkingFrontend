import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

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
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <img
        src={Src}
        alt={qrUrl[0].QRcodeUrl}
        width={"200px"}
        style={{
          marginTop: "200px",
        }}
      />
    </div>
  );
}

export default QrPage;
