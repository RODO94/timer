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

    // Validate and constrain values
    if (Number(inputValue) >= 60) {
      setErrorMessage("Seconds must be less than 60");
      return;
    }

    // Allow incomplete input during editing
    if (isNaN(Number(inputValue))) {
      setErrorMessage("Enter a valid number between 0 and 59");
      return; // Let user continue typing
    }
    if (Number(inputValue) < 0) {
      setErrorMessage("Seconds must be greater than or equal to 0");
      return;
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
        <h1>:</h1>
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
