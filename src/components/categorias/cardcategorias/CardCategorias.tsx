import {
    PencilSimpleIcon,
    TrashIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import type Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
    categoria: Categoria;
}

export default function CardCategorias({
    categoria,
}: CardCategoriasProps) {
    return (
        <article className="flex w-full flex-col overflow-hidden rounded-lg border border-indigo-800 bg-white shadow-md">
            <h3 className="bg-indigo-800 px-4 py-2 font-bold text-white">
                Categoria
            </h3>

            <p className="min-h-24 px-4 py-6 text-xl font-semibold text-slate-900">
                {categoria.nome}
            </p>

            <div className="flex items-center justify-center gap-4 bg-indigo-800 py-2 text-white">
                <Link
                    to={`/categorias/editar/${categoria.id}`}
                    aria-label={`Editar categoria ${categoria.nome}`}
                    title="Editar categoria"
                    className="rounded p-1 transition-colors hover:bg-indigo-600"
                >
                    <PencilSimpleIcon size={20} />
                </Link>

                <Link
                    to={`/categorias/deletar/${categoria.id}`}
                    aria-label={`Deletar categoria ${categoria.nome}`}
                    title="Deletar categoria"
                    className="rounded p-1 transition-colors hover:bg-red-500"
                >
                    <TrashIcon size={20} />
                </Link>
            </div>
        </article>
    );
}