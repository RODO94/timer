import { useState } from "react";

import { TimeVariants } from "../Time";
import Input from "./Input";

export default function TimeDisplay({
  time,
  handleTimeChange,
  variant,
}: {
  time: number;
  handleTimeChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    variant: TimeVariants
  ) => void;
  variant: TimeVariants;
}) {
  const [canEdit, setCanEdit] = useState<boolean>(false);

  return !canEdit ? (
    <h1
      onClick={() => {
        setCanEdit(true);
      }}
      className='text-5xl cursor-pointer'
      role='button'
      aria-label={`Edit ${variant}`}
    >
      {time || "00"}
    </h1>
  ) : (
    <Input
      name={variant}
      value={`${time}` || ""}
      handleChange={(e) => {
        handleTimeChange(e, variant);
      }}
      onBlur={() => setCanEdit(false)}
    />
  );
}
