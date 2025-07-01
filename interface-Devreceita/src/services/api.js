import axios from "axios";



const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const api = async (ask) => {
    try {
        const response = await axios.post(`${API_URL}receitas/perguntar`, {
            ask
        })
        return response.data.response;

    } catch (err) {
        console.error("Erro ao buscar resposta no servidor:", err);
        throw err
    }
}