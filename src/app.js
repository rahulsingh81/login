import React, { useCallback, useState } from 'react';
import { render } from "react-dom";
// import { User } from './User';
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialInstagram,
  LoginSocialTwitter,
  LoginSocialGithub,
  LoginSocialLinkedin,
} from "reactjs-social-login";

import {
  GoogleLoginButton,
  InstagramLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  GithubLoginButton,
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
          appId='656556502867824'
          fieldsProfile={
            "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
          }
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialInstagram
          client_id='92e41df2ba8d21eaa30446a2854c172b'
          client_secret='325c86d8feda8452f2b339a5ae0294a9'
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='public_profile  login'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("instagram", { provider, data });
            setProvider(provider);
            setProfile(data);
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

        <LoginSocialGithub
          client_id='bcc32ea35b9f8474e8b5'
          client_secret='39c2b68da9cf2fec0656c5a5c171042dbd398550'
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            console.log("github", { provider, data });
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}>
          <GithubLoginButton />
        </LoginSocialGithub>

        <LoginSocialLinkedin
          client_id=' 77b5wm88k5v9jn'
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope='tweet.read
               users.read'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({ provider, data }) => {
            console.log("linkedin", { provider, data });
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


