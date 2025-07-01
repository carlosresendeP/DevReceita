import { useState } from "react";



const ChatBox = ({onSendMessage, disabled })=>{

    const [message, setMessage] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault(); //previne o comportamento padrao do form de recarregar a pagina

        onSendMessage(message); //chama a funcao que vem do componente pai e passa o valor do input
        setMessage(""); //limpa o input apos enviar a mensagem
    }


 return(
    <div className="border-t border-gray-200 bg-gray-50/80 p-4"> 
        <form className="flex space-x-3"
            onSubmit={handleSubmit}>
            <input 
                type="text"
                value={message}
                onChange={ (e)=> setMessage(e.target.value)} //vai trazer o valor so do input 
                placeholder="Digite o ingrediente que deseja"
                disabled={disabled}
                className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 outline-none focus: ring-purple-500" />
            <button  
            type="submit"
            disabled={disabled}
            className="px-8 py-3 text-sm font-semibold  bg-gradient-to-r from-amber-400 to-amber-600 
            hover:from-amber-600 hover:to-amber-800
            transition-colors duration-300
            focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
            text-white rounded-full
            disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed">Enviar</button>
        </form>
    </div>
 )
}

export default ChatBox;