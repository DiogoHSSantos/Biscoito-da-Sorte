import {Component} from "react";
import Botao from './components/botao.jsx'
import biscoito from './assets/biscoito.png'

class App extends Component{
  constructor(props:any){
    super(props);

    this.state = {
     };
  }

  render(){
    return(
      <div id="body">
        <div className="header">
          <h1>biscoito da sorte</h1>
        </div>
        <div className="main">
          <img src={(biscoito)} alt="biscoito" id="biscoitoImage"/>
          <Botao/>
        </div>
        <div className="footer">
          <a href="https://www.instagram.com/diogoo_h._dev/"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/diogo-henrique-22732221b/"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://github.com/DiogoHSSantos"><i className='bx bxl-github'></i></a>

        </div>
        
      </div>
    )
  }
}


export default App;