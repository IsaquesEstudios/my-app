import { Muted } from "./fonts/muted";

type FormatDateType = {
  hours: string
}

export function FormatHours({hours}:FormatDateType) {
  const separeDate: string[] = hours?.split("T")
  const separeDate2 = separeDate[1].split(".")

  return <Muted>{separeDate2[0]}</Muted>;
}
