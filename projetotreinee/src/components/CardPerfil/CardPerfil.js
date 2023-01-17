import React from "react";
import "../../styles/cardperfil.css"
import CapaDisplay from "./CapaDisplay";
import UserDisplay from "./UserDisplay";

export default function CardPerfil(props) {

    return (
        <div className="cardperfil">
            <CapaDisplay />
            <UserDisplay />
        </div>
    );
}