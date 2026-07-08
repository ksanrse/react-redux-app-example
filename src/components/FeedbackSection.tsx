import { useState } from "react";
import Button from "./Button/Button";

interface FormState {
  name: string;
  hasError: boolean;
  reason: "error" | "help" | "suggest";
}

export default function FeedbackSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    hasError: false,
    reason: "error",
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setForm((prev) => ({
      ...prev,
      name: val,
      hasError: val.trim().length === 0,
    }));
  }

  function changeReasonState(e: React.ChangeEvent<HTMLSelectElement>) {
    setForm((prev) => ({
      ...prev,
      reason: e.target.value as FormState["reason"],
    }));
  }

  return (
    <form>
      <h3>Добрый день, {form.name}</h3>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        type="text"
        value={form.name}
        style={{
          border: form.hasError ? "1px solid orange" : undefined,
        }}
        onChange={handleNameChange}
      />

      <label htmlFor="reason">Причина обращения</label>
      <select id="reason" value={form.reason} onChange={changeReasonState}>
        <option value="error">Ошибка</option>
        <option value="help">Помощь</option>
        <option value="suggest">Предложение</option>
      </select>

      <Button isActive={!form.hasError} disabled={form.hasError}>
        Отправить
      </Button>
    </form>
  );
}
