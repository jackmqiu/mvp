import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {Column, Row, Container} from 'react-bootstrap-grid';


import $ from 'jquery';


var User = (props) => {
  if(props.user) {
    return (
      <Column className="col-md-3 col-sm-6" styleName="col-md-3 col-sm-6">
          <Container className="thumbnail">

              <Row className="row">
                  <div><img className="img-thumbnail .img-fluid" src={props.user.picturelink} /></div>
              </Row>



             <div className="caption">
                 <h4>{props.user.username}</h4>
             </div>
             	   <p>
                 	 <a className="mr2" href={"http://www.github.com/" + props.user.github} className = "btn btn-primary">View</a>
                   <Counter />
                 </p>
          </Container>
      </Column>
    )
  }
}
export default User;
