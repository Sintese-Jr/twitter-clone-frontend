import React from "react";
import "../../styles/MenuPerfil.css"
import CardMenu from "./menuComponents/CardMenu";

export default function MenuPerfil() {

    return (
        <div className="menuperfil">
            <CardMenu icone="fa-solid fa-circle-user" texto="My Profile" cor="gray"/>
            <CardMenu icone ="fa-solid fa-user-group" texto="Group Chat" cor="gray"/>
            <CardMenu icone="fa-solid fa-gear" texto="Settings" cor="black"/>
            <br></br>
            <CardMenu icone="fa-solid fa-arrow-right-from-bracket" texto="Logout" cor="red"/>
        </div>
    );
}