import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { API_URL } from '../../../config';
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
    const clientId = process.env.REACT_APP_CLIENT_KEY;
	const navigate = useNavigate();
	
    return (
        <div>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res.credential);
                        if (res.credential !== null) {
							let body= {
								jwt : res.credential
							}
                            axios
                                .post(`${API_URL}login`, body,{
                                    withCredentials: true,
                                })
                                .then((response) => {
                                    // 요청이 성공한 경우의 처리
                                    if (response.data.isSuccess) {
                                        console.log(response.data);
                                       
                                    } else {
                                        alert(response.data.message);
                                        navigate('/login');
                                    }
                                })
                                .catch((error) => {
                                    // 요청이 실패한 경우의 처리
                                    console.error(error);
                                });
                        }
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default GoogleLoginButton;