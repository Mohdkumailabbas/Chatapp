// import React from 'react'

import MessageContainer from "../components/messages/MessageContainer"
import Sidebar from "../components/Sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg shadow-md bg-gray-400 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home