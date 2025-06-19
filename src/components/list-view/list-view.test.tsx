import { render, screen } from "@testing-library/react";
import ListView from "./list-view";
import { products } from "../../const/";

describe("ListView", () => {
  test("should renders correct count ShopItem components", () => {
    render(<ListView products={products} />);

    expect(screen.getAllByRole(`listitem`).length).toBe(products.length);
    products.forEach(({ name }) => {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    });
  });
});