import { MovieFormComponent } from "./movie-form";
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  filmDescriptionInput,
  filmDirectorInput,
  filmTitleInput,
} from "../../testUtils/testUtils";

describe("movie form", () => {
  test("displays a form on page", () => {
    render(<MovieFormComponent />);
    const movieForm = screen.getByRole("form", { name: "" });
    expect(movieForm).toBeInTheDocument();
  });

  test("displays an input for the film title", () => {
    render(<MovieFormComponent />);
    expect(filmTitleInput()).toBeInTheDocument();
  });

  test("displays an input for the film description", () => {
    render(<MovieFormComponent />);
    expect(filmDescriptionInput()).toBeInTheDocument();
  });

  test("displays an input for the film director", () => {
    render(<MovieFormComponent />);
    expect(filmDirectorInput()).toBeInTheDocument();
  });

  test("displays an error message if the film title has not been added on submit", async () => {
    const user = userEvent.setup();
    render(<MovieFormComponent />);
    user.click(screen.getByRole("button"));
    const errorMessage = await screen.findByText(
      /you need to add a film title!/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it.todo("submit button is disabled without all sections complete");
});
