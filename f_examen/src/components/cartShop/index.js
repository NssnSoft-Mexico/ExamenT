import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import ItemsTable from './itemsTable'
import ShoppingCart from './shoppingCart'
import ShoppingList from './shoppingList'
import {API_PORTAL_URL} from '../../constants';

var DEFAULT_CATEGORY = {key:'default', name: 'Cualquier categoría'}

var ITEMS = [
				{
					key:0,
					name:'Metformina',
					category:'Medicamentos',
					price: 40000
				},
				{
					key:1,
					name:'Glibenclamida',
					category:'Medicamentos',
					price: 20000
				},
				{
					key:2,
					name:'Paracetamol',
					category:'Medicamentos',
					price: 30000
				},
				{
					key:3,
					name:'Losartan',
					category:'Medicamentos',
					price: 150000
				},
				{
					key:4,
					name:'Alopurinol',
					category:'Medicamentos',
					price: 25000
				},
			]

var CATEGORIES = [
					{
						key:1,
						name:'Kits',
					},
					{
						key:2,
						name:'Camaras',
					},
					{
						key:3,
						name:'Cercos',
					},
					{
						key:4,
						name:'Alarmas',
					},
				]

function fetchCategories() {
	const fetchedCategories = CATEGORIES;
	const defaultCategory = [DEFAULT_CATEGORY];
	const categories = defaultCategory.concat(fetchedCategories);
	return categories;
}

function fetchItems(keywords, category) {
	const fetchedItems = ITEMS;
	let filteredItems = [];

	fetchedItems.forEach((item) => {
		if(
			category === DEFAULT_CATEGORY.name 
			|| item.category === category
		) {
			let found = false;
			keywords.forEach((keyword) => {
				if (item.name.search(keyword) > -1) {
					found = true;
				}
			});
			if(found) {
				filteredItems.push(item);
			}
		}
	});

	return filteredItems;
}

async function fectchData(){
    const response = await fetch(API_PORTAL_URL + "/alldata/product")
    const jsonData = await response.json();
    console.log("hdu", jsonData.data)

    this.setState(({
        users: 'jsonData.data'
    }));
}
class CartItems extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			category:   '',
			categories: [],
			items:      [],
			cartItems:  [],
            users: '',
			checkout: false
		};

		this.addCartItem = this.addCartItem.bind(this);
		this.changeCartItemQuantity = this.changeCartItemQuantity.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.onSearchBarChange = this.onSearchBarChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.removeCartItem = this.removeCartItem.bind(this);
		this.toggleCheckout = this.toggleCheckout.bind(this);
	}

	componentDidMount() {
		const items = fetchItems([''], DEFAULT_CATEGORY.name);
		const categories = fetchCategories();
		const category = DEFAULT_CATEGORY.name;
		this.setState({category, categories, items});
        console.log("aasas", this.state.users)
        fectchData()
	}

	addCartItem(item) {
		let cartItems = this.state.cartItems;
		const index = cartItems.findIndex(x => x.item.key===item.key);

		if(index < 0) {
			const newCartItem = {item: item, quantity: 1};
			cartItems.push(newCartItem);
		} else {
			cartItems[index].quantity++;
		}

		this.setState({cartItems});
	}

	changeCartItemQuantity(key, quantity) {
		let cartItems = this.state.cartItems;
		const index = cartItems.findIndex(x => x.item.key===key);

		if (index > -1) {
			cartItems[index].quantity = quantity;
			this.setState({cartItems});
		}
	}

	onCategoryChange(category) {
		this.setState({category});
	}

	onSearchBarChange(filterText) {
		this.setState({filterText});
	}

	onSearch(keywords, category) {
		const items = fetchItems(keywords, category);
		this.setState({items});
	}

	removeCartItem(key) {
		let cartItems = this.state.cartItems;
		const index = cartItems.findIndex(x => x.item.key===key);

		if (index > -1) {
			cartItems.splice(index, 1);
			this.setState({cartItems});
		}
	}

	toggleCheckout() {
		this.setState(prevState => ({
			checkout: !prevState.checkout
		}));
	}
    

	render() {
		if(!this.state.checkout) {
			return (
				<div>
					<ItemsTable
						items={this.state.items}
						addCartItem={this.addCartItem}
					/>
					<ShoppingCart 
						cartItems={this.state.cartItems}
						toggleCheckout={this.toggleCheckout}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<ShoppingList
						cartItems = {this.state.cartItems}
						changeCartItemQuantity = {this.changeCartItemQuantity}
						removeCartItem = {this.removeCartItem}
						toggleCheckout = {this.toggleCheckout}
					/>
				</div>
			);
		}
	}
}


export default CartItems;