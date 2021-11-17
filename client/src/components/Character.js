import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect, createRef } from "react";
import axios from "axios";
import { postCharacter } from "../services/charactersService";
import Creatable, { useCreatable } from "react-select/creatable";
import CreatableSelect from "react-select/creatable";
import { Link, useParams } from "react-router-dom";

export default function Character(props) {

  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get("/api/characters/" + id).then(({ data }) => {
        console.log(id);
      setCharacter(data);
      console.log(data);
    });
  }, []);
  async function deleteCharacter() {
    await axios.delete("/api/characters/" + id);
    window.location = "/";
  }
  console.log(character)
  return (
    <>
      <div className="row pj">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group mb-3">
                  <h4 htmlFor="name">Legend Name</h4>
                  {character && <h6>{character.name}</h6>}
                </div>

                <div className="form-group mb-3">
                  <h4 htmlFor="description">Description</h4>
                  {character && <h6>{character.description}</h6>}
                </div>
                <div className="form-group mb-3">
                  <h4 htmlFor="description">Weapons</h4>
                  {character && (
                    <h6>
                    {character.weapon_1}{" "}
                    {character.weapon_2}
                    </h6>
                  )}
                </div>
                <div className="row">
                  <div className="form-group mb-3 col-xs-12 col-sm-6">
                    <h4 htmlFor="price">Price</h4>
                    {character && <h6>{character.price}</h6>}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                {character && (
                  <img className=" mx-auto w-50" src={character.image} />
                )}
              </div>
              <div className="col-2">
                <Link styles={{}} to="/">
                  <button
                    type="submit"
                    className="btn btn-danger btn-block text-uppercase"
                    onClick={() => {
                      deleteCharacter();
                    }}
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
