import '../src/cssFiles/App.css';
import Lorax from "./images/Lorax.png";
import Nav from './component/Nav';
import Logo from "./images/NicePng_lorax-png_581113.png"
function App() {
  return (
    
    <div>
      <Nav></Nav>
        <section className='landing'>
        
            <div className='LandingContainer'>
            <div className='Left'> 
            
             
             <div className="Description">   
                <div className='logoDiv'>
                  <img className="Logo" src={Logo}/>
                </div> 
                
                <p>O menino Ted descobriu que o sonho de sua paixão, a bela Audrey, é ver uma árvore de verdade, algo em extinção. Disposto a realizar este desejo, ele embarca numa aventura por uma terra desconhecida, cheia de cor, natureza e árvores. É lá que conhece também o simpático e ao mesmo tempo rabugento Lorax, uma criatura curiosa preocupada com o futuro de seu próprio mundo. 
                </p>
                </div>
                <div className="buttons">
                    <div className="Trailer"> <a> Trailer</a> </div>
                    <div className="Watch"> <a> Watch full movie</a></div>
                </div>
            </div>
            <div className='LoraxImage'>
                  <img className='LoraxPng' src={Lorax}/> 
            </div>
            </div>
        </section>

    </div>
  );
}

export default App;
