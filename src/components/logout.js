import { GoogleLogout } from "react-google-login";

const clientId = "438217882489-3ioc8gv2q2s8js0aftsirtmb30166lgb.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () => {
        console.log("Log out successfull!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )

}

export default Logout;