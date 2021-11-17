import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

const Footer=()=>{
  return(

    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h4 className='text-uppercase'>Acerca del Proyecto</h4>

            <p>
              Este es un trabajo hecho por Maximiliano Ballerini y Caceres Ezequiel para demostrar los conocimientos
              adquiridos  durante el perodo escolar, ayudando a que se conozca más sobre Brawlhalla y sus personajes.
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Brawhalla</h5>

            <p>
              Brawhalla es un juego multijugador plataform-fighter del estilo smash bros ultimate con variantes en el sistema
              de combate.
              Este esta disponible en todas las plataformas digitales para descargar gratis.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundcolor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Escuela Técnica N 35 Distrito 18 4 4° Turno Tarde 
          </a>
      </div>
    </MDBFooter>











  )

}
export default Footer;
