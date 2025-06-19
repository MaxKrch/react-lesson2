import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Store from "./store";
import { defaultView, products } from "../../const/";

describe("Component: Store", () => {
  test("should renders with default layout list_view and products", () => {
    const expectedText = products[0].name
    
    render(<Store products={products} />);

    expect(screen.getAllByText(expectedText)[0]).toBeInTheDocument();
    expect(screen.getByText(defaultView)).toBeInTheDocument();
    
    products.forEach(product => {
        expect(screen.getAllByText(product.name).length).toBeGreaterThan(0)
    })
  });

  test("should toggles layout on IconSwitch click", async () => {   
    const expectedView = defaultView === "view_list"
        ? "view_module"
        : "view_list"
        
    render(<Store products={products} />);
   
    const iconSwitch = screen.getByText(defaultView);
    await userEvent.click(iconSwitch);
 
    expect(screen.queryByText(defaultView)).not.toBeInTheDocument()
    expect(screen.getByText(expectedView)).toBeInTheDocument();
  });
});