import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { IconButton } from "./IconButton";

interface Props {
  errorMessage: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  iconAlt: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}
export function DefaultTextField({
  errorMessage,
  iconPath,
  onIconClick,
  onChange,
  placeholder,
  value,
  iconAlt,
  isError,
  id,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";
  return (
    <div className="relative default-text-field">
      <div
        className={`text-primary border-b ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
