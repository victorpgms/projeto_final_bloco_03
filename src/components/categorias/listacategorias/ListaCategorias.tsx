import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

import type Categoria from "../../../models/Categoria";
import { categoriaService } from "../../../services/CategoriaService";
import CardCategorias from "../cardcategorias/CardCategorias";

export default function ListaCategorias() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function buscarCategorias() {
            try {
                const dados = await categoriaService.buscar();
                setCategorias(dados);
            } catch (error) {
                console.error(
                    "Erro ao buscar categorias:",
                    error,
                );

                setErro("Erro ao carregar as categorias.");
            } finally {
                setIsLoading(false);
            }
        }

        void buscarCategorias();
    }, []);

    return (
        <main className="flex-1 bg-slate-100 px-6 py-8">
            <section className="mx-auto w-full max-w-7xl">
                <h1 className="mb-6 text-3xl font-bold text-slate-900">
                    Categorias
                </h1>

                {isLoading && (
                    <div className="flex justify-center py-16">
                        <SyncLoader
                            color="#4338ca"
                            size={16}
                        />
                    </div>
                )}

                {!isLoading && erro && (
                    <p className="py-16 text-center font-bold text-red-600">
                        {erro}
                    </p>
                )}

                {!isLoading &&
                    !erro &&
                    categorias.length === 0 && (
                        <p className="py-16 text-center text-3xl">
                            Nenhuma categoria foi encontrada!
                        </p>
                    )}

                {!isLoading && !erro && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categorias.map((categoria) => (
                            <CardCategorias
                                key={categoria.id}
                                categoria={categoria}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}