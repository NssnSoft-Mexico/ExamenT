import React from 'react';
import CartItem from './cartItem'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SVGM from '../imagenes/Buttons/iventario.svg';
import CardGroup from 'react-bootstrap/CardGroup';

class ShoppingList extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleCheckout();
	}

	render() {
		let totalPrice = 0;
		const cartItems = this.props.cartItems.map((cartItem)=>{
			totalPrice += cartItem.item.price * cartItem.quantity;
			return (
				<CartItem 
					key={cartItem.item.key}
					cartItem={cartItem}
					changeCartItemQuantity={this.props.changeCartItemQuantity}
					removeCartItem={this.props.removeCartItem}
				/>
			);
		})
		return (
			<div className='row'>
				<div className='row col-lg-8 col-xs-12' style={{ display: 'contents'}}>
				<CardGroup>
					<Card style={{ width: '18rem' }} className="border-0 text-center col-lg-4 col-xs-12" >
						<ListGroup className="list-group-flush">
							<ListGroup.Item>{cartItems}</ListGroup.Item>
							<ListGroup.Item>Total: {'$ ' + totalPrice}</ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#"><Button className='btn btn-primary btn-lg' onClick={this.handleClick} variant="contained">Seguir Comprando</Button></Card.Link>
						</Card.Body>
					</Card>
				</CardGroup>
				</div>
			</div>
			
		);
	}
}

export default ShoppingList;