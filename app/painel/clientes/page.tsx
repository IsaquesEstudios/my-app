"use client";

import { Api } from "@/api/Api";
import { Main } from "@/components/main";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Table } from "lucide-react";
import { useEffect, useState } from "react";

type ClientProps = {
  id: string;
  company_name: string;
  owner: string;
  email: string;
  number: string;
  created_at: string;
  updated_at: string;
};

export default function Page() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function name() {
      const { data } = await Api.get("/client/show/all");
      setData(data);
    }

    name();
  }, []);

  return (
    <Main>
      <Table className="border-[1px] rounded-sm">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>RESPONSÁVEL</TableHead>
            <TableHead>EMPRESA</TableHead>
            <TableHead>CRIADO</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: ClientProps, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.company_name}</TableCell>
                <TableCell>
                  {new Date(item.created_at).toLocaleDateString("pt-BR")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Main>
  );
}
