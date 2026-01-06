interface Props {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function CategoryButton({ iconAlt, iconPath, onClick, text }: Props) {
  return (
    <button
      className={`rounded-default-button border border-primary text-mono100 text-base font-bold pl-[22px] pr-[21px] py-4 flex flex-col items-center`}
      onClick={onClick}
    >
      <img src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
}
