import { useState } from "react";

import TimeDisplay from "./shared/TimeDisplay";
import { TimeStructure } from "./Timer";

export type TimeVariants = "seconds" | "minutes";

export default function Time({
  time,
  setTime,
}: {
  time: TimeStructure;
  setTime: React.Dispatch<React.SetStateAction<TimeStructure>>;
}) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    variant: TimeVariants
  ) => {
    setErrorMessage("");

    const inputValue = e.target.value;

    // Validate and constrain values based on the variant
    if (variant === "seconds") {
      if (Number(inputValue) >= 60) {
        setErrorMessage("Seconds must be less than 60");
        return;
      }
      if (Number(inputValue) < 0) {
        setErrorMessage("Seconds must be greater than or equal to 0");
        return;
      }
    } else if (variant === "minutes") {
      if (Number(inputValue) > 999) {
        // Adjust the upper limit as needed
        setErrorMessage("Minutes must be less than or equal to 999");
        return;
      }
      if (Number(inputValue) < 0) {
        setErrorMessage("Minutes must be greater than or equal to 0");
        return;
      }
    }

    // Allow incomplete input during editing
    if (isNaN(Number(inputValue))) {
      setErrorMessage(
        variant === "seconds"
          ? "Enter a valid number between 0 and 59"
          : "Enter a valid number between 0 and 999"
      );
      return; // Let user continue typing
    }

    setTime({ ...time, [variant]: Number(inputValue) });
  };

  return (
    <section className='flex flex-col items-center justify-center w-full gap-2'>
      <article className='flex flex-row items-center justify-center w-full gap-1'>
        <TimeDisplay
          time={time.minutes}
          handleTimeChange={handleTimeChange}
          variant='minutes'
        />{" "}
        <h1 className='text-8xl'>:</h1>
        <TimeDisplay
          time={time.seconds}
          handleTimeChange={handleTimeChange}
          variant='seconds'
        />
      </article>
      {errorMessage && <p>{errorMessage}</p>}{" "}
    </section>
  );
}
