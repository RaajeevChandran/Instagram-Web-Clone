import "../../App.css";
import React, { Component } from "react";
import {Link} from "react-router-dom"
class LoginHome extends Component {
  
  
  loginCard = () => {
     
    return (
      <div className="loginCard">
        <img src={require("../../Assets/instalogo.png")} alt="" />
        <div className="inputForm">
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value="example@xyz.com"
            placeholder="Phone number,username or email"
            readOnly={true}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            value="12345"
            readOnly={true}
          />
          <Link to="/home" className="enabled-button text-center">Log in</Link>
          </div>
        <div className="or-container">
          <div className="or-text-container">
            <h2 className="or-text">
              <span>OR</span>
            </h2>
          </div>
          <div className="or-text-container2">
            <h6 className="text-center">
              <i className="fa fa-facebook-official" style={{color:"#385185",textAlign:"center",fontSize:"16px"}} aria-hidden="true"></i>
              <a href="/"> Log in with Facebook</a>
            </h6>
          </div>
          <div className="or-text-container3">
            <h2 className="forgot-password">Forgot Password?</h2>
          </div>
        </div>
      </div>
    );
  };

  mainContent=()=>{
    return(
      <div className="opener">
      <div className="opener-div">
        
        <div className="phone">
          <div className="slide1"></div>
          <div className="slide2"></div>
          <div className="slide3"></div>
          <div className="slide4"></div>
          <div className="slide5"></div>
        </div>
      </div>
      <div className="opener-div2">
        <div className="login-container">{this.loginCard()}</div>
        <div className="loc">
          <div className="break">
            <h1>
              Don't have an account?<span> Sign up</span>
            </h1>
          </div>
          <div className="app-banner">
            <div className="app-banner-text">
              <h6 className="text-center">Get the app.</h6>             
               </div>
            <div className="app-stores">
              <a rel="noopener noreferrer" href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank"><img src={require("../../Assets/img.png")} alt=""/></a>
              <a rel="noopener noreferrer"href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DBE4382B2-7F47-4FB5-9F5B-28D9807F11BE%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank"><img src={require("../../Assets/playstore.png")} alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  footer=()=>{
    const footer = ["ABOUT","HELP","PRESS","API","JOBS","PRIVACY","TERMS","LOCATIONS","TOP ACCOUNTS","HASHTAGS","LANGUAGE"];

    return (<div className="foote">
            
    <div className="footer-div-1">
      {footer.map((foo)=>{
        return (<h6 style={{fontSize:"12px",margin:"5px",cursor:"pointer"}}>{foo}</h6>)
      })}
    </div>
    <div className="footer-div-2">
      <h4  style={{fontSize:"12px",color:"#8E8E8E",textTransform:"uppercase"}}>&#169; 2020 Instagram Clone by RCN</h4>
    </div>
</div>)
  }


  render() {
    return (
      <div style={{width:"100%",height:"100%"}}>
        {this.mainContent()}

      </div>
    );
  }
}

export default LoginHome;
