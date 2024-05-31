
import '../Modalwebsite/modalweb.css';
import Modal from '../modal/modal'

import {useState, useRef, useEffect} from "react"

const Modals = ( ) => {

    const [ModalName, setModalName] = useState('');
    const [ModalColor, setModalColor] = useState('');



  return (
    <div className="container">
      
      
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
           onClick={() => {
                    setModalName("Ropa");   
                    setModalColor("ModalColorB");                                 
                }}>
            Launch demo modal 1
        </button>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
           onClick={() => {
                    setModalName("Fighting");   
                    setModalColor("ModalColorR");                                 
                }}>
            Launch demo modal 2
        </button>

        <Modal nombre = {ModalName} Color = {ModalColor} />


    </div>
  );
}

export default Modals;
