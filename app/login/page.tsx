import React from "react";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col justify-center mx-auto p-8 max-w-[550px]">
        <Image
          src="/logo.svg"
          alt="finance ai"
          width={173}
          height={39}
          className="object-cover"
        />
        <h1 className="text-4xl font-bold mt-8">Bem-vindo</h1>
        <p className="text-muted-foreground mt-3">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="mt-8">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="capa da página de login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
