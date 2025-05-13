import { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";

import { Actions } from "./Actions";
import ProgressCircle from "./ProgressCircle";
import Time from "./Time";
import bellAnimation from "../assets/bell-animation.json";

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
  const [hasTimerFinished, setHasTimerFinished] = useState(false);

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
          setHasTimerFinished(true);
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

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime({ minutes: 0, seconds: 0 });
    setTimeElapsed(0);
    setProgress(0);
  }, []);

  if (hasTimerFinished) {
    setTimeout(() => {
      setHasTimerFinished(false);
    }, 10000);
  }

  return (
    <section className='flex flex-col items-center gap-2 justify-center w-full h-full'>
      {hasTimerFinished && (
        <div className='absolute top-2'>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: bellAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={300}
            width={300}
          />
        </div>
      )}
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
