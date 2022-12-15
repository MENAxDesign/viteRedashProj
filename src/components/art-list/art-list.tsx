import React, { useState } from "react";
import { ArtItemComponent } from "../art-item/art-item";
import styles from "./art-list.module.scss";
import { useQuery } from "react-query";
import { getChicagoArtData } from "../../utils/utils";
import { ArtData } from "../../models/artData";

export const ArtListComponent = () => {
  const { isLoading, error, data } = useQuery("artGalleryData", getChicagoArtData);

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item: ArtData) => {
          return (
            <React.Fragment key={item.id}>
              <ArtItemComponent image_id={item.image_id} title={item.title} />
            </React.Fragment>
          );
        })}
    </div>
  );
};
