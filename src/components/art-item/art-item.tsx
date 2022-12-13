import React, { useState, FC } from "react";
import { getChicagoArtImage } from "../../utils/utils";
import { ArtData } from "../../models/artData";
import styles from "./art-item.module.scss";

interface Props {
  title: String;
  image_id: String;
}
export const ArtItemComponent: FC<Props> = ({title, image_id}) => {

  const image = getChicagoArtImage(image_id);

  return (
    <div>
      <h3>Art Item</h3>
      <p>Title: {title}</p>
      <img className={styles.image} loading="lazy" width="400" src={image} alt="artwork"/>
    </div>
  );
};
