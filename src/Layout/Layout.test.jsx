import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

it("retrieves data from the Routes file and uses it to create routes components in which the SingleVideo or Thumbnails component is displayed", () => {
  render(<Layout routes={{ routes }} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
