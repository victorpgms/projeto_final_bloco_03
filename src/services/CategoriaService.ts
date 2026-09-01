import type Categoria from "../models/Categoria";
import { api } from "./Service";

export const categoriaService = {
    // POST /categorias
    cadastrar: async (
        dadosCategoria: Categoria,
    ): Promise<Categoria> => {
        const resposta = await api.post<Categoria>(
            "/categorias",
            dadosCategoria,
        );

        return resposta.data;
    },

    // GET /categorias
    buscar: async (): Promise<Categoria[]> => {
        const resposta = await api.get<Categoria[]>(
            "/categorias",
        );

        return resposta.data;
    },

    // GET /categorias/{id}
    buscarPorId: async (
        id: number,
    ): Promise<Categoria> => {
        const resposta = await api.get<Categoria>(
            `/categorias/${id}`,
        );

        return resposta.data;
    },

    // PUT /categorias
    atualizar: async (
        dadosCategoria: Categoria,
    ): Promise<Categoria> => {
        const resposta = await api.put<Categoria>(
            "/categorias",
            dadosCategoria,
        );

        return resposta.data;
    },

    // DELETE /categorias/{id}
    deletar: async (id: number): Promise<void> => {
        await api.delete(`/categorias/${id}`);
    },
};