import { render, screen, fireEvent } from "@testing-library/react";
import ProductClass from "../modal/ProductClass"; // Import the Product component
import Header, { basket } from "./Header"; // Import the basket instance
import { useRouter } from "next/navigation";
import { get } from "http";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

test("renders header components and updates basket", () => {
  const mockSetBasketContents = jest.fn();

  render(
    <Header basketContents={[]} setBasketContents={mockSetBasketContents} />
  );

  // Check logo and title are rendered

  expect(screen.getByRole("img", { name: /logo/i })).toBeVisible();

  expect(
    screen.getByRole("heading", { name: /wellnest/i, level: 6 })
  ).toBeVisible();
  expect(
    screen.getByRole("heading", { name: /wellnest/i, level: 5 })
  ).toBeVisible();

  // Mock product

  const mockProduct = new ProductClass(
    1,
    "/images/elixir.webp",
    "Ultimate Health Elixir",
    "Test Description",
    10.00
  );

  // Add to basket
  basket.addProduct(mockProduct);

  // Open the basket drawer
  fireEvent.click(screen.getByRole("button", { name: /open basket/i }));

  // Check basket contents

  expect(
    screen.getByRole("heading", { name: "Shopping Basket Details" })
  ).toBeVisible();

  expect(screen.getByRole("img", { name: "Ultimate Health Elixir" })).toBeVisible(); // Check product name
  expect(screen.getByText("Price: £10.99")).toBeVisible(); // Check product price
  expect(screen.getByText("Quantity: 1")).toBeVisible(); // Check quantity
  expect(screen.getByRole("button", { name: "Remove" })).toBeVisible(); // Check Remove button
});
