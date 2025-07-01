import admin from '../assets/imgs/admin.png';
import beneficios from '../assets/imgs/beneficios.png';
import desarrollo from '../assets/imgs/desarrollo.png';

const Blogs = () => {

  return (
    <div className="content-header">
      <div className="title-header">
        <div className="titulo">
          <h1 id="tituloT"><span id="spanT">Soluciones</span> de nuestro Software</h1>
        </div>
        <div className="parrafo">
          <p id="parrafoT">Nuestra plataforma integral cuenta con distintas soluciones que te permiten automatizar los procesos de Gestión de Personas en tu empresa.</p>
        </div>
      </div>
      <div className="main-content">
        <div className="plataforma">
          Plataforma
        </div>
        <div className="blogs">
          <div className="admin">
            <img src={admin} alt="" width={100} />
            <div className="texto">
              <h3>Administracion</h3><br />
              <p>Optimiza tu tiempo gestionando nómina y recursos Humanos con nuestra plataforma facil e intuitiva.</p>
            </div>
            <div className="lista">
              <ul>
                <li>Software de Nómina</li>
                <li id='line'></li>
                <li>Control de asistencias</li>
                <li id='line'></li>
                <li>Firma Electronica y Gestión Documental</li>
                <li id='line'></li>
                <li>Onboarding</li>
                <li id='line'></li>
                <li>Canal de Denuncias</li>
                <li id='line'></li>
                <li>Servicio al colaborador</li>
                <li id='line'></li>
                <li>Gestión de Activos</li>
              </ul>
            </div>
          </div>
          <div className="desarrollo">
              <div className="texto">
              <h3>Administracion</h3><br />
              <p>Optimiza tu tiempo gestionando nómina y recursos Humanos con nuestra plataforma facil e intuitiva.</p>
            </div>
            <div className="lista">
              <ul>
                <li>Gestión del Desempeño</li>
                <li id='line'></li>
                <li>Capacitación Laboral</li>
                <li id='line'></li>
                <li>Comunicación y Reconocimiento Laboral</li>
                <li id='line'></li>
                <li>Reclutamiento y Selección de Personal</li>
                <li id='line'></li>
                <li>Encuentas</li>
                <li id='line'></li>
                <li>Servicio al colaborador</li>
                <li id='line'></li>
                <li>Gestión de Activos</li>
              </ul>
            </div>
          </div>
          <div className="beneficios"></div>
        </div>
      </div>
    </div>
  );

};

export default Blogs;