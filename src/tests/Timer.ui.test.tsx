import { cleanup } from "@testing-library/react";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import { it } from "vitest";

import Timer from "../components/Timer";

describe("Timer UI", () => {
  beforeEach(() => {
    render(<Timer />);
  });
  afterEach(() => {
    cleanup();
  });

  it.todo("should render the initial timer component", async () => {
    // Check if 00:00 is displayed
    // Check if Reset button is displayed
    // Check if Start button is displayed
    // Check there is no yellow background on progress-outer-bar
  });

  it.todo("should display an input when clicking on seconds", async () => {
    // Click h1 which displays seconds
    // Check if input is displayed
    // Check if input has a value of 0
    // Check if input is focused
  });

  it.todo("should display an input when clicking on minutes", async () => {
    // Click h1 which displays minutes
    // Check if input is displayed
    // Check if input has a value of 0
    // Check if input is focused
  });

  it.todo(
    "should have a start button which changes to stop when clicked",
    async () => {
      // Check if Start button is displayed
      // Click on Start button
      // Check if Stop button is displayed
      // Check if Start button is not displayed
    }
  );
});
