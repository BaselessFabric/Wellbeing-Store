import { render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

test("renders product information correctly", () => {
  render(
    <Product
      id={1}
      name="Ultimate Health Elixir"
      price="£10.99"
      image="/images/elixir.webp"
      onAddToBasket={() => {}}
    />
  );
  expect(
    screen.getByRole("heading", { level: 5, name: "Ultimate Health Elixir" })
  ).toBeInTheDocument();
  expect(screen.getByText("£10.99")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ultimate Health Elixir" })).toHaveAttribute(
    "src",
    "/images/elixir.webp"
  );
  expect(
    screen.getByRole("button", { name: "Add to Basket" })
  ).toBeInTheDocument();
});

test("calls onAddToBasket when button is clicked", () => {
  const addToBasketMock = jest.fn();
  render(
    <Product
      id={1}
      name="Ultimate Health Elixir"
      price="£10.99"
      image="/images/elixir.webp"
      onAddToBasket={addToBasketMock}
    />
  );
  fireEvent.click(screen.getByRole("button", { name: "Add to Basket" }));
  expect(addToBasketMock).toHaveBeenCalledTimes(1);
  expect(addToBasketMock).toHaveBeenCalledWith(
    1,
    "Ultimate Health Elixir",
    10.99,
    "/images/elixir.webp"
  );
});

test("navigates to product detail page on image click", () => {
  const mockRouter = {
    push: jest.fn(),
  };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  render(
    <Product
      id={1}
      name="Ultimate Health Elixir"
      price="£10.99"
      image="/images/elixir.webp"
      onAddToBasket={() => {}}
    />
  );
  fireEvent.click(screen.getByRole("img", { name: "Ultimate Health Elixir" }));
  expect(mockRouter.push).toHaveBeenCalledWith("/images/elixir.webp");
});
