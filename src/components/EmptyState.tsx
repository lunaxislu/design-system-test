interface Props {
  className?: string;
}
export function EmptyState({ className }: Props) {
  return <div className={`text-primary border $${className}`}>empty</div>;
}
