import './App.css';
import Lorax from "./images/Lorax.png"
import Nav from './component/Nav';
import Logo from "./images/NicePng_lorax-png_581113.png"
function App() {
  return (
    
    <div>
        <section className='landing'>
        <Nav></Nav>
            <div className='LandingContainer'>
            <div className='Left'> 
            
             
             <div className="Description">    
                <img className="Logo" src={Logo}/>
                <p>O menino Ted (Zac Efron) descobriu que o sonho de sua paixão, a bela Audrey (Taylor Swift), é ver uma árvore de verdade, algo em extinção. Disposto a realizar este desejo, ele embarca numa aventura por uma terra desconhecida, cheia de cor, natureza e árvores. É lá que conhece também o simpático e ao mesmo tempo rabugento Lorax (Danny DeVito), uma criatura curiosa preocupada com o futuro de seu próprio mundo. 
                </p>
                </div>
                <div className="buttons">
                    <button className="Trailer">Watch Trailer</button>
                    <button className="Watch">Watch full</button>
                </div>
            </div>
            <div className='LoraxImage'>
                  <img className='LoraxPng' src={Lorax}/> 
            </div>
            </div>
        </section>
        
        <section className='about'>

        </section>
        
        <section className='contact'>

        </section>
    </div>
  );
}

export default App;
