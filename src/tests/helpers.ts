import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TimeStructure } from "../components/Timer";

// Setup user events
export const user = userEvent.setup();

// DOM element finders
export const getMinutesInput = () => screen.getByTestId("minutes-input");
export const getSecondsInput = () => screen.getByTestId("seconds-input");
export const getStartButton = () => screen.getByTestId("start-button");
export const getStopButton = () => screen.getByTestId("stop-button");
export const getResetButton = () => screen.getByTestId("reset-button");
export const getBellAnimation = () =>
  screen.queryByRole("img", { name: /bell/i });
export const getProgressCircle = () => screen.getByTestId("progress-outer-bar");

// Get elements from display (when not in edit mode)
export const getMinutesDisplay = () => screen.getByTestId("minutes-header");

export const getSecondsDisplay = () => screen.getByTestId("seconds-header");

// Timer interactions
export const openTimeEditor = async () => {
  const timeDisplay =
    screen.getByRole("heading", { level: 1 }) ||
    screen.getByText(/\d+:\d+/, { selector: "h1" });
  await user.click(timeDisplay);
};

export const setTime = async ({ minutes, seconds }: TimeStructure) => {
  await openTimeEditor();

  if (minutes !== undefined) {
    const minutesInput = getMinutesInput();
    await user.clear(minutesInput);
    await user.type(minutesInput, minutes.toString());
  }

  if (seconds !== undefined) {
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
