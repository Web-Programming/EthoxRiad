import { sessionName } from "@utils/consts";

export const getBuildingName = (roomId: string): string => {
  return roomId.charAt(0) === "A"
    ? "Gedung Rajawali14"
    : "Gedung IT Super Store";
};

export const isActiveSchedule = (sessionId: number): boolean => {
  const sessionTime = sessionName[sessionId];
  if (!sessionTime) {
    return false;
  }

  const [startTime, endTime] = sessionTime.split(" - ");
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const sessionStartMinutes = startHour * 60 + startMinute;
  const sessionEndMinutes = endHour * 60 + endMinute;

  return (
    currentMinutes >= sessionStartMinutes && currentMinutes <= sessionEndMinutes
  );
};
