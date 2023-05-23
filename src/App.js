import './App.css';
import Lorax from "./images/Lorax.png"
import Nav from './component/Nav';
function App() {
  return (
    
    <div className='container'>
        <Nav></Nav>
        <section className='landing'>
            <div className='LoraxImage'>
                  <img className='LoraxPng' src={Lorax}/> 
            </div>
            <div className='LandingText'> 
                <h1 className='title'>
                  Lorax
                </h1>
                <p>
                Lorem ipsum dolor sit amet. Et suscipit enim aut eligendi explicabo sit dolorem debitis et odit ipsam et voluptatem minus. Ea placeat rerum ut dolore nostrum <br/>aut repudiandae accusantium. Aut modi neque a accusantium nemo aut quibusdam tenetur et repellat voluptatem ut repudiandae corporis. Non laudantium asperiores<br/> quo alias galisum qui rerum libero aut repellendus mollitia.
                </p>
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
