import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ThemeWrapper } from "../../tests/utils";
import { ToggleTheme } from "./toggleTheme";

const sut = () => render(<ToggleTheme />, { wrapper: ThemeWrapper });

describe("ToggleTheme", () => {
  it("should match snapshot", () => {
    sut();
    const button = screen.getByTestId("toggleTheme");
    expect(button).toMatchSnapshot();
  });
  it("should render moon icon", () => {
    sut();
    const moonIcon = screen.getByTestId("moonIcon");
    expect(moonIcon).toBeTruthy();
  });
  it("should render sun icon", async () => {
    sut();
    const button = screen.getByTestId("toggleTheme");
    await userEvent.click(button);
    const sunIcon = screen.getByTestId("sunIcon");
    expect(sunIcon).toBeTruthy();
  });
});
