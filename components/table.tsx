"use client"

import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { DataTableDemo } from "@/components/table";

const SchemaFilter = z.object({
  title: z.string(),
});

type filterTypes = z.infer<typeof SchemaFilter>;

export default function Page() {
  const { register, handleSubmit } = useForm<filterTypes>({
    resolver: zodResolver(SchemaFilter),
  });

  function handleFilter(data: filterTypes) {
    console.log(data)
  }

  return (
    <Main className="flex items-center">
      <div className="max-w-[1150px] w-full border rounded-md mx-auto p-4">
        <div className="flex justify-between gap-x-10">
          <form
            onSubmit={handleSubmit(handleFilter)}
            className="flex justify-between items-start pb-6 w-full"
          >
            <Input
              type="text"
              placeholder="Titulo"
              className="mr-6"
              {...register("title")}
            />

            <Button>
              <FaSearch className="mr-2" /> Filtrar por titulo
            </Button>
          </form>

          <Button>
            <IoAddSharp size="22" className="mr-2" /> Criar tarefa
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableHead>Titulo:</TableHead>
            <TableHead>Cliente:</TableHead>
            <TableHead>Status:</TableHead>
            <TableHead>Finalizar:</TableHead>
            <TableHead>Criado:</TableHead>
          </TableHeader>
          <TableBody>
            {/* {Tarefas.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell >{item.titulo}</TableCell>
                  <TableCell>{item.client.nome}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.finished}</TableCell>
                  <TableCell>{item.created_at}</TableCell>
                </TableRow>
              );
            })} */}
          </TableBody>
        </Table>
      </div>
    </Main>
  );
}
