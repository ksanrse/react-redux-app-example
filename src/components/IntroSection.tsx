import React from "react";

const rce = React.createElement;

export default function IntroSection() {
  return rce("section", null, [
    rce("h1", { key: 1 }, "Академия"),
    rce(
      "h3",
      { style: { color: "#666" }, key: 2 },
      "Университет разработки разных приложений",
    ),
  ]);
}
