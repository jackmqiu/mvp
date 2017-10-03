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
                                <label>Picture Link</label>
                                <input className="form-control" type="text" name="picturelink" placeholder="www.imgur.com/abcd"/>
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
