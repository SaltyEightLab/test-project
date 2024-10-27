import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  test("renders currectly textbox", () => {
    render(<Contact />);
    const nameElement = screen.getByRole("textbox", { name: "お名前" });
    expect(nameElement).toBeInTheDocument();
  });

  test("renders currectly name label", () => {
    render(<Contact />);
    const nameLabelElement = screen.getByLabelText("お名前");
    expect(nameLabelElement).toBeInTheDocument();
  });

  test("renders currectly textbox", () => {
    render(<Contact />);
    const emailElement = screen.getByRole("textbox", { name: "メールアドレス" });
    expect(emailElement).toBeInTheDocument();
  });

  test("renders currectly combobox", () => {
    render(<Contact />);
    const comboboxElement = screen.getByRole("combobox");
    expect(comboboxElement).toBeInTheDocument();
  });

  test("renders currectly checkbox", () => {
    render(<Contact />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });

  test("renders currectly submit button", () => {
    render(<Contact />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
