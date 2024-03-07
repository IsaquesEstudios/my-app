import { Currency } from "lucide-react";
import { Large } from "../fonts/large";

type FormatMoneyProps = {
  money: any;
  className: string;
};

export function FormatMoney({ className, money }: FormatMoneyProps) {
  return <Large className={`${className}`}>{money}</Large>;
}
