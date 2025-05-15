import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pareja1 from './assets/pareja1.png';
import pareja2 from './assets/pareja2.png';
import pareja3 from './assets/pareja3.png';
import pareja4 from './assets/pareja4.png';
import pareja5 from './assets/pareja5.png';
import pareja6 from './assets/pareja6.png';
import rexoyaleja from './assets/rexoyaleja.png';
import './Calculadora.css';

function Calculadora() {
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para mostrar/ocultar el modal
  const [imagenSeleccionada, setImagenSeleccionada] = useState(''); // Imagen seleccionada
  const navigate = useNavigate();

  const manejarCalcular = () => {
    navigate('/resultado', { state: { nombre1, nombre2 } }); // Redirige a Resultado con datos
  };

  const abrirModal = (imagen) => {
    setImagenSeleccionada(imagen); // Establece la imagen seleccionada
    setModalVisible(true); // Muestra el modal
  };

  const cerrarModal = () => {
    setModalVisible(false); // Oculta el modal
    setImagenSeleccionada(''); // Limpia la imagen seleccionada
  };

  return (
    <>
      <div className='div-main1'>
        <div className='div-main'>
          <header className="calculadora-amor-header">Calculadora de Amor</header>

          <div className="calculadora-amor-text">
            <label htmlFor="nombre1" className='label-calculadora'>Nombre 1</label>
            <br />
            <input
              className='input-calculadora'
              type="text"
              id="nombre1"
              placeholder="Escribe tu nombre"
              value={nombre1}
              onChange={(e) => setNombre1(e.target.value)}
            />
            <br />
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="bi bi-arrow-through-heart" viewBox="0 0 16 16">
              <path fill="red" fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
            </svg>
            <br />
            <label htmlFor="nombre2" className='label-calculadora'>Nombre 2</label>
            <br />
            <input
              className='input-calculadora'
              type="text"
              id="nombre2"
              placeholder="Escribe tu nombre"
              value={nombre2}
              onChange={(e) => setNombre2(e.target.value)}
            />
            <br />
            <button id="calcular" className="btn-calcular-calculadora" onClick={manejarCalcular}>
              Calcular
            </button>
          </div>
        </div>
      </div>

      <section className='parejas'>
        <header className="parejas-header">Parejas Felices</header>
        <section className="parejas-list">
          <div className="pareja-container">
            <img className='image-pareja' src={pareja1} alt="Pareja 1" onClick={() => abrirModal(pareja1)} />
            <img className='image-pareja' src={pareja2} alt="Pareja 2" onClick={() => abrirModal(pareja2)} />
            <img className='image-pareja' src={pareja3} alt="Pareja 3" onClick={() => abrirModal(pareja3)} />
            <img className='image-pareja' src={pareja4} alt="Pareja 4" onClick={() => abrirModal(pareja4)} />
            <img className='image-pareja' src={pareja5} alt="Pareja 5" onClick={() => abrirModal(pareja5)} />
            <img className='image-pareja' src={pareja6} alt="Pareja 6" onClick={() => abrirModal(pareja6)} />
            <img className='image-pareja' src={rexoyaleja} alt="Pareja 6" onClick={() => abrirModal(rexoyaleja)} />
          </div>
        </section>
      </section>

      {/* Modal */}
      {modalVisible && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content">
            <img src={imagenSeleccionada} alt="Imagen grande" />
          </div>
        </div>
      )}
    </>
  );
}

export default Calculadora;