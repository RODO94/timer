import Button from "./shared/Button";
import Time from "./Time";

export default function Timer() {
  /**
   * This component is a placeholder for the timer component
   * This component will be the parent to the time component and the action buttons
   * It will handle the styling of the visual time indicator and the state of the timer
   * This indicator will be a circular progress bar that will fill up as the time progresses
   */

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div
        id="progress-bar"
        className="w-[75vmin] h-[75vmin] flex flex-col items-center justify-center border-8 border-solid border-black rounded-full"
      >
        <Time />
        <div className="flex gap-4 mt-4">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}
