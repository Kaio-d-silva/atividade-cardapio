import logoCarrinho from "../assets/carrinho.png"
import "../estilos/carrinho.css"

export const BotaoCarrinho = () => {
    return(
        <div className="carrinho">
            <img className="logo-carrinho"
            src={logoCarrinho} 
            alt="" />
        
        </div>
    )
}