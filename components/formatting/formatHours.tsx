import { Muted } from "../fonts/muted";

type FormatDateType = {
  hours: string;
};

export function FormatHours({ hours }: FormatDateType) {
  if (hours === null || undefined) {
    return;
  }
  const newHours = new Date(hours).getHours() + 1;
  const newMinutes = new Date(hours).getMinutes();
  const newSeconds = new Date(hours).getSeconds();
  
  const separeDate2 = `${newSeconds}:${newMinutes}:${newHours}`;

  return <Muted>{separeDate2}</Muted>;
}
