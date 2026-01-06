interface Props {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}
export function TagButton({ children, onClick, isChecked }: Props) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "text-white bg-white/10";
  return (
    <button
      className={`rounded-tag-button px-[10px] border border-white h-[33px] text-sm font-medium ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
