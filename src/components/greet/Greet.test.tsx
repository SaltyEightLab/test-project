import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("挨拶メッセージが正常にレンダリングされる", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
