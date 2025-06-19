import { render, screen } from "@testing-library/react";
import ShopCard from "./shop-card";
import { products } from "../../const/";

describe("Component: ShopCard", () => {
  test("should render product info correctly", () => {
    const product = products[0];
    const expectedPrice = `$${product.price}`
    render(<ShopCard product={product} />);
    
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.color)).toBeInTheDocument();
    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
        "src", 
        product.img
    );
  });
});