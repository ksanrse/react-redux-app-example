import WayToRustify from "./WaysToRustify";
import { data } from "../data.ts";
import ButtonsSection from "./ButtonsSection.tsx";

export default function RustifySection() {
  return (
    <>
      <h3>Раст</h3>
      <ul>
        {data.items.map((item, index) => (
          <WayToRustify
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
      <ButtonsSection />
    </>
  );
}
