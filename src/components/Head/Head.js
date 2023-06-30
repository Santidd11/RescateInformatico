import React from 'react';
import { Parallax } from 'react-parallax';
import titulo from "../assets/logos/Titulo-removebg-preview.png";
import placa from "../assets/images/placa.png";
import './Head.css';

const Head = () => {
    return (
        <div>
          <div className="landing-page">
            <Parallax bgImage={placa} strength={500} style={{ height: '90vh' }} className='mb-4'>
            <img src={titulo} alt="Ejemplo de Servicio Técnico de Computadoras" className="title-image" />
              <div className="description">
                <div className="content">
                  <h1>Servicio Técnico Computacional</h1>
                  <p>
                    Tu aliado confiable para resolver cualquier problema informático. Desde diagnósticos y reparaciones rápidas hasta actualizaciones de hardware y configuración de redes, nuestro equipo de técnicos certificados está listo para brindarte soluciones efectivas y personalizadas. Con más de 20 años de experiencia en el rubro, garantizamos un servicio de calidad y la máxima satisfacción del cliente.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      );
      
};

export default Head;

