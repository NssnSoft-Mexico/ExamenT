import React from 'react';
import SVGM from '../imagenes/Buttons/Vector.svg';
import { Button } from 'react-bootstrap';

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleCheckout();
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				<Button onClick={this.handleClick} variant="contained"><img className='sizeImageB' src={SVGM} /></Button>
				Carrito de Compras ({this.props.cartItems.length})
			</div>

		);
	}
}

export default ShoppingCart;