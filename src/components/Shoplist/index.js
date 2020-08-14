import React, { Component } from 'react';
import Store from "../Store"
import { shopdata } from "../../data"
export default class ShopList extends Component {

    state = {
        shops: shopdata
    }

    render() {
        console.log(1);
        const { shops } = this.state;
        console.log(shops);
        return (
            <div>
                {shops.map(shop => (
                    <Store key={shop.id} shop={shop} />
                ))}
            </div>
        )
    }
}