import TableBody from "./partials/TableBody";

const ScheduleContent = () => {
  return (
    <div>
      <div className="text-2xl font-bold py-4 px-5">Daftar Matakuliah</div>
      <hr />
      <div className="bg-white rounded-lg py-1 px-5">
        <TableBody />
      </div>
    </div>
  );
};

export default ScheduleContent;
