import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import imagen25 from './assets/imagen25.jpg';
import imagen50 from './assets/imagen50.png';
import rexooo from './assets/rexooo.jpg';
import imagen100 from './assets/imagen100.png';
import musica from './assets/musica.mp3'; // Importa el archivo de música
import videoPersonalizado from './assets/videoPersonalizado.mp4'; // Importa el video personalizado
import videoAlejaYRexo from './assets/RexoYAleja.mp4';

import './Resultado.css';

function Resultado() {
  const location = useLocation();
  const { nombre1, nombre2 } = location.state || { nombre1: '', nombre2: '' };

  const [mostrandoCarga, setMostrandoCarga] = useState(true); // Estado para la animación de carga
  const navigate = useNavigate();

  const calcularPorcentaje = () => {
    return Math.floor(Math.random() * 101);
  };

  const porcentaje = calcularPorcentaje();

  const manejarDevolver = () => {
    navigate('/'); // Redirige a la página principal
  };

  // Simula un retraso para mostrar la animación de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrandoCarga(false); // Oculta la animación después de 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  useEffect(() => {
    if (!mostrandoCarga && porcentaje >= 75) {
      const audio = new Audio(musica); // Crea un nuevo objeto de audio
      audio.volume = 0.3
      audio.play(); // Reproduce la música
    }
  }, [mostrandoCarga, porcentaje]);

  const obtenerImagen = () => {
    if (porcentaje <= 25) return imagen25;
    if (porcentaje <= 50) return imagen50;
    if (porcentaje <= 75) return rexooo;
    return imagen100;
  };

  // Verifica si los nombres coinciden con las condiciones específicas
  const esVideoPersonalizado =
    (nombre1.toLowerCase() === 'pablo' || nombre1.toLowerCase() === 'rexito' || nombre1.toLowerCase() === 'aliss' || nombre1.toLowerCase() === 'alis') &&
    ['alis', 'aliss', 'señora salvaje', 'señorita salvaje', 'rexito', 'pablo'].includes(nombre2.toLowerCase());

  const videoAlejaYRexoPersonalizado = 
  (nombre1.toLowerCase()=== 'pablo'  || nombre1.toLowerCase() === 'rexito'  || nombre1.toLowerCase() === 'aleja') && ['pablo', 'rexito', 'aleja'].includes(nombre2.toLowerCase());

  return (
    <>
      <div className='div-main1-resultado'>
        <div className="calculadora-amor-text-resultado">
          {mostrandoCarga ? (
            // Animación de carga
            <div className="carga">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                className="corazon-carga"
              >
                <path
                  className='heartbeat'
                  fill="red"
                  transform='scale(1.5)'
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <p className='p-cargando'>Cargando resultado...</p>
            </div>
          ) : esVideoPersonalizado && porcentaje > 75 ? (
            // Muestra el video personalizado si se cumplen ambas condiciones
            <div>
              <h2 className='h2-resultado'>Resultado de la Compatibilidad</h2>
              <p className='p-cargado'>
                La compatibilidad entre {nombre1} y {nombre2} es del .
              </p>
              <p className='porcentaje'>{porcentaje}%</p>
              <video
                src={videoPersonalizado}
                loop
                autoPlay
                className="video-personalizado"
              ></video>
              <br />
              <button id="calcular" className="btn-calcular" onClick={manejarDevolver}>
                Atrás
              </button>
            </div>
          ) : videoAlejaYRexoPersonalizado && porcentaje > 75 ? (
            //video rexito y aleja

            // Muestra el video personalizado si se cumplen ambas condiciones
            <div>
              <h2 className='h2-resultado'>Resultado de la Compatibilidad</h2>
              <p className='p-cargado'>
                La compatibilidad entre {nombre1} y {nombre2} es del .
              </p>
              <p className='porcentaje'>{porcentaje}%</p>
              <video
                src={videoAlejaYRexo}
                loop
                autoPlay
                className="video-personalizado"
              ></video>
              <br />
              <button id="calcular" className="btn-calcular" onClick={manejarDevolver}>
                Atrás
              </button>
            </div>
          ) : (
            // Resultado estándar
            <div>
              <h2 className='h2-resultado'>Resultado de la Compatibilidad</h2>
              <p className='p-cargado'>
                La compatibilidad entre {nombre1} y {nombre2} es del .
              </p>
              <p className='porcentaje'>{porcentaje}%</p>
              <img src={obtenerImagen()} alt="Resultado" className="resultado-imagen" />
              <br />
              <button id="calcular" className="btn-calcular" onClick={manejarDevolver}>
                Atrás
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Resultado;