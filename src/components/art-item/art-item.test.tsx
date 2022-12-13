import { render, screen, waitFor } from "@testing-library/react";
import { ArtItemComponent } from "./art-item";

describe("Art Item", () => {
    test("displays an artwork title", () => {
        render(<ArtItemComponent image_id="" title={"salome"}/>);
        const artItemTitle = screen.getByText(/title: salome/i)
        expect(artItemTitle).toBeInTheDocument();
    })
    test("displays an artwork image", () => {
        render(<ArtItemComponent image_id="" title={"salome"}/>);
        const artItemTitle = screen.getByText(/title: salome/i)
        expect(artItemTitle).toBeInTheDocument();
    })
});