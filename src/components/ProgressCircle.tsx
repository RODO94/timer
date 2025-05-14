import { type ReactNode } from "react";

interface ProgressCircleProps {
  progress: number;
  children: ReactNode;
}

export default function ProgressCircle({
  progress,
  children,
}: ProgressCircleProps) {
  // Calculate gradient for progress visualization
  const yellow = "#fffb00";
  const blue = "#11099c";
  const convertProgressToDeg = Math.floor((100 - progress) * 3.6);

  const progressGradient = `conic-gradient(
    ${yellow} 0deg,
    ${yellow} ${convertProgressToDeg}deg,
    ${blue} ${convertProgressToDeg}deg,
    ${blue} 360deg
  )`;

  return (
    <div
      id='progress-outer-bar'
      data-testid='progress-outer-bar'
      className='w-[75vmin] h-[75vmin] flex flex-col items-center justify-center rounded-full'
      style={{
        background: progressGradient,
      }}
    >
      <div
        id='progress-inner-bar'
        data-testid='progress-inner-bar'
        className='w-[70vmin] h-[70vmin] bg-[#11099c] flex flex-col items-center justify-center gap-3 rounded-full'
      >
        {children}
      </div>
    </div>
  );
}
