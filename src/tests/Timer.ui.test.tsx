import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import {
  blueHex,
  getMinutesDisplay,
  getMinutesInput,
  getProgressCircle,
  getResetButton,
  getSecondsDisplay,
  getSecondsInput,
  getStartButton,
  getStopButton,
  openTimeEditor,
  user,
  yellowHex,
} from "./helpers";
import Timer from "../components/Timer";

describe("Timer UI", () => {
  beforeEach(() => {
    render(<Timer />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the initial timer component", () => {
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    // Check if 00:00 is displayed
    expect(getMinutesDisplay()).toBeInTheDocument();
    expect(getSecondsDisplay()).toBeInTheDocument();

    // Check if Reset button is displayed
    expect(getResetButton()).toBeInTheDocument();

    // Check if Start button is displayed
    expect(getStartButton()).toBeInTheDocument();

    // Check there is no yellow background on progress-outer-bar
    const progressBar = getProgressCircle();
    expect(progressBar).toHaveStyle(
      `background:conic-gradient( ${yellowHex} 0deg, ${yellowHex} 0deg, ${blueHex} 0deg, ${blueHex} 360deg )`
    );
  });

  it("should display an input when clicking on seconds", async () => {
    // Click h1 which displays seconds
    await openTimeEditor("seconds");

    // Check if input is displayed
    const secondsInput = getSecondsInput();
    expect(secondsInput).toBeInTheDocument();

    // Check if input has a value of undefined
    expect(secondsInput).toHaveValue("");

    // Check if input is focused
    expect(document.activeElement).toBe(secondsInput);
  });

  it("should display an input when clicking on minutes", async () => {
    // Click h1 which displays minutes
    await openTimeEditor("minutes");

    // Check if input is displayed
    const minutesInput = getMinutesInput();
    expect(minutesInput).toBeInTheDocument();

    // Check if input has a value of undefined
    expect(minutesInput).toHaveValue("");

    // Check if input is focused - Note: this might be the seconds input instead
    // depending on your implementation
    expect(document.activeElement).toBe(minutesInput);
  });

  it("should have a start button which changes to stop when clicked", async () => {
    // Check if Start button is displayed
    const startButton = getStartButton();
    expect(startButton).toBeInTheDocument();

    // Click on Start button
    await user.click(startButton);

    // Check if Stop button is displayed
    expect(getStopButton()).toBeInTheDocument();

    // Check if Start button is not displayed
    expect(screen.queryByText(/start/i)).not.toBeInTheDocument();
  });
});
