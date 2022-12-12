import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./movie-form.module.scss";

interface IFilmForm {
  filmTitle: string;
  filmDescription?: string;
  filmDirector?: string;
  filmStudio?: string;
}

export const MovieFormComponent = () => {
  const filmSchema = yup
    .object({
      filmTitle: yup.string().required(),
      filmDescription: yup.string(),
      filmDirector: yup.string(),
    })
    .required();

  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<IFilmForm>({
    resolver: yupResolver(filmSchema),
  });
  const [formData, setFormData] = useState<IFilmForm>();

  const onSubmit = () => {
    setFormData(getValues());
    console.log(formData);
  };

  return (
    <div>
      <h1>Movie Review Form</h1>
      <p>
        Give a summary of a film that moved you. We want core-shaking,
        earth-quaking soul-waking cinema.
      </p>
      <form className={styles.form} name="filmForm" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="filmTitle">
          Film Title
          <input
            id="filmTitle"
            {...register("filmTitle")}
            aria-invalid={errors.filmTitle ? "true" : "false"}
          />
          {errors.filmTitle?.type === "required" && (
            <p>You need to add a Film title!</p>
          )}
        </label>
        <label htmlFor="filmDirector">
          Film Director
          <input id="filmDirector" {...register("filmDirector")} />
        </label>
        <label htmlFor="filmDescription">
          Film Description
          <input id="filmDescription" {...register("filmDescription")} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
