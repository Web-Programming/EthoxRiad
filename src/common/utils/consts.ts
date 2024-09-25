const dayName: { [key: number]: string } = {
  1: "Senin",
  2: "Selasa",
  3: "Rabu",
  4: "Kamis",
  5: "Jumat",
  6: "Sabtu",
};

const sessionName: { [key: number]: string } = {
  1: "07:50 - 09:30",
  2: "09:40 - 11:20",
  3: "11:30 - 13:10",
  4: "13:30 - 15:10",
  5: "15:20 - 17:00",
  6: "17:10 - 18:50",
  7: "19:00 - 20:40",
};

const statusNameMap = {
  WAITING: "Menunggu",
  APPROVED: "Disetujui",
  REJECTED: "Ditolak",
  NOT_TAKEN: "Tidak diambil",
};

const statusDetailName: { [key: number]: string } = {
  1: statusNameMap.WAITING,
  2: statusNameMap.APPROVED,
  3: statusNameMap.REJECTED,
  4: statusNameMap.NOT_TAKEN,
};

const statusDetailColor = {
  [statusNameMap.WAITING]: "bg-yellow-300",
  [statusNameMap.APPROVED]: "bg-blue-300",
  [statusNameMap.REJECTED]: "bg-red-300",
  [statusNameMap.NOT_TAKEN]: "bg-gray-300",
};

export {
  dayName,
  sessionName,
  statusNameMap,
  statusDetailName,
  statusDetailColor,
};
