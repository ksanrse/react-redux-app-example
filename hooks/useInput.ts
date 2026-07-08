import { useState } from "react";

export default function useInput(defaultValue = "") {
  const [value, setValue] = useState<string>(defaultValue);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
}
