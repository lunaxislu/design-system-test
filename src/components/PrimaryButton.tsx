type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface Props {
  theme: PrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}
const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-primary";
const disabled = "disabled:bg-mono100 disabled:text-mono200";
const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};
export function PrimaryButton({ theme, children, onClick, isDisabled }: Props) {
  return (
    <button
      className={`w-full rounded-default-button h-14.75 ${disabled} ${color[theme]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
