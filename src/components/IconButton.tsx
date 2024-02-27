import type { ButtonProps } from "./Button";

export type IconButtonProps = ButtonProps & {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
};

export function IconButton({ children, onClick, className }: IconButtonProps) {
  return (
    <button onClick={onClick} className={`p-2 rounded-full ${className}`}>
      {children}
    </button>
  );
}
