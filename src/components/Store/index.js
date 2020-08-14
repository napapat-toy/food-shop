import React, { Component } from 'react';

export default class Store extends Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.shop);
        const { id, name, img, detail, address } = this.props.shop
        const { removeShop } = this.props
        return (
            <div>
                <div className="img-container">
                    <img src={img} />
                    <span className="close-btn" onClick={() => removeShop(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="shop-info">
                    <h3>{name}</h3>
                    <h4>{detail}</h4>
                    <h5>{address}</h5>
                </div>
            </div>
        )
    }
}