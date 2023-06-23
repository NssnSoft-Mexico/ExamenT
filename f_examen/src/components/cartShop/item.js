import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SVGM from '../imagenes/Buttons/iventario.svg';
import CardGroup from 'react-bootstrap/CardGroup';
import Modal from '@mui/material/Modal';

class Item extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();

		this.props.addCartItem(this.props.item);
	}

	showModal = () => {
    	this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<div className='row col-lg-3 col-xs-12'>
				<CardGroup>
					<Card style={{ width: '18rem' }} className="card border-0 text-center">
						<Card.Img variant="top" src={SVGM} />
						<ListGroup className="list-group-flush">
							<ListGroup.Item>{this.props.item.name+' '}</ListGroup.Item>
							<ListGroup.Item>{this.props.item.price+'$'}</ListGroup.Item>
							<ListGroup.Item><Button className='bGeneral' variant="contained">Ver más</Button></ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#"><Button className='bGeneral' onClick={this.handleClick} variant="contained">+ Agregar</Button></Card.Link>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		);
	}
}

export default Item;