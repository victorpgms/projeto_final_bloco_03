import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Categoria from "../../../models/Categoria";
import { categoriaService } from "../../../services/CategoriaService";

function DeletarCategorias() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categoria, setCategoria] = useState<Categoria | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(id !== undefined);

    const [erro, setErro] = useState<string>(
        id === undefined ? "ID da categoria não informado." : "",
    );

    useEffect(() => {
        if (id === undefined) {
            return;
        }

        async function carregarCategoria() {
            try {
                const dados = await categoriaService.buscarPorId(Number(id));

                setCategoria(dados);
            } catch (error) {
                console.error("Erro ao buscar categoria:", error);

                setErro("Erro ao carregar os dados da categoria.");
            } finally {
                setIsLoading(false);
            }
        }

        void carregarCategoria();
    }, [id]);

    async function confirmarExclusao() {
        if (id === undefined) {
            setErro("ID da categoria não informado.");
            return;
        }

        try {
            setIsLoading(true);
            setErro("");

            await categoriaService.deletar(Number(id));

            alert("Categoria excluída com sucesso!");
            navigate("/categorias");
        } catch (error) {
            console.error("Erro ao excluir categoria:", error);

            setErro("Erro ao excluir a categoria.");
        } finally {
            setIsLoading(false);
        }
    }

    function cancelar() {
        navigate("/categorias");
    }

    if (isLoading && categoria === null) {
        return (
            <main className="flex flex-1 items-center justify-center bg-slate-100 px-4 py-24">
                <p>Carregando categoria...</p>
            </main>
        );
    }

    return (
        <main className="flex flex-1 justify-center bg-slate-100 px-4 py-12">
            <section className="w-full max-w-md">
                <h1 className="mb-3 text-center text-4xl font-semibold">
                    Deletar categoria
                </h1>

                <p className="mb-6 text-center">
                    Você tem certeza que deseja apagar a categoria a seguir?
                </p>

                {erro && (
                    <p className="mb-4 text-center font-bold text-red-600">
                        {erro}
                    </p>
                )}

                {categoria && (
                    <article className="overflow-hidden rounded-lg bg-white shadow-md">
                        <h2 className="bg-indigo-800 px-4 py-2 font-bold text-white">
                            Categoria
                        </h2>

                        <p className="px-4 py-6 text-xl font-semibold">
                            {categoria.nome}
                        </p>

                        <div className="grid grid-cols-2">
                            <button
                                type="button"
                                onClick={cancelar}
                                disabled={isLoading}
                                aria-label="Cancelar exclusão"
                                title="Cancelar"
                                className="flex items-center justify-center bg-red-400 py-3 text-white transition-colors hover:bg-red-500 disabled:opacity-60"
                            >
                                <XIcon size={20} />
                            </button>

                            <button
                                type="button"
                                onClick={confirmarExclusao}
                                disabled={isLoading}
                                aria-label="Confirmar exclusão"
                                title="Confirmar exclusão"
                                className="flex items-center justify-center bg-indigo-400 py-3 text-white transition-colors hover:bg-indigo-500 disabled:opacity-60"
                            >
                                {isLoading ? (
                                    "Excluindo..."
                                ) : (
                                    <CheckIcon size={20} />
                                )}
                            </button>
                        </div>
                    </article>
                )}
            </section>
        </main>
    );
}

export default DeletarCategorias;
