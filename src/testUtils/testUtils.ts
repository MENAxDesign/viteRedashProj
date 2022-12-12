import { screen } from "@testing-library/react";


export const filmDescriptionInput = () => {
    return screen.getByRole("textbox", {
      name: /film description/i,
    });
  };
  
  export const filmTitleInput = () => {
    return screen.getByRole("textbox", {
      name: /film title/i,
    });
  };
  
  export const filmDirectorInput = () => {
    return screen.getByRole("textbox", {
      name: /film director/i,
    });
  };
  