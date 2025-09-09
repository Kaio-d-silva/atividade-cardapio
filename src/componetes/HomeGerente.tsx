const HomeGerente = () =>{
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cozinha</th>
                    <th>Descrição Resumida</th>
                    <th>Descrição Detalhada</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Feijoada</td>
                        <td>Brasileira</td>
                        <td>Feijão com porco</td>
                        <td>Folha de loro, feijão, bacon</td>
                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                            <button>Ver Detalhes</button>
                        </td>
                    </tr>
            </tbody>
        </table>
        </>
    )
}

export default HomeGerente