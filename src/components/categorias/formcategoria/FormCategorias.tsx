import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Categoria from "../../../models/Categoria";
import { categoriaService } from "../../../services/CategoriaService";

function FormCategorias() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categoria, setCategoria] = useState<Categoria>({
        nome: "",
    });

    const [erro, setErro] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(id !== undefined);

    useEffect(() => {
        if (id === undefined) {
            return;
        }

        async function carregarCategoria() {
            try {
                const categoriaEncontrada = await categoriaService.buscarPorId(
                    Number(id),
                );

                setCategoria(categoriaEncontrada);
            } catch (error) {
                console.error("Erro ao buscar categoria:", error);

                setErro("Erro ao carregar os dados da categoria.");
            } finally {
                setIsLoading(false);
            }
        }

        void carregarCategoria();
    }, [id]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErro("");

        try {
            setIsLoading(true);

            if (id !== undefined) {
                const categoriaAtualizada =
                    await categoriaService.atualizar(categoria);

                alert(
                    `Categoria ${categoriaAtualizada.nome} atualizada com sucesso!`,
                );
            } else {
                const novaCategoria =
                    await categoriaService.cadastrar(categoria);

                alert(
                    `Categoria ${novaCategoria.nome} cadastrada com sucesso!`,
                );
            }

            navigate("/categorias");
        } catch (error) {
            console.error("Erro ao salvar categoria:", error);

            setErro("Erro ao salvar categoria na API.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="flex flex-1 justify-center bg-slate-100 px-6 py-8">
            <section className="w-full max-w-2xl">
                <h1 className="text-center text-4xl font-semibold text-slate-900">
                    {id === undefined
                        ? "Cadastrar categoria"
                        : "Editar categoria"}
                </h1>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
                    <label
                        htmlFor="nome"
                        className="mb-1 text-sm text-slate-800"
                    >
                        Categoria
                    </label>

                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={categoria.nome}
                        onChange={handleChange}
                        placeholder="Categoria"
                        required
                        minLength={2}
                        className="rounded border border-slate-500 bg-white px-3 py-2 outline-none focus:border-indigo-600"
                    />

                    {erro && (
                        <p className="mt-3 text-center font-bold text-red-600">
                            {erro}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-6 w-full max-w-sm self-center rounded bg-indigo-800 px-6 py-3 font-bold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading
                            ? "Salvando..."
                            : id === undefined
                              ? "Cadastrar"
                              : "Atualizar"}
                    </button>
                </form>
            </section>
        </main>
    );
}

export default FormCategorias;
