import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

import $ from 'jquery';


var User = (props) => {
  if(props.user) {
    return (
      <div className="col-md-3 col-sm-6">
          <div className="thumbnail">

              <div className="row">
                  <div className="imagethumb"><img  src={props.user.picturelink} /></div>
              </div>



             <div className="caption">
                 <h4>{props.user.username}</h4>
             </div>
             	   <p>
                 	 <a className="mr2" href={"http://www.github.com/" + props.user.github} className = "btn btn-primary">View</a>
                   <Counter />
                 </p>
          </div>
      </div>
    )
  }
}
export default User;
