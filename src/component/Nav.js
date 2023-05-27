import './Nav.css';
import Logo from "../images/kisspng-the-lorax-once-ler-youtube-clip-art-dr-seuss-5ac9bfec3bdba8.9696196215231713082452.png"
import {FaFacebookSquare, FaInstagram, FaTiktok, FaGithub} from "react-icons/fa";
import { useState } from 'react';
import {FIMenu, FiMenu} from "react-icons/fi"
<script src="https://kit.fontawesome.com/a076d05399.js"></script>

function Nav(){
    
    const [flex, setFlex] = useState('flex');
    const [nav, setNav] = useState(true);
    const [checked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!checked);
      setFlex(checked ? 'flex' : 'none');
    };
  

    return(
    <div className={checked ? 'Container disabled' : 'Container'}>
        
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
    <FiMenu
        size={25}
        type="checkbox"
        id="checkBox"
        className="Hamburguer"
        checked={checked}
        onClick={handleCheckboxChange}
        />
      

			
            
    </div>
    );

}
export default Nav