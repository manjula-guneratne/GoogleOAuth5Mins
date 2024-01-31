import {GoogleLogin} from 'react-google-login';

const clientId = "438217882489-3ioc8gv2q2s8js0aftsirtmb30166lgb.apps.googleusercontent.com"

function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText='Login'            
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;