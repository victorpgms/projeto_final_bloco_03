import {
    ListIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
    XIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState<boolean>(false);

    return (
        <header className="w-full bg-indigo-900 text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
                {/* Marca */}
                <Link
                    to="/"
                    className="shrink-0 cursor-pointer transition-transform active:scale-95"
                    onClick={() => setMenuAberto(false)}
                >
                    <img
                        src={logo}
                        alt="Logo da Farmácia"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Barra de pesquisa */}
                <div className="hidden max-w-xl flex-1 items-center md:flex">
                    <input
                        type="text"
                        placeholder="Procurar"
                        className="w-full rounded-l-lg bg-white px-4 py-3 text-sm text-slate-800 outline-none"
                    />

                    <button
                        type="button"
                        aria-label="Pesquisar"
                        className="rounded-r-lg bg-blue-600 px-4 py-3 transition-colors hover:bg-blue-700"
                    >
                        <MagnifyingGlassIcon size={20} />
                    </button>
                </div>

                {/* Navegação desktop */}
                <div className="hidden items-center gap-5 text-sm md:flex">
                    <Link
                        to="/categorias"
                        className="transition-colors hover:text-red-400"
                    >
                        Categorias
                    </Link>

                    <Link
                        to="/categorias/cadastrar"
                        className="whitespace-nowrap transition-colors hover:text-red-400"
                    >
                        Cadastrar Categoria
                    </Link>

                    <button
                        type="button"
                        aria-label="Minha conta"
                        className="transition-transform active:scale-95"
                    >
                        <UserIcon size={30} />
                    </button>

                    <button
                        type="button"
                        aria-label="Carrinho de compras"
                        className="transition-transform active:scale-95"
                    >
                        <ShoppingCartIcon size={30} />
                    </button>
                </div>

                {/* Botão do menu mobile */}
                <button
                    type="button"
                    className="md:hidden"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                >
                    {menuAberto ? (
                        <XIcon size={30} />
                    ) : (
                        <ListIcon size={30} />
                    )}
                </button>
            </nav>

            {/* Navegação mobile */}
            <div
                className={`${
                    menuAberto ? "flex" : "hidden"
                } flex-col items-center gap-4 border-t border-indigo-700 bg-indigo-950 px-4 py-5 text-sm md:hidden`}
            >
                <Link
                    to="/categorias"
                    onClick={() => setMenuAberto(false)}
                >
                    Categorias
                </Link>

                <Link
                    to="/categorias/cadastrar"
                    onClick={() => setMenuAberto(false)}
                >
                    Cadastrar Categoria
                </Link>
            </div>
        </header>
    );
}