import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from "react";
import {gapi} from "gapi-script";

const clientId = "438217882489-3ioc8gv2q2s8js0aftsirtmb30166lgb.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });

  // Extra -- If you need an API setup
  // var accessToken = gapi.auth.getToken().access_token;


  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
