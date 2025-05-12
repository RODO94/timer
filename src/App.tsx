import "./App.css";
import Timer from "./components/Timer";

function App() {
  /**
   * The plan for this app is to create a simple timer
   * The timer will be represented by a hollow circle with a border
   * The border will gradually change as the time runs closer to 0
   * A user will have 3 actions available to them
   * Action 1: Setting the time limit
   * Action 2: Starting the Timer
   * Action 3: Stopping the Timer
   * Action 4: Resetting the time
   * The time will be shown in the middle of the circle
   * It will start at 00:00,  representing minutes:seconds, mm:ss
   * The user will set the time by clicking the time displayed in the middle of the circle
   * After a user has clicked into the time and set it to any time other than 00:00
   * The action buttons will appear below the timer
   * The Start button will turn into the Stop button after it has been click and while the time is not 00:00
   * The reset button will be to the right of the Start / Stop button
   * */
  return (
    <main className="w-dvw h-dvh flex justify-center items-center">
      <Timer />
    </main>
  );
}

export default App;
