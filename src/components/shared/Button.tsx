export default function Button({
  action,
  variant,
}: {
  action: "start" | "stop" | "reset";
  variant: "primary" | "secondary";
}) {
  /**
   * This component will be a shared button component
   * It will receive a variant prop to handle the styling of the button
   * It will receive an action prop to handle the action of the button
   * The different variants will be
   * - Primary
   * - Secondary
   * The different actions will be
   * - Start
   * - Stop
   * - Reset
   */
  return <button>{`${action}.... ${variant}`}</button>;
}
