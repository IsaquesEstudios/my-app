import { Large } from "./fonts/large";
import { Muted } from "./fonts/muted";

type CardProps = {
  title: string;
  recurrency?: string
  icon: any;
  value: string;
  compare: string;
};

export default function Card({ compare, icon, value, title, recurrency }: CardProps) {
  return (
    <div className="p-4 border rounded-lg flex flex-col gap-y-1  w-full">
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>

        <div>{icon}</div>
      </div>
      <div className="flex items-end">
        <Large className="text-3xl">{value}</Large>
        {recurrency && <p>/{recurrency}</p>}
      </div>
      <Muted>{compare}</Muted>
    </div>
  );
}
