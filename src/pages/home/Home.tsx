import { Link } from "react-router-dom";
import homeImage from "../../assets/home.png";

export default function Home() {
    return (
        <main className="flex flex-1 items-center bg-[#dff8fc]">
            <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 md:px-16 lg:px-20">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-black md:text-[40px]">
                        Seja bem vinde!
                    </h1>

                    <p className="mt-2 text-base font-semibold text-black">
                        Aqui você encontra Medicamentos e Cosméticos!
                    </p>

                    <Link
                        to="/"
                        className="mt-5 hidden w-fit rounded bg-indigo-800 px-6 py-2 text-sm text-white"
                    >
                        Cadastrar Produto
                    </Link>
                </div>

                <img
                    src={homeImage}
                    alt="Atendente em uma farmácia"
                    className="mx-auto w-full max-w-[220px] md:max-w-[240px]"
                />
            </section>
        </main>
    );
}
