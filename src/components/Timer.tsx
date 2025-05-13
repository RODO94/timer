import { useCallback, useEffect, useState } from "react";

import Actions from "./Actions";
import ProgressCircle from "./ProgressCircle";
import Time from "./Time";

export interface TimeStructure {
  minutes: number;
  seconds: number;
}

export default function Timer() {
  const [time, setTime] = useState<TimeStructure>({
    minutes: 0,
    seconds: 0,
  });
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [progress, setProgress] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  const convertTimeToSeconds = useCallback((time: TimeStructure) => {
    return time.minutes * 60 + time.seconds;
  }, []);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => {
        let newTime = time;
        const { seconds, minutes } = time;
        if (seconds - 1 < 0 && minutes > 0)
          newTime = { minutes: minutes - 1, seconds: 59 };

        if (seconds - 1 >= 0) newTime = { ...time, seconds: seconds - 1 };

        if (seconds - 1 === 0 && minutes === 0) {
          newTime = { minutes: 0, seconds: 0 };
          setIsRunning(false);
          setTimeElapsed(0);
          setProgress(100);
        } else {
          const timeInSeconds = convertTimeToSeconds(newTime);
          const newTimeElapsed = timeElapsed + 1;
          const newProgress =
            (timeInSeconds / (newTimeElapsed + timeInSeconds)) * 100;
          setProgress(newProgress);
          setTimeElapsed(newTimeElapsed);
        }

        setTime(newTime);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [convertTimeToSeconds, isRunning, time, timeElapsed]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({ minutes: 0, seconds: 0 });
    setTimeElapsed(0);
    setProgress(0);
  };

  return (
    <section className='flex flex-col items-center gap-2 justify-center w-full h-full'>
      <ProgressCircle progress={progress}>
        <Time time={time} setTime={setTime} />
        <Actions
          isRunning={isRunning}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
        />
      </ProgressCircle>
    </section>
  );
}
