import React, { Component, PropTypes } from 'react';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart } = this.props;

        addToCart(id);
    }

    render() {
        const { type, price, description } = this.props;

        return (
            <div className="product">
                <h3 className="product__type">
                    {type.toUpperCase()}
                </h3>
                <div className="product__description">{description}</div>
                <div className="product__price">${price}</div>
                <div className="product__button-wrap">
                    <button onClick={this.handleClick}>
                        Add to cart
                    </button>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default Product;
