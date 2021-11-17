import * as mdb from "mdb-react-ui-kit"; // lib
import { Input } from "mdb-react-ui-kit"; // module
import Card from "./Card";
import Form from "./Form";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { getCharacters } from "../services/charactersService";
import { useEffect, useState } from "react";
import axios from "axios";
const Body = () => {
  const [cards, setCard] = useState([]);
  let Cardlist = [];
  useEffect(() => {
    axios
      .get("/api/characters/")
      .then((res) => {
        setCard(res.data);
      })
      .then((_) => {
        Cardlist = cards.map((personaje) => {
          return (
            <mdb.MDBCol>
              <Card
                title={personaje.name}
                description={personaje.description}
                image={personaje.image}
                precio={personaje.precio}
              />
            </mdb.MDBCol>
          );
        });
      });
  });

  return (
    <div className="pj">
      <h1>Hola</h1>
      <Form />
    </div>
  );
};
export default Body;
