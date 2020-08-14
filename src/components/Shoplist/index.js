import React, { Component } from 'react';
import Store from "../Store"
import { shopdata } from "../../data"
export default class ShopList extends Component {

    state = {
        shops: shopdata
    }
    removeShop = id => {
        // console.log(id);
        const { shops } = this.state;
        const sortedshop = shops.filter(shop => shop.id !== id)
        this.setState({
            shops: sortedshop
        })
    }

    render() {
        const { shops } = this.state;
        // console.log(shops);
        const { removeShop } = this.state
        return (
            <div className="shopList">
                {shops.map(shop => (
                    <Store key={shop.id} shop={shop} removeShop={this.removeShop} />
                ))}
            </div>
        )
    }
}