import { useState } from "react"
import ListMesagens from "../components/listMessages";
import ChatBox from "../components/ChatBox";
import { api } from "../services/api";


export const ChatReceitas = () => {
    const [loading, setloading] = useState(false);
    const [messages, setMessages] = useState([

        {
            id: 1,
            text: "Olá, eu sou o DevChef! Que receita você gostaria de aprender hoje?",
            sender: "bot"
        }
    ]);

    const onSendMessage = async (message) => {

        const newMessageUser = {
            id: Date.now(),
            text: message,
            sender: "user"
        }

        setMessages(prev => [...prev, newMessageUser]);
        setloading(true);


        try {
            const response = await api(message)

            const newMessageBot ={
                id: Date.now() + 1,
                text: response,
                sender: "bot"
            }

            setMessages(prev => [...prev, newMessageBot]); // adiciona a nova mensagem do bot à lista de mensagens ...prev significa que estamos pegando o estado anterior e adicionando a nova mensagem
            console.log(response);

        } catch (err) {
            console.error("Erro ao enviar mensagem:", err);

            const newMessageError = {
                id: Date.now() +2,
                text: 'Falha ao enviar a mensagem, tente novamente mais tarde.',
                sender:"bot"
            }

            setMessages(prev => [...prev, newMessageError]);
        } finally {
            setloading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-200 to-black/80 p-4">
            <div className=" container mx-auto max-w-4xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-bl from-orange-400 to-amber-950 text-transparent bg-clip-text mb-2">🥘 DevChef</h1>
                    <p className="text-gray-200 text-lg">Seu assistente pessoal para receitas deliciosas</p>
                </header>

                <div className="bg-white/50 backdrop-blur-sm rounded-l-2xl overflow-hidden shadow-xl h-[600px] border border-gray-200 flex flex-col">
                    <ListMesagens messages={messages} loading={loading} ></ListMesagens>

                    <ChatBox onSendMessage={onSendMessage} disabled={loading} ></ChatBox>
                </div>


            </div>
        </div>
    )
}