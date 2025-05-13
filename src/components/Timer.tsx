import { useCallback, useEffect, useMemo, useState } from "react";

import Button from "./shared/Button";
import Time from "./Time";

export interface TimeStructure {
  minutes: number;
  seconds: number;
}
export default function Timer() {
  const [time, setTime] = useState<TimeStructure>({
    minutes: 30,
    seconds: 30,
  });
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const progressGradient = useMemo(() => {
    const yellow = "#fffb00";
    const blue = "#11099c";
    const convertProgressToDeg = progress * 3.6;

    return `conic-gradient(
    ${yellow} 0deg,
    ${yellow} ${convertProgressToDeg}deg,
    ${blue} ${convertProgressToDeg}deg,
    ${blue} 360deg
  )`;
  }, [progress]);

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
          const newProgress = (newTimeElapsed / timeInSeconds) * 100;
          setProgress(newProgress);
          setTimeElapsed(newTimeElapsed);
        }

        setTime(newTime);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [convertTimeToSeconds, isRunning, time, timeElapsed]);

  return (
    <section className='flex flex-col items-center justify-center w-full h-full'>
      <div
        id='progress-outer-bar'
        className='w-[75vmin] h-[75vmin] flex flex-col items-center justify-center rounded-full'
        style={{
          background: `${progressGradient}`,
        }}
      >
        <div
          id='progress-inner-bar'
          className='w-[70vmin] h-[70vmin] bg-[#11099c] flex flex-col items-center justify-center rounded-full'
        >
          <Time time={time} />
          <div className='flex gap-4 mt-4'>
            <Button action={isRunning ? "stop" : "start"} variant='primary' />
            <Button action='reset' variant='secondary' />
          </div>
        </div>
      </div>
    </section>
  );
}
