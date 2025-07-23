import { useState } from "react";
import "../estilos/login.css";
// import api from "../http/api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  // const logar = async () => {
  //   try {
  //     const res = await api.post("/login", {
  //       email: email,
  //       senha: senha,
  //     });

  //     const { token, refreshToken } = res.data;

  //     localStorage.setItem("token", token);
  //     localStorage.setItem("refreshToken", refreshToken);
      
  //     navigate('/')

  //   } catch (error: unknown) {
  //     console.log("deu erro")
  //   }
  // };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <div className="container-login">
        <div className="login">
          <div className="login-img">
            <img
              src="https://img.freepik.com/vetores-premium/colecao-de-ilustracao-de-comida-desenhada-de-mao_699403-8.jpg?w=1380"
              alt="imagem login"
            />
          </div>
          <div className="login-form">
            <h2>LOGIN</h2>
            <input
              id="email"
              type="text"
              placeholder="E-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="senha"
              type="text"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="login-btn" onClick={() => (navigate('/'))}>
              Logar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
