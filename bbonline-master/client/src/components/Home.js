import * as mdb from "mdb-react-ui-kit"; // lib
import { Input } from "mdb-react-ui-kit"; // module
import Card from "./Card";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { getCharacters } from "../services/charactersService";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [cards, setCard] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getData();

    async function getData() {
      const { data } = await axios.get(
        "/api/characters/"
      );

      // store the data into our books variable
      setCard(data);
    }
  }, []);
  return (
    <div className="pj">
      <MDBContainer>
        {cards && (
          <MDBRow>
            {cards.map((personaje, index) => (
              <mdb.MDBCol key={index}>
                <Card
                  title={personaje.name}
                  description={personaje.description}
                  image={personaje.image}
                  precio={personaje.precio}
                  id={personaje._id}
                />
              </mdb.MDBCol>
            ))}
          </MDBRow>
        )}
      </MDBContainer>
    </div>
  );
};
export default Home;
