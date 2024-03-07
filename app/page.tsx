"use client";

import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H1 } from "@/components/fonts/h1";
import { P } from "@/components/fonts/p";
import Link from "next/link";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FormEvent, useEffect, useState } from "react";
import { FormLogin } from "@/components/form/formLogin";
import { auth } from "@/lib/firebase";

type PropsStateChanged = {
  email: string;
};

export default function Page() {
  const [isAuthenticated, setAuth] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user?.email === "matteus@isaquesestudios.com") {
          window.location.href = "/painel/admin";
        }
        window.location.href = "/painel";
      }
    });
  }, []);

  function HandleLogin(e: any) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      if (userCredential) {
        if (userCredential?.user.email === "matteus@isaquesestudios.com") {
          window.location.href = "/painel/admin";
        }
        window.location.href = "/painel";
      }
    });
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
          <form
            className="mt-8 flex gap-y-4 flex-col"
            onSubmit={HandleLogin}
            autoComplete="on"
          >
            <Input placeholder="Email" name="email" />
            <Input placeholder="Senha" name="password" />
            <Button variant="black" type="submit">
              Acessar
            </Button>
          </form>
          <div className="mt-4">
            <Link href="/nova-senha" className="underline-offset-2">
              Esqueci minha senha
            </Link>
          </div>
        </TabsContent>
        {/* <TabsContent value="registrar">
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
        </TabsContent>{" "} */}
      </Tabs>
    </Main>
  );
}
