import {BsSend} from "react-icons/bs"
const MessageInput = () => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    console.log("Message sent!");
  };
  return (
    <form onSubmit={handleSubmit}  className="px-4 my-3" >
      <div className="flex gap-2">
      <div className="w-full">
       <input type="text" 
        placeholder="Send a Message"
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
       />
      </div>
      <button type='submit'  className="flex items-center justify-center text-white right-6 bottom-[15px]  " >
        <BsSend/>
      </button>
      </div>
      
    </form>
  )
}

export default MessageInput