import { FC } from "react";
import "../estilos/home-admin.css";
import {Prato} from "../componetes/Home"
import ActionsPrato from "./ActionsPrato";
import { AxiosInstance } from "axios";

interface PratoProps {
  pratos: Prato[];
  api: AxiosInstance
}



const HomeGerente: FC<PratoProps> = (props) => {
  return (
    <div className="tabela-container">
      <table>
        <thead className="content-table">
          <tr className="table-row">
            <th>Nome</th>
            <th>Descrição Resumida</th>
            <th>Valor</th>
            <th>Cozinha</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="content-table">
          {props.pratos &&
            props.pratos.map((prato) => (
              <tr className="table-row">
                <td>{prato.nome}</td>
                <td>{prato.descricao_resumida}</td>
                <td>{prato.valor}</td>
                <td>{prato.cozinha}</td>
                <td className="buttons">
                  <ActionsPrato pratoId={prato.id} api={props.api}/>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeGerente;
