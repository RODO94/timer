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

describe("Timer Interaction", () => {
  beforeEach(() => {
    render(<Timer />);
  });
  afterEach(() => {
    cleanup();
  });

  it.todo(
    "should display a new value for seconds after editting input",
    async () => {
      // Click h1 containing seconds to change to input
      // Change input value to 10
      // Click outside of input
      // Check if input is not displayed
      // Check state of time has changed to 00:10
    }
  );
  it.todo(
    "should display a new value for minutes after editting input",
    async () => {
      // Click h1 containing minutes to change to input
      // Change input value to 1
      // Click outside of input
      // Check if input is not displayed
      // Check state of time has changed to 01:00
    }
  );

  it.todo("should start a 10 second timer when clicking start", async () => {
    // Click h1 containing seconds to change to input
    // Change input value to 10
    // Click outside of input
    // Click on start button
    // Check if progress bar is displayed using background attribute
    // wait 1 second
    // Check if time has changed to 00:09
    // Check if progress bar has changed using background attribute
    // wait 9 second
    // Check if time has changed to 00:00
    // Check if progress bar has changed using background attribute
    // Check if bell animation appears and is visible
  });

  it.todo("should stop the timer when clicking stop", async () => {
    // Click h1 containing seconds to change to input
    // Change input value to 10
    // Click outside of input
    // Click on start button
    // wait 1 second
    // Check if time has changed to 00:09
    // Click on stop button
    // Check if button text is Start
    // Check if time has not changed to 00:08
  });

  it.todo("should have a visual indicator of progress", async () => {
    // Click h1 containing seconds to change to input
    // Change input value to 10
    // Click outside of input
    // Click on start button
    // Check if progress bar is displayed using background attribute
    // wait 1 second
    // Check if progress bar has changed using background attribute
    // wait 9 seconds
    // Check if progress bar has changed using background attribute
  });

  it.todo("should show a bell animation when timer is finished", async () => {
    // Click h1 containing seconds to change to input
    // Change input value to 10
    // Click outside of input
    // Click on start button
    // wait 10 seconds
    // Check if bell animation appears and is visible
    // wait 10 seconds
    // Check if bell animation is not visible
  });
});
