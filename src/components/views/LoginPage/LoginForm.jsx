import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // 로그인 폼에 대한 CSS 스타일 파일

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // 로그인 처리 로직 작성

  // 예시: 입력한 아이디와 비밀번호를 출력
  console.log('User ID:', userId);
  console.log('Password:', password);

  // 데이터 전송을 위한 요청 바디(body) 구성
  const requestBody = {
    userId: userId,
    password: password,
  };

  // axios를 사용하여 특정 URL로 데이터 전송
  axios
    .post('/login', requestBody)
    .then((response) => {
      // 응답 처리
      console.log('Login response:', response.data);

      // 로그인 성공 시 리다이렉트 또는 다른 처리를 수행할 수 있습니다.
    })
    .catch((error) => {
      // 오류 처리
      console.error('Login error:', error);
    });
};

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={handleUserIdChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;