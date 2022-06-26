import { CircleNotch } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Ignite } from "../components/Icons";
import { useCreateSubscribeMutation } from "../graphql/generated";

interface IFormInputs {
  name: string;
  email: string;
}

const Subscribe: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const [createSubscribe, { loading }] = useCreateSubscribeMutation();
  const navigate = useNavigate();

  function onSubmit(e: IFormInputs) {
    createSubscribe({
      variables: {
        name: e.name,
        email: e.email,
      },
      onError: (e) => console.log(e.message),
    });

    navigate("/ignite");
  }

  return (
    <>
      <section className="flex flex-col items-center bg-blur bg-cover bg-no-repeat min-h-screen">
        <div className="flex items-center justify-between  w-full max-w-[1100px] mx-auto mt-8 lg:flex-col lg:gap-8">
          <div className="flex flex-col items-start justify-center gap-8 w-full max-w-[640px] lg:p-8 sm:text-center lg:items-center">
            <Ignite />
            <h1 className="text-[40px] text-gray-100 leading-tight sm:text-3xl">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="text-base text-gray-200 leading-snug sm:text-sm">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-700 p-8 rounded">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 w-[327px] lg:max-w-[327px] lg:w-full"
            >
              <strong className="text-2xl text-gray-100">
                Inscreva-se gratuitamente.
              </strong>
              <div className="flex flex-col gap-2">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="w-full h-[56px] rounded bg-gray-900 text-gray-400 p-5"
                />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="w-full h-[56px] rounded bg-gray-900 text-gray-400 p-5"
                />
              </div>
              <button
                disabled={loading ? true : false}
                className={`button ${loading && "opacity-50"}`}
                type="submit"
                aria-label="Enviar inscrição da vaga"
              >
                Garantir minha vaga
                {loading && <CircleNotch size={22} className="animate-spin" />}
              </button>
            </form>
          </div>
        </div>

        <div>
          <img src="/assets/stack.png" alt="Stack" className="p-8" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Subscribe;
