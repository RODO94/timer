import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { type TimeStructure } from "../components/Timer";

// Setup user events
export const user = userEvent.setup();
export const yellowHex = "#fffb00";
export const blueHex = "#11099c";

// DOM element finders
export const getMinutesInput = () => screen.getByTestId("minutes-input");
export const getSecondsInput = () => screen.getByTestId("seconds-input");
export const getStartButton = () => screen.getByTestId("start-button");
export const getStopButton = () => screen.getByTestId("stop-button");
export const getResetButton = () => screen.getByTestId("reset-button");
export const getBellAnimation = () => screen.getByLabelText("animation");
export const getProgressCircle = () => screen.getByTestId("progress-outer-bar");

// Get elements from display (when not in edit mode)
export const getMinutesDisplay = () => screen.getByTestId("minutes-header");

export const getSecondsDisplay = () => screen.getByTestId("seconds-header");

// Timer interactions
export const openTimeEditor = async (variant: "seconds" | "minutes") => {
  const timeDisplay =
    variant === "minutes" ? getMinutesDisplay() : getSecondsDisplay();
  await user.click(timeDisplay);
};

export const setTime = async ({ minutes, seconds }: TimeStructure) => {
  if (minutes !== undefined) {
    await openTimeEditor("minutes");
    const minutesInput = getMinutesInput();
    await user.clear(minutesInput);
    await user.type(minutesInput, minutes.toString());
  }

  if (seconds !== undefined) {
    await openTimeEditor("seconds");
    const secondsInput = getSecondsInput();
    await user.clear(secondsInput);
    await user.type(secondsInput, seconds.toString());
  }

  // Click outside to close editor
  await user.click(document.body);
};

export const startTimer = async () => {
  await user.click(getStartButton());
};

export const stopTimer = async () => {
  await user.click(getStopButton());
};

export const resetTimer = async () => {
  await user.click(getResetButton());
};

// Wait utilities
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
