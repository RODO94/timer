import { memo } from "react";

import { Button } from "./shared/Button";

interface ActionsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}
function ActionsComponent({
  isRunning,
  onStart,
  onStop,
  onReset,
}: ActionsProps) {
  const handleStartStop = () => {
    if (isRunning) {
      onStop();
    } else {
      onStart();
    }
  };

  return (
    <div className='flex justify-center gap-10 md:gap-24 mt-4 w-full'>
      <Button action='reset' variant='secondary' onClick={onReset} />
      <Button
        action={isRunning ? "stop" : "start"}
        variant='primary'
        onClick={handleStartStop}
      />
    </div>
  );
  return <></>;
}

export const Actions = memo(ActionsComponent);
