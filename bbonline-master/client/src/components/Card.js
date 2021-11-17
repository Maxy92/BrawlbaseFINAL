

import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import {Link} from 'react-router-dom'
const Card =(props)=>{

return(

    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={props.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundcolor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.description}
        </MDBCardText>
        
        <MDBCardText>
          {props.precio}
        </MDBCardText>
        <Link style={{color: "white"}} to={`/character/${props.id}`}><MDBBtn>About</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>

)






}

export default Card;
