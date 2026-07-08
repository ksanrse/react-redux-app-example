interface WaysToRustifyProps {
  key: number;
  title: string;
  description: string;
}

export default function WayToRustify({
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
}
