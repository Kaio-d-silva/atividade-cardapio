import { useNavigate } from "react-router-dom"
import logoCarrinho from "../assets/carrinho.png"
import "../estilos/botao-carrinho.css"

export const BotaoCarrinho = () => {
    const navigador = useNavigate()
    return(
        <div className="carrinho">
            <button onClick={ () => navigador("/carrinho") }><img className="logo-carrinho"
            src={logoCarrinho} 
            alt="" /></button>
        </div>
    )
}