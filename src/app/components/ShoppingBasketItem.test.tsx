import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingBasketItem from "./ShoppingBasketItem";

test("renders shopping basket item details correctly", () => {
  render(
    <ShoppingBasketItem
      image="/image.jpg"
      name="Basket Item"
      price="£5.00"
      quantity={2}
      handleRemoveFromBasket={() => {}}
    />
  );
  expect(screen.getByRole("img", { name: "Basket Item" })).toHaveAttribute(
    "src",
    "/image.jpg"
  );
  expect(
    screen.getByRole("heading", { name: "Basket Item", level: 5 })
  ).toHaveTextContent("Basket Item");
  expect(screen.getByText("Price: £5.00")).toBeInTheDocument();
  expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
});

test("calls handleRemoveFromBasket when remove button clicked", () => {
  const handleRemoveMock = jest.fn();
  render(
    <ShoppingBasketItem
      image="/image.jpg"
      name="Basket Item"
      price="£5.00"
      quantity={2}
      handleRemoveFromBasket={handleRemoveMock}
    />
  );
  fireEvent.click(screen.getByRole("button", { name: "Remove" }));
  expect(handleRemoveMock).toHaveBeenCalledTimes(1);
});
