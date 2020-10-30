// import React, { Component } from "react";
// import { Modal, Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// class SignIn extends Component {
//     render() {
//         return (
//             <Modal aria-labelledby="contained-modal-title-vcenter">
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Using Grid in Modal
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className="show-grid">
//                     <Container>
//                         <Row>
//                             <Col xs={12} md={8}>
//                                 .col-xs-12 .col-md-8
//                             </Col>
//                             <Col xs={6} md={4}>
//                                 .col-xs-6 .col-md-4
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={6} md={4}>
//                                 .col-xs-6 .col-md-4
//                             </Col>
//                             <Col xs={6} md={4}>
//                                 .col-xs-6 .col-md-4
//                             </Col>
//                             <Col xs={6} md={4}>
//                                 .col-xs-6 .col-md-4
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         );
//     }
// }

// export default SignIn;

import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class SignIn extends Component {

	constructor() {
        super();
		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Modal show={this.state.show} onHide={() => this.handleClose()}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => this.handleClose()}>
							Close
                        </Button>
						<Button variant="primary" onClick={() => this.handleClose()}>
							Save Changes
                        </Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default SignIn;
