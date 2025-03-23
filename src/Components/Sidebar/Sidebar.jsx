import React, { useContext } from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import { Contexapi } from '../../Contex'




const Sidebar = () => {
    const {sidebar,setCatagory,catagory} = useContext(Contexapi)
  
  return (
    <div className={`side-bar ${sidebar?'':'small-sidebar'}`}>
        <div className="top-bar">
            <div className={`side-links ${catagory===0?'active':''}`} onClick={()=>setCatagory(0)}>
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className={`side-links ${catagory===20?'active':''}`} onClick={()=>setCatagory(20)}>
                <img src={game_icon} alt="" />
                <p>Gaming</p>
            </div>
            <div className={`side-links ${catagory===2?'active':''}`} onClick={()=>setCatagory(2)}>
                <img src={automobiles} alt="" />
                <p>Automobiles</p>
            </div>
            <div className={`side-links ${catagory===17?'active':''}`} onClick={()=>setCatagory(17)}>
                <img src={sports} alt="" />
                <p>Sports</p>
            </div>
            <div className={`side-links ${catagory===24?'active':''}`} onClick={()=>setCatagory(24)}>
                <img src={entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className={`side-links ${catagory===28?'active':''}`} onClick={()=>setCatagory(28)}>
                <img src={tech} alt="" />
                <p>Technology</p>
            </div>
            <div className={`side-links ${catagory===10?'active':''}`} onClick={()=>setCatagory(10)}>
                <img src={music} alt="" />
                <p>Music</p>
            </div>
            <div className={`side-links ${catagory===22?'active':''}`} onClick={()=>setCatagory(22)}>
                <img src={blogs} alt="" />
                <p>Blogs</p>
            </div>
            <div className={`side-links ${catagory===25?'active':''}`} onClick={()=>setCatagory(25)}>
                <img src={news} alt="" />
                <p>News</p>
            </div>
            <hr/>
        </div>
        <div className="bottom-bar">
            <h3>Subscribed</h3>
            <div className="side-links">
                <img src={jack} alt="" />
                <p>Pawdiepie</p>
            </div>
            <div className="side-links">
                <img src={simon} alt="" />
                <p>Mr. Beast</p>
            </div>
            <div className="side-links">
                <img src={tom} alt="" />
                <p>Justine Bieber</p>
            </div>
            <div className="side-links">
                <img src={megan} alt="" />
                <p>5-Minutes Crafts</p>
            </div>
            <div className="side-links">
                <img src={cameron} alt="" />
                <p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar