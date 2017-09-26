import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

import $ from 'jquery';


var SignUp = () => {

    return (
      <div className="container">
        <div className="row">
            <div className = "ui main text container segment">
                <h1>Create account</h1>
                    <div >
                        <form action="/home" method="POST">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <label>Github</label>
                                <input className="form-control" type="text" name="github" placeholder="cats123"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="text" name="email" placeholder="hacks@hacks.com"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" name="password" placeholder="at least 6 characters"/>
                            </div>
                            <div className="form-group">
                                <label>Re-enter password</label>
                                <input className="form-control" type="password" name="" placeholder=""/>
                            </div>


                            <div className="form-group">
                                <button className="btn btn-lg btn-primary btn-block">Create your HackedIn</button>
                            </div>
                        </form>
                    <a href="/SignIn">Sign In</a>
                </div>
            </div>
        </div>
    </div>
    )

}
export default SignUp;
