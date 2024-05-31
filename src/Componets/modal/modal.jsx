
import '../modal/modal.css';

const Modal = (props) => {
  return (
    <div className="App">
      
        <div className="modal fade modal-right" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " id="modal-nav">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{props.nombre}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className= "modal-body" id={props.Color}>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-4">.col-md-4</div>
                        <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                        </div>
                        <div className="row">
                        <div className="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                        <div className="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                        </div>
                        <div className="row">
                        <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                            <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                            </div>
                            <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
        </div>
        </div>

    </div>
  );
}

export default Modal;