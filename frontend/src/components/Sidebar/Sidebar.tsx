import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <hr className="mt-1 border-gray-500 " />
      <div className="divder  px-3 ">
        <Conversations/>
        <hr className="mt-2 mb-2 border-gray-500 " />
        <LogoutButton />
      </div>
    </div>
  )
}

export default Sidebar