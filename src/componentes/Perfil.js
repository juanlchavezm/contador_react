import React, {useState} from 'react';
import '../estilos/Perfil.css';

function Perfil(props) {
    const [numeroLinkedin, setNumeroLinkedin] = useState(0);
    const [numeroYoutube, setNumeroYoutube] = useState(0);
    const [numeroTwitter, setNumeroTwitter] = useState(0);

    const aumentarLinkedin = () => {
        setNumeroLinkedin(numeroLinkedin + 1);
    };
    const aumentarYoutube = () => {
        setNumeroYoutube(numeroYoutube + 1);
    };
    const aumentarTwitter = () => {
        setNumeroTwitter(numeroTwitter + 1);
    };

    console.log(props.imagen);
    console.log(`../imagenes/perfil-${props.imagen}.png`);
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto'
            />
            <div className='contenedor-texto-perfil'>
            <p className='pais-perfil'>
                {props.nombre} en {props.pais}
            </p>
            <p className='cargo-perfil'>
                {props.cargo} en {props.empresa}
            </p>
            <p className='resena-perfil'>
                {props.resena}
            </p>
            </div>
            <button onClick={() => {window.open(props.linkedin, '_blank'); aumentarLinkedin()} }>
                Seguir en LinkedIn ({numeroLinkedin})
            </button>
            <button onClick={() => {window.open(props.youtube, '_blank'); aumentarYoutube()} }>
                Seguir en YouTube ({numeroYoutube})
            </button>
            <button onClick={() => {window.open(props.twitter, '_blank'); aumentarTwitter() }}>
                Seguir en X ({numeroTwitter})
            </button>
        </div>
    );
}

export default Perfil;