import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ThemeWrapper } from "../../tests/utils";
import { ToggleTheme } from "./toggleTheme";

describe("ToggleTheme", () => {
  it("should match snapshot", () => {
    render(<ToggleTheme />, { wrapper: ThemeWrapper });
    const button = screen.getByTestId("toggleTheme");
    expect(button).toMatchSnapshot();
  });
  it("should render moon icon", () => {
    render(<ToggleTheme />, { wrapper: ThemeWrapper });
    const moonIcon = screen.getByTestId("moonIcon");
    expect(moonIcon).toBeTruthy();
  });
  it("should render sun icon", async () => {
    render(<ToggleTheme />, { wrapper: ThemeWrapper });
    const button = screen.getByTestId("toggleTheme");
    await userEvent.click(button);
    const sunIcon = screen.getByTestId("sunIcon");
    expect(sunIcon).toBeTruthy();
  });
});
