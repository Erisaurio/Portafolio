import logo from '../../logo.svg';
import '../Main/main.css';

const rowstyle = {
  backgroundColor: 'blue',
   
};

const col2 = {
  backgroundColor: 'red',
  
};

const colfollow = {
 
  position: 'sticky',
  top: 'calc(var(--header-offset, 40vh) + 2em)'

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
        <div className="col-4" style={col2}>

          <div id="list-example" class="list-group" style={colfollow}>
            <a class="list-group-item list-group-item-action" href="#list-item-1">Eri Alejandro</a>
            <a class="list-group-item list-group-item-action" href="#list-item-2">Sobre Mi</a>
            <a class="list-group-item list-group-item-action" href="#list-item-3">Portafolio</a>
            <a class="list-group-item list-group-item-action" href="#list-item-4">Educacion</a>
            <a class="list-group-item list-group-item-action" href="#list-item-5">Competencias</a>
            <a class="list-group-item list-group-item-action" href="#list-item-6">Contacto</a>
          </div>

        </div>
        <div className="col-8" style={rowstyle}>

          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            
              <div className="col d-flex align-items-center" style={colh1}>

              <h1 id="list-item-1">Eri Alejandro</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <h3>BIENVENIDO A MI PORTAFOLIO</h3>
                    <p>Te Invito a Ponte en contacto conmigo escríbeme a</p><a>correo@h.com</a>
                  
                    <button>Descarga mi CV</button>
                    <i>in</i>
                  </div>
                </div>
                
              </div>

              <div className="col d-flex align-items-center" style={colh2}>

              <h1 id="list-item-2">Sobre Mi</h1>
              
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <img src="" alt="" />
                    <p>Programador full stack que gusta de mejorar constantemente abierto en aprender nuevas tecnologías poniendo en practica el uso de diseño de interfaces UC y UI, mostrando de forma limpia e intuitiva, sin dejar de lado el manejo adecuado de las bases de datos.</p>
                  
                  </div>
                </div>
                
              </div>
              
              <div className="col d-flex align-items-center" style={colh3}>

                <h1 id="list-item-3">Portafolio</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                  </button>
                  
                  </div>
                </div>

              </div>

              <div className="col d-flex align-items-center" style={colh3}>

                <h1 id="list-item-4">Educacion</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <h4>UANL- Facultad de Ciencias Físico Matemáticas </h4>
                    <p>Especializado en programación y diseño de interfaces</p>
                  
                  </div>
                </div>

              </div>

              <div className="col d-flex align-items-center" style={colh4}>

                <h1 id="list-item-5">Competencias</h1>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <h3>Lenguajes</h3>
                    <p></p>
                    <h3>Framework</h3>
                  
                  </div>
                </div>

              </div>

              <div className="col d-flex align-items-center" style={colh4}>

                <h4 id="list-item-6">Contáctame</h4>
                <div className="row  justify-content-center" >
                  <div className="col-10" style={{backgroundColor:'blue'}}>

                    <p>email</p>
                    <p>Telefono</p>
                    <p>LinkedIn</p>

                    <h3>ESTE SITIO ESTÁ DESSAROLLADO CON:</h3>
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

 /*
      <div className="col" style={colh1}>
        <h4 id="list-item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
      
      <div className="col" style={colh2}>
        <h4 id="list-item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>

      <div className="col" style={colh3}>
        <h4 id="list-item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>

      <div className="col" style={colh4}>
        <h4 id="list-item-4">Item 4</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    */

    /*
    <div class="row" style={ rowstyle }>
      <div class="col-4">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
          <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
          <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
          <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
      </div>
      <div class="col-8">
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
          <h4 id="list-item-1">Item 1</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        </div>
      </div>
    </div>
    */

export default Main;
