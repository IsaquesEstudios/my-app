import { Large } from "./fonts/large";
import { Muted } from "./fonts/muted";
import { FormatDate } from "./formatDate";
import { FormatHours } from "./formatHours";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

type PaymentsComponentsType = {
  title: string;
  value: string;
  approved: string;
  method: string;
};

export function PaymentComponents({
  title,
  value,
  approved,
  method,
}: PaymentsComponentsType) {
  return (
    <>
      <div className="flex justify-between mt-4">
        <div>
          <Muted>+ {value}</Muted>

          <Muted>{method}</Muted>
        </div>

        <div>
          <FormatDate date={approved} />
          <FormatHours hours={approved} />
        </div>
      </div>
      <Separator className="mt-4" />
    </>
  );
}
