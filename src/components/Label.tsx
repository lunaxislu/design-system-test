interface Props extends React.ComponentProps<"label"> {
  htmlFor: string;
}

export function Label(props: Props) {
  const { children, ...rest } = props;

  return (
    <label className="text-xs text-secondary" {...rest}>
      {children}
    </label>
  );
}
