import logo from '../../logo.svg';
import '../Modalwebsite/modalweb.css';

const Modalweb = () => {
  return (
    <div className="App">
      
      
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div class="modal fade modal-right" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog " id="modal-nav">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                    </div>
                    <div class="row">
                    <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                    <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                    </div>
                    <div class="row">
                    <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                    </div>
                    <div class="row">
                    <div class="col-sm-9">
                        Level 1: .col-sm-9
                        <div class="row">
                        <div class="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                        </div>
                        <div class="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

    </div>
  );
}

export default Modalweb;
