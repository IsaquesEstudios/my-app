import { Muted } from "./fonts/muted";

type FormatDateType = {
  date: string
}

export function FormatDate({date}:FormatDateType) {
  const separeDate: string[] = date?.split("T")
  const separeDate2 = separeDate[0].split("-")
  const getDay = separeDate2[2]
  const getMonth = separeDate2[1]  
  const getYear = separeDate2[0]

  const newDate = `${getDay}/${getMonth}/${getYear}`

  return <Muted>{newDate}</Muted>;
}
