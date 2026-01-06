interface Props {
  children: React.ReactNode;
}
export function ErrorMessage({ children }: Props) {
  return <p className="text-xs text-error">{children}</p>;
}
