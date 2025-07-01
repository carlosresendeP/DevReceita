import { useEffect, useRef } from "react";
import Message from "./Message";

const ListMesagens = ({messages, loading})=>{

    const messageRef = useRef();

    const scrollDown = ()=>{
        messageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }

    useEffect(() => {
        scrollDown();

    }, [messages])
    

    return(
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {
                messages.map(message => (
                    <Message key={messages.id} message={message} />
                ))
            }

            {
                loading && (
                    <div className="flex justify-start">
                        <div className="rounded-2xl rounded-bl-none p-4 shadow-md bg-gray-50 border-gray-300">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-amber-900 rounded-full animate-pulse delay-100"></div>
                                <div className="w-3 h-3 bg-emerald-800 rounded-full animate-pulse delay-200"></div>
                            </div>
                        </div>
                    </div>
                )
            }


            <div ref={messageRef}>

            </div>
        </div>
    )
}
export default ListMesagens;