import { FC } from "react"
import CardPrato from "./CardPrato"
import { Prato } from "./Home"

interface HomeClienteProps {
    pratos: Prato[],
    usuario: any
}
export const HomeCliente: FC<HomeClienteProps> = (props) => {
    return(
        <>
        {props.pratos
        .map((item: Prato) => (

        <CardPrato 
          key={item.id}
          id={item.id}
          nome={item.nome} 
          cozinha={item.cozinha} 
          descricao_resumida={item.descricao_resumida} 
          imagem={item.imagem} 
          usuario={props.usuario}
        />
      ))}</>
    )
}