import { ArtData } from "../models/artData";
import axios from "axios";

export const getChicagoArtImage = (image_id: String) => {
  const imageURL = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
  return imageURL;
};

export const getChicagoArtData = async () => {
  let info: ArtData[] | undefined;
  await axios
    .get("https://api.artic.edu/api/v1/artworks")
    .then((res) => (info = res.data.data))
    .catch((error) => console.log(error));
  return info;
};
