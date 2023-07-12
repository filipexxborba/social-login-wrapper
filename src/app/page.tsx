"use client";
import Button from "@/components/Button";
import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";

export default function Home() {
   return (
      <main className="md:grid md:grid-cols-[600px_1fr] min-w-full min-h-screen bg-gray-100">
         {/* Form wraper */}
         <section className="flex flex-col justify-center gap-8 p-16 bg-white">
            <Image
               src={"bora-rachar-logo.svg"}
               width={217}
               height={80}
               alt="Logotipo do grupo Bora Rachar, uma escrita roxa dizendo 'Bora rachar' e após isso tem um ponto de integoração, na cor laranja."
            />
            <header className="flex flex-col items-start gap-2">
               <h1 className="text-3xl font-semibold text-gray-600">
                  Seja bem-vindo!
               </h1>
               <p className="text-base text-gray-400 max-w-[45ch]">
                  Obtenha assinaturas com descontos incríveis! Não possui uma
                  conta? <span className="text-orange-500">Cadastre-se</span>.
               </p>
            </header>
            <AuthForm />
            {/* Normal auth & socials auth wrapper */}
            <section className="flex flex-col w-full gap-4">
               <Button
                  text="Acessar minha conta"
                  type="primary"
                  onClick={() => console.log("asdasasd")}
               />
               {/* Divider */}
               <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 h-[1px]" />
                  <p>ou</p>
                  <div className="flex-1 bg-gray-200 h-[1px]" />
               </div>
               <Button
                  text="Acessar com Google"
                  type="secondary"
                  onClick={() => console.log("asdasasd")}
                  icon={
                     <Image
                        src={"gmail-logo.svg"}
                        width={15}
                        height={15}
                        alt="Logotipo"
                     />
                  }
               />
               <Button
                  text="Acessar com Facebook"
                  type="secondary"
                  onClick={() => console.log("asdasasd")}
                  icon={
                     <Image
                        src={"instagram-logo.svg"}
                        width={15}
                        height={15}
                        alt="Logotipo"
                     />
                  }
               />
               <Button
                  text="Acessar com Instagram"
                  type="secondary"
                  onClick={() => console.log("asdasasd")}
                  icon={
                     <Image
                        src={"instagram-logo.svg"}
                        width={15}
                        height={15}
                        alt="Logotipo"
                     />
                  }
               />
            </section>
         </section>
         {/* Background */}
         <section className="image-background-fill" />
      </main>
   );
}
