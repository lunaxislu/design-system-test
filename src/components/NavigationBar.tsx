import { IconButton } from "./IconButton";

interface Props {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export function NavigationBar({
  showBackButton,
  showCloseButton,
  showTitle,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
  title,
}: Props) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-[7px]">
        {/* 뒤로가기 버튼*/}
        {showBackButton && (
          <IconButton
            iconPath="/icons/back_left.svg"
            alt=""
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 이름 */}
        {showTitle && <h1 className="text-2xl">{title}</h1>}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          iconPath="/icons/cancel.svg"
          alt=""
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
