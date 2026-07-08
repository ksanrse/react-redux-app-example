import Button from "./Button/Button";

import type { Tab } from "../types.ts";

export default function TabsSection({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (value: Tab) => void;
}) {
  return (
    <section>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Обратная связь
      </Button>
      <Button isActive={active === "effect"} onClick={() => onChange("effect")}>
        Обратная связь
      </Button>
    </section>
  );
}
