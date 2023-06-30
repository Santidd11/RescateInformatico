import React from 'react';
import './Soportes.css';

const Soportes = () => {
  return (
    <div className='soporte'>
      <h2 className="title">Disponemos de 3 alternativas de Asesoramiento para cubrir todas tus demandas</h2>
      <div className="cards-container">
        <div className="card remoto">
          <h3>Soporte Remoto</h3>
          <p>El soporte remoto se realiza de forma virtual, sin necesidad de que el cliente salga de su casa. Un técnico especializado se conecta a la computadora del cliente a través de internet para solucionar los problemas o brindar la asistencia necesaria.</p>
        </div>
        <div className="card local">
          <h3>Soporte en Local</h3>
          <p>En el soporte en local, el cliente debe llevar su computadora o equipo al local técnico. Allí, un especialista examinará y resolverá los problemas de la máquina de manera física, realizando reparaciones o instalaciones necesarias.</p>
        </div>
        <div className="card presencial">
          <h3>Soporte Presencial</h3>
          <p>El soporte presencial implica que un técnico se traslade al domicilio del cliente para brindar el soporte necesario. Esta modalidad es ideal cuando los problemas no pueden resolverse de forma remota o cuando se requiere una atención personalizada en el entorno del cliente.</p>
        </div>
      </div>
    </div>
  );
}

export default Soportes;
