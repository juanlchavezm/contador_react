import React, { useState } from 'react';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';

function App() {
  const users = [
    {
    'nombre': 'Brais',
    'pais': 'España',
    'imagen': 'brais',
    'cargo': 'Ingeniero de Software',
    'Empresa': 'Fundador de Moure Dev',
    'resena': 'Es un desarrollador español que comparte recursos educativos en Youtube',
    'linkedin': 'https://www.linkedin.com/in/braismoure/',
    'youtube': 'https://www.youtube.com/@mouredev',
    'twitter': 'https://twitter.com/mouredev'
  },
  {
    'nombre': 'Facundo',
    'pais': 'Colombia',
    'imagen': 'facundo',
    'cargo': 'Ingeniero de Software',
    'empresa': 'Fundador Facundo',
    'resena': 'Es un desarrollador español que comparte recursos educativos en Youtube',
    'linkedin': 'https://es.linkedin.com/in/facundo-herrera-fullstack-developer',
    'youtube': 'https://www.youtube.com/@FacundoHerreraok',
    'twitter': 'https://twitter.com/facundozurdo'
  },
  {
    'nombre': 'Miguel Ángel Durán García',
    'pais': 'España',
    'imagen': 'midudev',
    'cargo': 'Ingeniero de Software',
    'empresa': 'Fundador de midudev',
    'resena': 'Es un desarrollador español que comparte recursos educativos en Youtube',
    'linkedin': 'https://es.linkedin.com/in/midudev',
    'youtube': 'https://www.youtube.com/c/midudev',
    'twitter': 'https://twitter.com/midudev'
  },
];
// Declarar un nuevo estado de contador
const [contador, setContador] = useState(0);
return (
  <>
    <div className='contenedor-principal'>
      <div className='contenedor'>
      <h1>Mis cuentas favoritas de YouTube son: </h1>
      {users.map((users) => (
        <Perfil
          key={users.nombre}
          nombre={users.nombre}
          pais={users.pais}
          imagen={users.imagen}
          cargo={users.cargo}
          empresa={users.empresa}
          resena={users.resena}
          linkedin={users.linkedin}
          youtube={users.youtube}
          twitter={users.twitter}
        />
      ))}
      {/* Agregamos un contador y un boton para incrementar */}
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador(contador+1)}>
        Has click aqui
      </button>
      <Contador />
      </div>
    </div>
  </>
);
}

export default App;
