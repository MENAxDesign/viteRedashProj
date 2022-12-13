import axios from "axios";
import { useEffect, useState } from "react";
import { ArtData } from "../models/artData";

export const useChicagoArtData = () => {
  const [data, setData] = useState<Array<ArtData>>([]);
  const [error, setError] = useState(null);

  const getData = () => {
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      .then((res) => setData(res.data.data))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, error };
};