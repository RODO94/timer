import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import {
  blueHex,
  getBellAnimation,
  getMinutesDisplay,
  getProgressCircle,
  getSecondsDisplay,
  getSecondsInput,
  getStartButton,
  openTimeEditor,
  resetTimer,
  setTime,
  sleep,
  startTimer,
  stopTimer,
  user,
  yellowHex,
} from "./helpers";
import Timer from "../components/Timer";

describe("Timer Interaction", () => {
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  beforeEach(() => {
    render(<Timer />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should display a new value for seconds after editing input", async () => {
    // Click h1 containing seconds to change to input
    await openTimeEditor("seconds");

    // Change input value to 10
    const secondsInput = getSecondsInput();
    await user.type(secondsInput, "10");

    // Click outside of input
    await user.click(document.body);

    // Check if input is not displayed
    expect(screen.queryByTestId("seconds-input")).not.toBeInTheDocument();

    // Check state of time has changed to 00:10
    expect(getSecondsDisplay()).toHaveTextContent("10");
  });

  it("should display a new value for minutes after editing input", async () => {
    // Click h1 containing minutes to change to input
    await openTimeEditor("minutes");

    // Change input value to 1
    const minutesInput = screen.getByTestId("minutes-input");
    await user.clear(minutesInput);
    await user.type(minutesInput, "1");

    // Click outside of input
    await user.click(document.body);

    // Check if input is not displayed
    expect(screen.queryByTestId("minutes-input")).not.toBeInTheDocument();

    // Check state of time has changed to 01:00
    expect(getMinutesDisplay()).toHaveTextContent("1");
  });

  it("should start a 10 second timer when clicking start", async () => {
    // Set time to 10 seconds
    await setTime({ minutes: 0, seconds: 2 });

    // Click on start button
    await startTimer();
    // wait 1 second
    await sleep(1000);

    // Check if time has changed to 00:09
    expect(getSecondsDisplay()).toHaveTextContent("1");

    await sleep(1000);

    // Check if time has changed to 00:00
    expect(getSecondsDisplay()).toHaveTextContent("0");
    // Check if bell animation appears and is visible
    expect(getBellAnimation()).toBeInTheDocument();
  });

  it("should stop the timer when clicking stop", async () => {
    // Set time to 10 seconds
    await setTime({ minutes: 0, seconds: 10 });

    // Click on start button
    await startTimer();

    // wait 1 second
    await sleep(1000);
    // Check if time has changed to 00:09
    expect(getSecondsDisplay()).toHaveTextContent("9");

    // Click on stop button
    await stopTimer();

    // Check if button text is Start
    expect(getStartButton()).toBeInTheDocument();

    // Wait another second and check if time has not changed to 00:08
    await sleep(1000);
    expect(getSecondsDisplay()).toHaveTextContent("9");
  });

  it("should have a visual indicator of progress", async () => {
    const secondsWaitTime = 3;
    // Set time to 10 seconds
    await setTime({ minutes: 0, seconds: secondsWaitTime });
    const degreeIncrements = 360 / secondsWaitTime;

    // Click on start button
    await startTimer();

    await sleep(1000);

    // Check initial progress bar state
    const initialProgressBar = getProgressCircle();
    expect(initialProgressBar).toHaveStyle(
      `background:conic-gradient( ${yellowHex} 0deg, ${yellowHex} ${
        degreeIncrements * 1
      }deg, ${blueHex} ${degreeIncrements * 1}deg, ${blueHex} 360deg )`
    );

    await sleep(1000);

    const secondProgressCircle = getProgressCircle();
    expect(secondProgressCircle).toHaveStyle(
      `background:conic-gradient( ${yellowHex} 0deg, ${yellowHex} ${
        degreeIncrements * 2
      }deg, ${blueHex} ${degreeIncrements * 2}deg, ${blueHex} 360deg )`
    );

    await sleep(1000);
    const thirdProgressCircle = getProgressCircle();
    expect(thirdProgressCircle).toHaveStyle(
      `background:conic-gradient( ${yellowHex} 0deg, ${yellowHex} 0deg, ${blueHex} 0deg, ${blueHex} 360deg )`
    );
  });

  it("should show a bell animation when timer is finished", async () => {
    // Set time to 10 seconds
    await setTime({ minutes: 0, seconds: 2 });

    // Click on start button
    await startTimer();

    await sleep(2100);
    // Check if bell animation appears and is visible
    expect(getBellAnimation()).toBeInTheDocument();

    await sleep(10000);
    // Check if bell animation is not visible
    expect(screen.queryByLabelText("animation")).not.toBeInTheDocument();
  }, 15000);

  it("should reset the timer when reset button is clicked", async () => {
    // Set time to 10 seconds
    await setTime({ minutes: 0, seconds: 10 });

    // Start the timer
    await startTimer();

    await sleep(1000);
    // Check time is now 8 seconds
    expect(getSecondsDisplay()).toHaveTextContent("9");

    // Reset timer
    await resetTimer();

    // Check time is reset to 00:00
    expect(getMinutesDisplay()).toHaveTextContent("0");
    expect(getSecondsDisplay()).toHaveTextContent("0");

    // Check that progress is reset
    const progressBar = getProgressCircle();
    expect(progressBar).toHaveStyle(
      `background:conic-gradient( ${yellowHex} 0deg, ${yellowHex} 0deg, ${blueHex} 0deg, ${blueHex} 360deg )`
    );
  });
});
