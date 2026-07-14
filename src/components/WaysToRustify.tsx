import { memo } from "react";

interface WaysToRustifyProps {
  title: string;
  description: string;
}

export default memo(function WayToRustify({
  title,
  description,
}: WaysToRustifyProps) {
  return (
    <li>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </li>
  );
});
