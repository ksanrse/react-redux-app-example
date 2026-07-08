import { useState } from "react";
import Button from "./Button/Button";

export default function ButtonsSection() {
  const [content, setContent] = useState<string | null>(null);

  function handleClick(text: string | null) {
    setContent(text);
  }
  return (
    <section>
      <Button onClick={() => handleClick("rust")} isActive={content === "rust"}>
        Подход
      </Button>
      <Button
        onClick={() => handleClick("golang")}
        isActive={content === "golang"}
      >
        Доступность
      </Button>
      <Button
        onClick={() => handleClick("kotlin")}
        isActive={content === "kotlin"}
      >
        Концентрация
      </Button>

      {content && <p>{content}</p>}
    </section>
  );
}
