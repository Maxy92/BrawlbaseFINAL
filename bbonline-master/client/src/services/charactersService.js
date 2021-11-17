import axios from "axios";

export const getCharacters = async () => {
  let { data } = await axios.get("/api/characters/");
  return data;
};

export const postCharacter = async ({name, short_description, description, price,imgUrl,weapons}) => {
    let obj = {
        name, short_description, description, price,image:imgUrl,weapon_1: weapons[0], weapon_2: weapons[1]
    }
  axios.post("/api/characters/", obj).then((e) => {
    return e;
  });
};
