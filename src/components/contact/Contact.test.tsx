import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  test("renders currectly h1text", () => {
    render(<Contact />);
    const h1Text = screen.getByRole("heading", { level: 1 });
    expect(h1Text).toBeInTheDocument();
  });

  test("renders currectly h2text", () => {
    render(<Contact />);
    const h2Text = screen.getByRole("heading", { level: 2 });
    expect(h2Text).toBeInTheDocument();
  });

  test("renders currectly span close", () => {
    render(<Contact />);
    const closeTitle = screen.getByTitle("close");
    expect(closeTitle).toBeInTheDocument();
  });

  test("renders currectly paragraph", () => {
    render(<Contact />);
    const paragraphText = screen.getByText("すべてのフィールドは必須項目です。");
    expect(paragraphText).toBeInTheDocument();
  });

  test("renders currectly image", () => {
    render(<Contact />);
    const imageElement = screen.getByAltText("sample alt");
    expect(imageElement).toBeInTheDocument();
  });

  test("renders currectly custom element", () => {
    render(<Contact />);
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });

  test("renders currectly imageRle", () => {
    render(<Contact />);
    const imageRoleElement = screen.getByRole("img");
    expect(imageRoleElement).toBeInTheDocument();
  });

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

  test("renders currectly name placeholder", () => {
    render(<Contact />);
    const namePlaceholderlElement = screen.getByPlaceholderText("フルネーム");
    expect(namePlaceholderlElement).toBeInTheDocument();
  });

  test("renders currectly value SaltyEight", () => {
    render(<Contact />);
    const nameValueText = screen.getByDisplayValue("SaltyEight");
    expect(nameValueText).toBeInTheDocument();
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
