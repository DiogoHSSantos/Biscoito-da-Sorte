import {Component} from "react";
import "../styles/botao.css"

class Botao extends Component <{},{frases:Array<string>, texto:String}>{
 constructor(props:any){
    super(props);
    
    this.state = {
        texto: 'Abra o biscoito para receber a frase',
        frases: [
            'Você é a melhor pessoa do mundo!',
            'Acredite em você!',
            'você consegue tudo o que quiser !',
            'Seja forte!',
            'Amanhã vai ser melhor que hoje!',
            'Vai ficar tudo bem!',
            'Sempre tente ser uma boa pessoa'
        ]
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
 }

 quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.state.frases.length);

    let fraseEscolhida = this.state.frases[numeroAleatorio];
    this.setState({texto: fraseEscolhida })

 }
 render(){
    return(
        <div className="container">
            <button onClick={this.quebraBiscoito}>Abrir biscoito</button>
            <p>{this.state.texto}</p>
        </div>
    )
 }
}

export default Botao
