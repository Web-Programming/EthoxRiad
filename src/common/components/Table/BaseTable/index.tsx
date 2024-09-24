interface Props {
  children: React.ReactNode;
}
function BaseTable(props: Props) {
  const { children } = props;

  return <div className="w-full shadow-dropbox rounded-md">{children}</div>;
}

export default BaseTable;
