import { Table } from "lucide-react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
};

export function table({ children }: TableProps) {
  return (
    <Table className="border-[1px] rounded-sm">
      <TableHeader>
        <TableRow>
          <TableHead>TITULO</TableHead>
          <TableHead className="w-[200px]">PAGADOR</TableHead>
          <TableHead className="w-[150px]">VALOR</TableHead>
          <TableHead className="w-[150px]">DIA</TableHead>
          <TableHead className="w-[200px]">ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
}
