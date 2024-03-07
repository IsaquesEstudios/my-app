import { Muted } from "../fonts/muted";

type FormatDateType = {
  date: string;
};

export function FormatDate({ date }: FormatDateType) {
  if (date === null) {
    return;
  }

  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  const newDate = `${day}/${month + 1}/${year}`;

  return <Muted>{newDate}</Muted>;
}
