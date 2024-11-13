import '../css/Navigation.css';
import { Link } from 'react-router-dom';
import React,{useState} from 'react';
const Navigation = ()=>{
    const [toggle, setToggle] = useState(false);
    return(
        <>
        <nav className="navigation_main">
        <div className="nav_control">
                <div className="navLists">
                    <Link to="/">Homepage</Link>
                </div>
                <div className="navLists">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="navLists">
                    <Link to="/experience">Experience</Link>
                </div>
                <div className="navLists">
                    <Link to="/cv">Resume</Link>
                </div>
                <div className="navLists">
                    <Link to="/contacts">Contacts</Link>
                </div>
            </div>
            {
               (!toggle) ? <img onClick={()=>{setToggle(!toggle)}} src="manu_open.png" alt="manu opening logo"/>:
               <img onClick={()=>{setToggle(!toggle)}} src="manu_close.png" alt="manu opening logo"/> 
            }
            {
                (toggle)?
                <div className="mobnav_control">
                <div className="navLists mob_navLists">
                    <Link to="/">Homepage</Link>
                </div>
                <div className="navLists  mob_navLists">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="navLists mob_navLists">
                    <Link to="/experience">Experience</Link>
                </div>
                <div className="navLists mob_navLists">
                    <Link to="/cv">Cv</Link>
                </div>
                <div className="navLists mob_navLists">
                    <Link to="/contacts">Contacts</Link>
                </div>
            </div>
                :''
                
            }
            
        </nav>
        </>
    )
}
export default Navigation;