import React, { Component } from 'react';

export default class Store extends Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.shop);
        const { id, name, img, detail, address } = this.props.shop
        return (
            <h2>Hello Store</h2>
        )
    }
}