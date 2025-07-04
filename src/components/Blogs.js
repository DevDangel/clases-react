import admin from '../assets/imgs/admin.png';
import beneficios from '../assets/imgs/beneficios.png';
import desarrollo from '../assets/imgs/desarrollo.png';
import '../assets/styles/Blogs.css'
import { useEffect } from 'react';


const Blogs = () => {
 useEffect(() => {
  const elements = document.querySelectorAll('.group');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <>
    <div className="frame">
      <div className="video animate-left">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DLtJL6g0F84?si=7Y1JoyXiEpo12P6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="frame-Text animate-right">
        <div className="frame-title">
          <h2>Simplifica y centraliza a toda la gestión de personas a través de nuestra plataforma</h2>
        </div>
        <div className="frame-list">
          <ul className='custom-bullets'>
            <li>Reduce hasta un 60% del tiempo dedicado a tus tareas administrativas.</li>
            <li>Nuestra base de más de 6 mil clientes felices respaldan nuestro compromiso</li>
            <li>Nuestro tiempo de respuesta en atención al cliente es de tan solo 30 segundos.</li>
          </ul>
          <button><a href="">Contáctanos</a> </button>
        </div>
      </div>
    </div>     

    <div className="content-header">
      <div className="title-header">
        <div className="titulo">
          <h1><span>Soluciones</span> de nuestro Software</h1>
        </div>
        <div className="parrafo">
          <p>Nuestra plataforma integral cuenta con distintas soluciones que te permiten automatizar los procesos de Gestión de Personas en tu empresa.</p>
        </div>
      </div>
      <div className="main-content">
        <div className="plataforma">
          <a href=''>Plataforma </a>
        </div>
        <div className="blogs">
          <div className="admin group">
            <img src={admin} alt="" width={100}className='admin-img' />
            <div className="texto">
              <h3>Administracion</h3><br />
              <p>Optimiza tu tiempo gestionando nómina y recursos Humanos con nuestra plataforma facil e intuitiva.</p>
            </div>
            <div className="lista">
              <ul>
                <li><a href="#nomina">Software de Nómina</a></li>
                <li id="line"></li>
                <li><a href="#asistencias">Control de asistencias</a></li>
                <li id="line"></li>
                <li><a href="#firma">Firma Electrónica y Gestión Documental</a></li>
                <li id="line"></li>
                <li><a href="#onboarding">Onboarding</a></li>
                <li id="line"></li>
                <li><a href="#denuncias">Canal de Denuncias</a></li>
                <li id="line"></li>
                <li><a href="#colaborador">Servicio al colaborador</a></li>
                <li id="line"></li>
                <li><a href="#activos">Gestión de Activos</a></li>
              </ul>
            </div>
          </div>
          <div className="desarrollo group">
              <img src={desarrollo} alt="" width={100}/>
              <div className="texto">
              <h3>Desarrollo Organizacional</h3><br />
              <p>Fortalece tu cultura e impulsa la gestión del talento humano..</p>
            </div>
            <div className="lista">
              <ul>
              <li><a href="#desempeno">Gestión del Desempeño</a></li>
              <li id='line'></li>
              <li><a href="#capacitacion">Capacitación Laboral</a></li>
              <li id='line'></li>
              <li><a href="#comunicacion">Comunicación y Reconocimiento Laboral</a></li>
              <li id='line'></li>
              <li><a href="#reclutamiento">Reclutamiento y Selección de Personal</a></li>
              <li id='line'></li>
              <li><a href="#encuestas">Encuestas</a></li>
              <li id='line'></li>
              <li><a href="#colaborador">Servicio al colaborador</a></li>
              <li id='line'></li>
              <li><a href="#activos">Gestión de Activos</a></li>
              </ul>
            </div>
          </div>
          <div className="beneficios group">
            <img src={beneficios} alt=""  width={100} className='beneficio-img'/>
            <div className="texto">
              <h3>Beneficios</h3><br />
              <p>Potencia el bienestar de tus colaboradores con la oferta más completa y flexible de beneficios corporativos.</p>
            </div>
             <div className="lista">
              <ul>
                  <li><a href="#beneficios">Gestión de Beneficios</a></li>
                  <li id='line'></li>
                  <li><a href="#planes">Planes de Beneficios</a></li>
                  <li id='line'></li>
                  <li><a href="#adelantos">Adelantos de Nómina</a></li>
                  <li id='line'></li>
                  <li><a href="#descuentos">Pack de descuentos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

};
export default Blogs;