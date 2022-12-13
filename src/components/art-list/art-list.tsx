import React, { useState } from "react";
import { useChicagoArtData } from "../../api/artAPI";
import { ArtData } from "../../models/artData";
import { ArtItemComponent } from "../art-item/art-item";
import styles from "./art-list.module.scss";

export const ArtListComponent = () => {
  const { data } = useChicagoArtData();

  return (
    <div>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ArtItemComponent image_id={item.image_id} title={item.title}/>
          </React.Fragment>
        );
      })}
    </div>
  );
};
