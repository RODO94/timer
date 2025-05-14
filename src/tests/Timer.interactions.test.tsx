import { cleanup } from "@testing-library/react";
import { render } from "@testing-library/react";
import { afterEach } from "vitest";
import { beforeEach } from "vitest";
import { describe } from "vitest";
import { it } from "vitest";

import Timer from "../components/Timer";

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
