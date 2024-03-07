// "use client"

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function FormLogin(getAuth: any) {
  function HandleLogin(){

  }

  return(
    <form className="mt-8 flex gap-y-4 flex-col" onSubmit={HandleLogin}>
    <Input placeholder="Email" />
    <Input placeholder="Senha" />
    <Button variant="black" type="submit">
      Acessar
    </Button>
  </form>
  )
}
