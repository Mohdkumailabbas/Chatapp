
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public/12" alt="Tailwind Css  chat bubble componenet" />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-blue-500'}> HEy what's up</div>     
      <div className="chat-footer opacity-50 text-xs flex gap-1 item centre">12:00</div>
    </div>
  )
}
export default Message