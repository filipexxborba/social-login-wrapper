import Link from "next/link";

export default function AuthForm() {
   return (
      <>
         <form className="flex flex-col gap-4">
            <fieldset className="flex flex-col gap-2 ">
               <label
                  htmlFor="email"
                  className="text-base font-semibold text-gray-600 "
               >
                  E-mail
               </label>
               <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:border-primary outline-primary"
               />
            </fieldset>
            <fieldset className="flex flex-col gap-2 ">
               <label
                  htmlFor="password"
                  className="text-base font-semibold text-gray-600 "
               >
                  Senha
               </label>
               <input
                  type="password"
                  id="password"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:border-primary outline-primary"
               />
            </fieldset>
         </form>
         <section className="flex flex-row items-center justify-between">
            <fieldset className="flex items-center gap-2">
               <input type="checkbox" id="remember-me" />
               <label htmlFor="remember-me" className="text-base text-gray-800">
                  Manter-me conectado
               </label>
            </fieldset>
            <Link href="#">
               <p className="text-base text-gray-800 hover:underline">
                  Esqueci minha senha
               </p>
            </Link>
         </section>
      </>
   );
}
