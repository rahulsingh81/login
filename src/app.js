import React, { useCallback, useState } from 'react';
import { render } from "react-dom";
// import { User } from './User';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialInstagram,
  LoginSocialTwitter,
  LoginSocialLinkedin,
} from "reactjs-social-login";

import {
  GoogleLoginButton,
  InstagramLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";

// import { ReactComponent as PinterestLogo } from './assets/pinterest.svg';

const REDIRECT_URI =
  ('http://localhost:3000/account/login')

const App = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  return (
    <>
      {/* {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )} */}
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <h1 className='title'>ReactJS Social Login</h1>

        <LoginSocialGoogle
          client_id='279985039527-0vm0k9g709urtkstb476ealch82j6cj7.apps.googleusercontent.com'
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='openid profile email'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("hello", { provider, data });
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <GoogleLoginButton />
        </LoginSocialGoogle>

        <LoginSocialFacebook
          client_id='b6ea76e94c101cdcf301038022fe2e24'
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='public_profile email'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("facebook", { provider, data });
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialInstagram
          client_id='54b51f40aaddb9105f62cd1d639cb205'
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='public_profile  login'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("instagram", { provider, data });
            setProvider(provider);            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <InstagramLoginButton />
        </LoginSocialInstagram>

        <LoginSocialTwitter
          client_id=''
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='open twitter'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("hello", { provider, data });
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <TwitterLoginButton />
        </LoginSocialTwitter>

        <LoginSocialLinkedin
          client_id=' 77b5wm88k5v9jn'
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='tweet.read
               users.read'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("hello", { provider, data });
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <LinkedInLoginButton />
        </LoginSocialLinkedin>


        
      </div>
    </>
  );
}; 

export default App;


