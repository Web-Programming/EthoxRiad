import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}
function TableFooter(props: Props) {
  const { className, children } = props;

  return (
    <div
      className={clsx(
        "w-full bg-primary py-4 -mt-[1px] px-6 text-xs font-semibold text-tertiary",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default TableFooter;
