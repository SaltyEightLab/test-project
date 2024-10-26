import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/お問い合わせフォーム/i);
  expect(linkElement).toBeInTheDocument();
});
