import '../assets/styles/Inicio.css'
import inicio from '../assets/imgs/inicio.png'

const Inicio = () => {

  return (
      <div className="main-inicio">
        <div className="text-inicio animate-left">
            <div className='title-inicio'>
              <h1>Un Software de <s>Recursos Humanos </s><span>Gestión de Personas</span></h1>
            </div>
            <div className='p-inicio'>
              <p>Nuestro sistema centraliza todas las tareas de gestión de personas en una sola plataforma: pago de nómina, gestión de talento, gestión del personal y más. Te ayudamos a crear lugares de trabajo más felices</p>
            </div>
            <div className='btns-inicio'>
              <button className='contact'><a href="#">Contáctanos</a></button>
              <button className='ver'><a href="#"><img src="" alt="" />▶️Ver videos demo</a></button>
            </div>
        </div>
        <div className="img-inicio animate-right">
          <div className="img-content">
            <img src={inicio} alt="" />
          </div>
        </div>
      </div>
  );
}

export default Inicio;