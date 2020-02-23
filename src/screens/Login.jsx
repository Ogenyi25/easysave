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
                            <h6 className="paragraph">Login and continue where from where you left off.</h6>
                        </div>
                    </div>
                    <div className="login-form col-md-5">
                        <form className="form" autocomplete="off">
                            <div className="form-group">
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}



export default Login;