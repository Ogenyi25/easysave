import React from "react";
import Navbar from "../partials/Navbar";


const Login = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="login-page">
                <div className="login-contents row container-fluid">
                    <div className="login-text col-md-5">
                        <div className="writings">
                            <h4 className="header">
                                Welcome Back
                            </h4>
                            <h6 className="paragraph">Please Login to continue from where you left off.</h6>
                        </div>
                    </div>
                    <div className="login-form col-md-5">
                        <div className="login-form-text">
                            Hello There!
                        </div>
                        <form className="form" autocomplete="off">
                            <div className="form-group" autocomplete="off">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <i className="fa fa-unlock" aria-hidden="true"></i>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>
                            <label className="tick">
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <br />
                            <a href="" className="forget">Forget password?</a>
                            <button className="btn btn-success">Login</button>
                            <div className="alternative">Or Login using</div>
                            <div className="social-icon">
                                <a href=""><i className="fa go fa-google-plus" aria-hidden="true"></i></a>
                                <a href="www.instagram.com/ogenyi21"><i className="fa ig fa-instagram"></i></a>
                                <a href="www.facebook.com/john.otor3" target="_blank"><i className="fa fab fa-facebook" aria-hidden="true"></i></a>
                                <a href="www.twitter.com"><i className="fa tw fa-twitter" aria-hidden="true"></i></a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}



export default Login;