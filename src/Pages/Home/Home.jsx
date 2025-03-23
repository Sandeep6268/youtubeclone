import React, { useContext } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Contexapi } from '../../Contex'
import Feed from '../../Components/Feed/Feed'

const Home = () => {
  const {sidebar} = useContext(Contexapi)
  return (
    <div className='home'>
        <Sidebar/>
        <div className={`feed-container ${sidebar?'':'large-feed-container'}`}>
          <Feed/>
        </div>
    </div>
  )
}

export default Home