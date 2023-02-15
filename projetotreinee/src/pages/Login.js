import React from "react";
import "../styles/Login.css";
import LogoTweeter from "../images/tweeter.svg"
export default function LoginPage() {


    return (
        <body>
            <div class="container13">
                <div class="box box-one">
                    <i class><img src={LogoTweeter}/></i>
                </div>
                <div class="box box-two">
                    <form>
                        <input type="text" placeholder="Telefone,email, ou usuário"/>
                        <input type="password" placeholder="Senha"/>
                    </form>
                    <button class="next-btn">Entrar</button>
                    <button>Esqueci minha senha</button>
                </div>
                <p>Não tem uma conta? <a href="#">Registre-se</a></p>
            </div>
        </body>
    )
}