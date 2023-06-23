import React from 'react';
import Item from './item';

class ItemsTable extends React.Component {
	render() {
		const items = this.props.items.map((item)=>{
			return (
				<Item
					key={item.key}
					item={item}
					addCartItem={this.props.addCartItem}
				/>
			);
		});

		return (
			<container>
				<div className='row col-lg-12 col-xs-12'>
					{items}
				</div>
				
			</container>
		);
	}
}

export default ItemsTable;