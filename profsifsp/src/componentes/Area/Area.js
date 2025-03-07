import React from "react";
import "./Area.css";
import Professor from "../Professor/Professor";

const Area = (props) => {
    return (
        (props.professores.length > 0) ? <section className="area" style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className="professores">
                {props.professores.map(prof => <Professor
                                                key={prof.nome}
                                                nome={prof.nome}
                                                titulo={prof.titulo}
                                                imagem={prof.imagem}
                                                />)}
            </div>
        </section>
        : ''
    )
}
export default Area;