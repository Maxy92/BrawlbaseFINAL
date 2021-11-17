import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {} from "mdb-react-ui-kit";
import { useEffect, createRef } from "react";
import axios from "axios";
import {postCharacter} from '../services/charactersService';
import Creatable, { useCreatable } from "react-select/creatable";
import CreatableSelect from "react-select/creatable";
export default function Form(props) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
    postCharacter(data).then(e => {
      window.location = "/"
    })

  }
  const [imgUrl, setImgUrl] = useState(
    "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
  );
  
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type);
      if (name == "imgUrl") {
        if (
          !!value.imgUrl ||
          value.imgUrl.trim() == "" ||
          value.imgUrl.match(/^\s*$/)
        ) {
          setImgUrl(null);
        }
        console.log(value.imgUrl);
        setImgUrl(value.imgUrl);
        console.log("a");
      }
    });
  }, [watch]);
  const options = [
    { value: "hammer", label: "Hammer" },
    { value: "sword", label: "Sword" },
    { value: "blasters", label: "Blasters" },
    { value: "rocketlance", label: "Rocket Lance" },
    { value: "spear", label: "Spear" },
    { value: "katars", label: "Katars" },
    { value: "axe", label: "Axe" },
    { value: "blasters", label: "Blasters" },
    { value: "bow", label: "Bow" },
    { value: "gauntlets", label: "Gauntlets" },
    { value: "scythe", label: "Scythe" },
    { value: "cannon", label: "Cannon" },
    { value: "orb", label: "Orb" },
    { value: "greatsword", label: "GreatSword" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12">
                <h2 className="tm-block-title d-inline-block">Add Legend</h2>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action
              className="tm-edit-product-form"
            >
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="form-group mb-3">
                    <label htmlFor="name">Legend Name</label>
                    <input
                      {...register("name")}
                      id="name"
                      name="name"
                      type="text"
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">Short description</label>
                    <input
                      {...register("short_description")}
                      className="form-control validate"
                      rows={3}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                      {...register("description")}
                      className="form-control validate"
                      rows={3}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="category">Weapons</label>

                    <Controller
                      control={control}
                      defaultValue={options.map((c) => c.value)}
                      name="weapons"
                      rules={{ required: true }}
                      render={({ field: { onChange, value, ref } }) => (
                        <CreatableSelect
                          inputRef={ref}
                          onChange={(val) => onChange(val.map((c) => c.value))}
                          options={value.length === 2 ? [] : options}
                          noOptionsMessage={() => {
                            return value.length === 2 ? "You\'ve reached the max options value" : "No options available" ;
                          }}
                          isMulti
                        />
                      )}
                    />
                        
                  </div>
                  <div className="row">
                    <div className="form-group mb-3 col-xs-12 col-sm-6">
                      <label htmlFor="price">Price</label>
                      <input
                       {...register("price")}
                        id="price"
                        name="price"
                        type="number"
                        className="form-control validate hasDatepicker"
                        data-large-mode="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                  <img
                    className=" mx-auto w-50"
                    src={
                      (imgUrl.startsWith("https")||imgUrl.startsWith("http://")) 
                        ? imgUrl
                        : "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
                    }
                  />
                  <div className="form-group mb-3">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                      {...register("imgUrl")}
                      id="imageUrl"
                      className="form-control validate"
                      rows={3}
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Add Legend
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
