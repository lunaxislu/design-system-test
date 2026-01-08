interface Props {
  className?: string;
}
export function EmptyState({ className }: Props) {
  return (
    <div className={`text-primary border bg-red-600  $${className}`}>empty</div>
  );
}
