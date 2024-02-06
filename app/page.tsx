"use client";

import { Tarefas } from "@/api/tarefas";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H1 } from "@/components/fonts/h1";
import { P } from "@/components/fonts/p";
import { H2 } from "@/components/fonts/h2";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@radix-ui/react-checkbox";
import Link from "next/link";

const SchemaFilter = z.object({
  title: z.string(),
});

type filterTypes = z.infer<typeof SchemaFilter>;

export default function Page() {
  const { register, handleSubmit } = useForm<filterTypes>({
    resolver: zodResolver(SchemaFilter),
  });

  function handleFilter(data: filterTypes) {
    console.log(data);
  }

  return (
    <Main className="flex items-center justify-center ">
      <Tabs defaultValue="login" className="w-[500px] border rounded-md p-4">
        <TabsList className="flex justify-between">
          <TabsTrigger className="w-full" value="login">
            login
          </TabsTrigger>
          <TabsTrigger className="w-full" value="registrar">
            Registrar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <H1>Acessar conta</H1>
          <P>
            Ao acessar sua conta terá total informação sobre seus planos e
            pagamentos contratados
          </P>

          <form className="mt-8 flex gap-y-4 flex-col">
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button variant="black">Acessar</Button>
          </form>

          <div className="mt-4">
            <Link href="/nova-senha" className="underline-offset-2">
              Esqueci minha senha
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="registrar">
          <H1>Criar conta</H1>
          <P>
            Preencha todos os dados e crie sua conta para assinaturas e planos
            com a Isaques Estúdios
          </P>

          <form className="mt-8 flex gap-y-4 flex-col">
            <div className="flex  gap-x-4">
              <Input type="text" placeholder="Nome*" required />
              <Input type="text" placeholder="Empresa*" required />
            </div>
            <Input type="email" placeholder="Email*" required />
            <Input type="password" placeholder="Senha*" required />
            <Input type="number" placeholder="Número*" required />

            <Button variant="black">Acessar</Button>
          </form>

          <div className="mt-4">
            <Link href="/nova-senha" className="underline-offset-2">
              Esqueci minha senha
            </Link>
          </div>
        </TabsContent>{" "}
      </Tabs>
    </Main>
  );
}
