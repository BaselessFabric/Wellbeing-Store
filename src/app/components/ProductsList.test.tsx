import { render, screen, fireEvent } from "@testing-library/react";
import ProductsList from "./ProductsList";
import ProductClass from "../modal/ProductClass";
import { fetchProducts, fetchCategories } from "../modal/ProductsDataSQL";

jest.mock("../modal/ProductsDataSQL");

test("renders product list correctly", async () => {
  const mockProducts = [
    new ProductClass(1, "/image1.jpg", "Product 1", "Desc 1", 10.0),
    new ProductClass(2, "/image2.jpg", "Product 2", "Desc 2", 15.0),
    new ProductClass(3, "/image3.jpg", "Product 3", "Desc 3", 20.0),
  ];
  const mockCategories = ["Category 1", "Category 2"];

  (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);
  (fetchCategories as jest.Mock).mockResolvedValue(mockCategories);

  render(
    <ProductsList
      onAddToBasket={() => {}}
      basketContents={[]}
      setBasketContents={() => {}}
    />
  );

  for (const product of mockProducts) {
    expect(
      await screen.findByRole("heading", { name: product.getName(), level: 5 })
    ).toBeVisible();
  }

  expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
  for (const category of mockCategories) {
    expect(screen.getByRole("button", { name: category })).toBeInTheDocument();
  }

  fireEvent.click(screen.getByRole("button", { name: "Category 1" }));

  expect(
    screen.getByRole("heading", { name: "Product 1", level: 5 })
  ).toBeVisible();
  expect(
    screen.getByRole("heading", { name: "Product 3", level: 5 })
  ).toBeVisible();
  expect(
    screen.queryByRole("heading", { name: "Product 2", level: 5 })
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "All" }));
  expect(
    screen.getByRole("heading", { name: "Product 1", level: 5 })
  ).toBeVisible();
  expect(
    screen.getByRole("heading", { name: "Product 3", level: 5 })
  ).toBeVisible();
  expect(
    screen.getByRole("heading", { name: "Product 2", level: 5 })
  ).toBeVisible();
});
