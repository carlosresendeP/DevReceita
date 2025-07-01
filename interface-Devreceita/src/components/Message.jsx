

const Message = ({ message }) => {


    const isBot = message.sender === 'bot';

    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
            <div className={`max-w-xs lg:max-w-md px-5 py-4c rounded-2xl shadow-2xl hover:shadow-xl cursor-pointer
                ${isBot ? 'bg-gray-50 text-gray-800 rounded-bl-none border border-gray-300'
                    : 'bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-br-none border border-amber-400'}
                `}>
                <p className="text-sm whitespace-pre-line py-3 px-2">{message.text}</p>
            </div>
        </div>
    )
}

export default Message;