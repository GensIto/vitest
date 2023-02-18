import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Vite + Reactを表示されているか", async () => {
  const { getByText } = render(<App />);
  expect(getByText("Vite + React")).toBeVisible();
});

test("カウントアップできるかどうか", async () => {
  const { getByRole } = render(<App />);
  await userEvent.click(getByRole("button"));
  expect(getByRole("button")).toHaveTextContent("count is 1");
});
