import { FC } from  "react"
import '../estilos/home-admin.css'

interface PratoProps{
    nome : string
    cozinha : string
    descricao_resumida : string
    descricao_detalhada : string
}

const HomeGerente: FC<PratoProps> = (props) =>{
    return(
        <div className="tabela-container">
        <table>
            <thead className="content-table">
                <tr className="table-row">
                    <th>Nome</th>
                    <th>Cozinha</th>
                    <th>Descrição Resumida</th>
                    <th>Descrição Detalhada</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody className="content-table">
                    <tr className="table-row">
                        <td>{props.nome}</td>
                        <td>{props.cozinha}</td>
                        <td>{props.descricao_resumida}</td>
                        <td>{props.descricao_detalhada}</td>
                        <td className='buttons'>
                            <button>Editar</button>
                            <button>Excluir</button>
                            <button>Ver Detalhes</button>
                        </td>
                    </tr>
            </tbody>
        </table>
        </div>
    )
}

export default HomeGerente