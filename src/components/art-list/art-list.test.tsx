import { render, screen } from "@testing-library/react";
import { ArtListComponent } from "./art-list";

describe("Art List", () => {
  test.only("displays a list of art items from the server", async () => {
    render(<ArtListComponent/>)
    const artItems = await screen.findAllByAltText(/artwork/i)
    expect(artItems).toHaveLength(2);
  });
});
