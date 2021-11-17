import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
const Button=()=> {
  return (

    <MDBBtnGroup shadow='0'>
      <Link to="/add">
      <MDBBtn color='info'><a className="cambia" href="/add">Añadir</a></MDBBtn>
      </Link>
      
      <MDBBtn color='info'><a className="cambia" href="https://www.ubisoft.com/es-mx/game/brawlhalla/brawlhalla">Brawhalla</a></MDBBtn>
      <MDBBtn color='info'><a className="cambia" href="">Contactanos</a></MDBBtn>
    </MDBBtnGroup>

      )
}
export default Button;
