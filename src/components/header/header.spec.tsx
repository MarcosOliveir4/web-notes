import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThemeWrapper } from "../../tests/utils";
import { Header } from "./header";

const titleDefault = "web notes";
const sut = (title = titleDefault) =>
  render(<Header title={title} />, { wrapper: ThemeWrapper });

describe("<Header />", () => {
  it("should match snapshot", () => {
    sut();
    const header = screen.getByTestId("header");
    expect(header).toMatchSnapshot();
  });
  it("should render title", () => {
    sut();
    const title = screen.getByTestId("header-title");
    expect(title).toHaveTextContent(titleDefault);
  });
  it("should render toggle theme", () => {
    sut();
    const toggleTheme = screen.getByTestId("toggleTheme");
    expect(toggleTheme).toBeTruthy();
  });
});
