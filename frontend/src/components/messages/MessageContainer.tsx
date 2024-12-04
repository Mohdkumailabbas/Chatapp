import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti"

const MessageContainer = () => {
  const noChatSelected=false;
  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {noChatSelected ? (
        <NoChatSelected/>
      ):(

        <>
      {/* header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text mr-2">To <span className="text-rose-300">:</span></span>
        <span className="text-gray-900 font-bold">Alex</span>
      </div>
      
       {/* Messages */}
       <div className="flex-1 overflow-auto"> {/* Allow Messages to scroll */}
        <Messages />
      </div>
      <MessageInput/>
      </>
      )}
    </div>
  )
}

export default MessageContainer
const NoChatSelected=()=>{
  return(
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
       <p>Welcome 👋 Jhon ❄  </p>
       <p>Select a chat to start messaging</p>
       <TiMessages className="text-3xl md:6xl text-center"/>
      </div>

    </div>
  )
}