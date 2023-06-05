import React from 'react';

const openCameraApp = () => {
    window.location.href = 'camera://'+window.location.href;
};

const CameraButton = () => (
    <button onClick={openCameraApp}>카메라 앱 실행</button>
);

export default CameraButton;