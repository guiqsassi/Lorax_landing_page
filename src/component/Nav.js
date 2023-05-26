import './Nav.css';
import Logo from "../images/kisspng-the-lorax-once-ler-youtube-clip-art-dr-seuss-5ac9bfec3bdba8.9696196215231713082452.png"
import {FaFacebookSquare, FaInstagram, FaTiktok, FaGithub} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

function Nav(){
    
    const [flex, setFlex] = useState('flex')
    const [nav, setNav] = useState(true)
    let [checked, setChecked] = useState(false)

    
    function check () {
            

            console.log(checked)

    }

    return(
    <div className="Container">
        
    <nav  style={{display: flex, transition: '0.3s'}}>
        <div className="mainNavegation"> 
            <img src={Logo} className="LogoNav"/>
            <ul>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
        </ul>
        </div>
        <div className="socialMediaNavegation">
            <FaFacebookSquare size={25}  href="https://google.com" target="_blank" className='socialIcon'></FaFacebookSquare>
            <FaInstagram size={25} href="https://www.twitch.tv/ranboolive" target="_blank" className='socialIcon'></FaInstagram>
            <FaTiktok size={25} className='socialIcon'></FaTiktok>
            <FaGithub size={25} className='socialIcon'></FaGithub>  
            
        </div>
    </nav>
    <input type='checkbox' size={25} id='checkBox'  className='Hamburguer'/>
    </div>
    );

}
export default Nav