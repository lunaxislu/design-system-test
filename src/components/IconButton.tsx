interface Props {
  iconPath?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  alt: string;
}
export function IconButton({
  iconPath = "/icons/delete_dark.svg",
  onClick,
  alt,
}: Props) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
