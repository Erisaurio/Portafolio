
import '../Main/main.css';

const rowstyle = {
  backgroundColor: 'blue',
   
};

const col2 = {
  backgroundColor: 'red',
  
};

const colh1 = {
  backgroundColor: '#6ee963',
  height: '100vh'
};

const colh2 = {
  backgroundColor: '#ff03d5',
  height: '100vh'
};

const colh3 = {
  backgroundColor: '#578bf3',
  height: '100vh'
};

const colh4 = {
  backgroundColor: '#ecb724',
  height: '100vh'
};

const Main = () => {
  return (
    
    <div className="col-12">
      <div className="row">
        <div className="col-4 " style={col2}>
          
          <div className="lefh-side">
            <img className = "mb-3" src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"/>
            <div id="list-example" className="list-group " >
              <a class="list-group-item list-group-item-action" href="#list-item-1">Eri Alejandro</a>
              <a class="list-group-item list-group-item-action" href="#list-item-2">Sobre Mi</a>
              <a class="list-group-item list-group-item-action" href="#list-item-3">Portafolio</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">Educacion</a>
              <a class="list-group-item list-group-item-action" href="#list-item-5">Competencias</a>
              <a class="list-group-item list-group-item-action" href="#list-item-6">Contacto</a>
            </div>
          </div>
         
        </div>
        <div className="col-8" style={rowstyle}>

          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            
          <div id="list-item-1"></div>
              <div className="WelcomePart align-items-center" style={colh1}>

           
                <div className="row  justify-content-center" >
                  <div className="col-md-10 col-sm-8"  style={{backgroundColor:'blue'}}>

                    <h1>BIENVENIDO A MI PORTAFOLIO</h1>
                    <h2>Eri Alejandro</h2>
                    <p>Te Invito a Ponte en contacto conmigo escríbeme a</p><a>correo@h.com</a>
                  
                    <button>Descarga mi CV</button> <br />
                    <i>in</i> <i>in</i> <i>in</i> <i>in</i>
                  </div>
                </div>
                
              </div>

              <div id="list-item-2"></div>
              <div className="AboutMePart align-items-center" style={colh2}>

              
              <h1 id="">Sobre Mi</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <img src="" alt="" />
                    <p>Programador full stack que gusta de mejorar constantemente abierto en aprender nuevas tecnologías poniendo en practica el uso de diseño de interfaces UC y UI, mostrando de forma limpia e intuitiva, sin dejar de lado el manejo adecuado de las bases de datos.</p>
                  
                  </div>
                </div>
                
              </div>
              
              <div id="list-item-3"></div>
              <div className="PortafolioPart align-items-center" style={colh3}>

                <h1 id="">Portafolio</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                  </button>
                  
                  </div>
                </div>

              </div>

              <div id="list-item-4"></div>
              <div className="EducationPart align-items-center" style={colh3}>

                <h1 id="">Educacion</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <h4>UANL- Facultad de Ciencias Físico Matemáticas </h4>
                    <p>Especializado en programación y diseño de interfaces</p>
                  
                  </div>
                </div>

              </div>

              <div id="list-item-5"></div>
              <div className="SkillsPart Part d-flex align-items-center" style={colh4}>

                <h1 id="">Competencias</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <h3>Lenguajes</h3>
                    <p></p>
                    <h3>Framework</h3>
                  
                  </div>
                </div>

              </div>

              <div id="list-item-6"></div>
              <div className="ContactPart d-flex align-items-center" style={colh4}>

                <h4 id="">Contáctame</h4>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <p>email</p>
                    <p>Telefono</p>
                    <p>LinkedIn</p>

                    <h4>ESTE SITIO ESTÁ DESSAROLLADO CON:</h4>
                    <p>html,css,javascpt,boostrap</p>
                  
                  </div>
                </div>

              </div>
          
          </div>

        </div>
      </div>
    </div>
    
   
  );
}

export default Main;
