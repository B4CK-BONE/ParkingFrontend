import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";


const GoogleLoginButton = () => {
    const clientId = process.env.REACT_APP_CLIENT_KEY;
    return (
        <div>
            <GoogleOAuthProvider clientId={clientId} >
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res.credential);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default GoogleLoginButton
