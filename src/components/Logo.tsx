import { FaHeart } from "react-icons/fa";

export type LogoProps = {
  size?: string;
};

export function Logo({ size }: LogoProps) {
  return (
    <span className="text-primary">
      <FaHeart size={size} />
    </span>
  );
}
