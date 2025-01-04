import { render, screen } from "@testing-library/react";
import CarouselComponent from "./CarouselComponent";

test("renders carousel with images", () => {
  render(<CarouselComponent />);
  // Check that at least one image is rendered initially.
  expect(screen.getByRole("img")).toBeInTheDocument();

  // More robust test
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(3);
  expect(images[0]).toHaveAttribute("src", "/images/promotion.webp");
  expect(images[1]).toHaveAttribute("src", "/images/yoga.webp");
  expect(images[2]).toHaveAttribute("src", "/images/utopia.webp");
});
