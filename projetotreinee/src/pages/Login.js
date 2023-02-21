import React from "react";
import "../styles/Login.css";
import LogoTweeter from "../images/tweeter.svg"
export default function LoginPage() {


    return (
        <body>
            <div className="container13">
                <div className="box box-one">
                    <i className><img src={LogoTweeter}/></i>
                </div>
                <div className="box box-two">
                    <form>
                        <input type="text" placeholder="Telefone,email, ou usuário"/>
                        <input type="password" placeholder="Senha"/>
                    </form>
                    <button className="next-btn">Entrar</button>
                    <button>Esqueci minha senha</button>
                </div>
                <p>Não tem uma conta? <a href="#">Registre-se</a></p>
            </div>
        </body>
    )
}